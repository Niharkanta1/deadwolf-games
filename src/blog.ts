import markdownIt from "markdown-it";

interface BlogManifestPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  icon: string;
  contentFile?: string;
  featured?: boolean;
  published?: boolean;
  author?: string;
  readTime?: number;
}

interface BlogManifest {
  posts: BlogManifestPost[];
}

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  icon: string;
  category: string;
  featured?: boolean;
  published?: boolean;
  author?: string;
  readTime?: number;
}

const md = markdownIt({
  html: true,
  linkify: true,
  breaks: true,
});

const MANIFEST_URL = new URL("../content/blog-manifest.json", import.meta.url)
  .href;

function getYouTubeVideoId(url: string): string | null {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname.replace(/^www\./, "");

    if (hostname === "youtu.be") {
      const pathSegments = parsedUrl.pathname.split("/").filter(Boolean);
      return pathSegments[0] || null;
    }

    if (hostname === "youtube.com" || hostname === "m.youtube.com") {
      const videoId = parsedUrl.searchParams.get("v");
      if (videoId) {
        return videoId;
      }

      const pathSegments = parsedUrl.pathname.split("/").filter(Boolean);
      if (pathSegments[0] === "shorts" && pathSegments[1]) {
        return pathSegments[1];
      }

      if (pathSegments[0] === "embed" && pathSegments[1]) {
        return pathSegments[1];
      }
    }
  } catch {
    return null;
  }

  return null;
}

function renderMarkdownWithMedia(markdown: string): string {
  let content = markdown;

  content = content.replace(
    /\[([^\]]+)\]\((https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)[^)]+)\)/gi,
    (match, label, url) => {
      const videoId = getYouTubeVideoId(url);
      if (!videoId) {
        return match;
      }

      return `<div class="blog-video-wrapper"><iframe src="https://www.youtube.com/embed/${videoId}" title="${label}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
    },
  );

  content = content.replace(
    /https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)[^\s)]+/gi,
    (url) => {
      const videoId = getYouTubeVideoId(url);
      if (!videoId) {
        return url;
      }

      return `<div class="blog-video-wrapper"><iframe src="https://www.youtube.com/embed/${videoId}" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
    },
  );

  return md.render(content);
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return (await response.json()) as T;
}

async function loadMarkdownContent(post: BlogManifestPost): Promise<string> {
  const fileName = post.contentFile || `${post.slug}.md`;
  const url = new URL(`../content/blog/${fileName}`, import.meta.url).href;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Markdown not found for ${fileName}`);
    }

    return await response.text();
  } catch (error) {
    console.error(`Error reading markdown file for slug ${post.slug}:`, error);
    return "<!-- ERROR: Content file not found or readable -->";
  }
}

async function generateBlogPosts(): Promise<BlogPost[]> {
  console.log("Starting blog post data generation...");

  let manifest: BlogManifest;

  try {
    manifest = await fetchJson<BlogManifest>(MANIFEST_URL);
  } catch (error) {
    console.error(
      "Failed to load or parse blog-manifest.json. Using empty array.",
      error,
    );
    return [];
  }

  const processedPosts: BlogPost[] = [];

  for (const manifestPost of manifest.posts ?? []) {
    const markdownContent = await loadMarkdownContent(manifestPost);
    const htmlContent = renderMarkdownWithMedia(markdownContent);

    const post: BlogPost = {
      id: manifestPost.id,
      slug: manifestPost.slug,
      title: manifestPost.title,
      date: manifestPost.date,
      excerpt: manifestPost.excerpt,
      content: htmlContent,
      icon: manifestPost.icon,
      category: manifestPost.category,
      published: manifestPost.published ?? true,
      featured: manifestPost.featured ?? false,
    };

    if (manifestPost.author) post.author = manifestPost.author;
    if (manifestPost.readTime) post.readTime = manifestPost.readTime;

    processedPosts.push(post);
  }

  console.log(`Successfully processed ${processedPosts.length} blog posts.`);
  return processedPosts.filter((post) => post.published !== false);
}

let blogPosts: BlogPost[] = [];

export async function initializeBlogData(): Promise<void> {
  blogPosts = await generateBlogPosts();
}

export function generateBlogCards(): void {
  const blogGrid = document.getElementById("blogGrid");

  if (!blogGrid) {
    console.warn("Blog grid element not found. Skipping card generation.");
    return;
  }

  blogGrid.innerHTML = "";

  if (blogPosts.length === 0) {
    blogGrid.innerHTML =
      '<p class="empty-state">No blog posts available yet.</p>';
    return;
  }

  blogPosts.forEach((post) => {
    const blogCard = document.createElement("article");
    blogCard.className = "blog-card";
    blogCard.onclick = () => showBlogPost(post);
    blogCard.style.cursor = "pointer";

    blogCard.innerHTML = `
      <div class="blog-image">${post.icon}</div>
      <div class="blog-card-content">
        <div class="blog-date">${post.date} • ${post.category}</div>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <a href="#" onclick="event.preventDefault()">Read More →</a>
      </div>
    `;

    blogGrid.appendChild(blogCard);
  });
}

function renderBlogArticle(post: BlogPost): void {
  const articleContainer = document.getElementById("blogArticle");
  const listSection = document.getElementById("blogListSection");
  const detailSection = document.getElementById("blogDetailSection");

  if (!articleContainer || !listSection || !detailSection) {
    return;
  }

  listSection.classList.add("hidden");
  detailSection.classList.remove("hidden");

  articleContainer.innerHTML = `
    <div class="blog-post-header">
      <span class="blog-title-icon">${post.icon}</span>
      <h1 class="blog-title">${post.title}</h1>
      <div class="blog-post-meta">
        Published on ${post.date} in ${post.category}
      </div>
    </div>
    <div class="blog-post-body">
      ${post.content}
    </div>
  `;
}

function renderBlogList(): void {
  const listSection = document.getElementById("blogListSection");
  const detailSection = document.getElementById("blogDetailSection");
  const articleContainer = document.getElementById("blogArticle");

  if (!listSection || !detailSection || !articleContainer) {
    return;
  }

  detailSection.classList.add("hidden");
  listSection.classList.remove("hidden");
  articleContainer.innerHTML = "";
}

function showBlogPost(post: BlogPost): void {
  const nextUrl = new URL(window.location.href);
  nextUrl.searchParams.set("post", post.slug);
  window.history.pushState({}, "", nextUrl);
  renderBlogArticle(post);
}

function handleBlogRoute(): void {
  const selectedPostSlug = new URLSearchParams(window.location.search).get(
    "post",
  );

  if (!selectedPostSlug) {
    renderBlogList();
    return;
  }

  const selectedPost = blogPosts.find((post) => post.slug === selectedPostSlug);

  if (!selectedPost) {
    renderBlogList();
    return;
  }

  renderBlogArticle(selectedPost);
}

function setupSmoothScroll(): void {
  document.querySelectorAll('a[href^="index.html#"]').forEach((anchor) => {
    anchor.addEventListener("click", () => {
      return true;
    });
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    await initializeBlogData();
    generateBlogCards();

    const backButton = document.getElementById("blogBackButton");
    if (backButton) {
      backButton.addEventListener("click", () => {
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.delete("post");

        if (window.history.length > 1) {
          window.history.back();
        } else {
          window.location.href = currentUrl.pathname;
        }
      });
    }

    window.addEventListener("popstate", handleBlogRoute);
    handleBlogRoute();
    setupSmoothScroll();
    console.log(
      "✅ Deadwolf Games Blog initialized successfully using content pipeline!",
    );
  } catch (error) {
    console.error("Failed to initialize the blog:", error);
  }
});
