import "./styles/main.css";

// Interface for blog posts
interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  icon: string;
  category: string;
}

// Sample blog posts - Replace with your actual content
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Journey of Creating Our First Game",
    date: "December 15, 2024",
    excerpt:
      "An in-depth look at the challenges and triumphs of developing our first indie game title.",
    content: `
      <h2>The Beginning</h2>
      <p>Starting an indie game development studio is a dream many have, but few pursue. At Deadwolf Games, we took the leap and never looked back. This blog post chronicles our journey from the initial concept to launch.</p>
      
      <h2>The Challenges</h2>
      <p>The first year was filled with learning experiences. We had to balance creativity with technical limitations, budget constraints with ambitious ideas, and long development cycles with the need to stay motivated.</p>
      
      <h2>The Lessons</h2>
      <p>Through it all, we learned that indie game development is as much about persistence as it is about creativity. We learned to embrace our limitations and turn them into our strengths.</p>
      
      <h2>What's Next</h2>
      <p>With our first game complete, we're already planning the next project. The future is bright for Deadwolf Games, and we're excited to share it with our community.</p>
    `,
    icon: "🎮",
    category: "Development",
  },
  {
    id: 2,
    title: "Mastering Pixel Art: Our Techniques and Tools",
    date: "December 8, 2024",
    excerpt:
      "Discover the tools, techniques, and philosophy behind creating beautiful pixel art.",
    content: `
      <h2>Why Pixel Art?</h2>
      <p>In a world of high-resolution graphics and realistic 3D models, pixel art stands out for its charm and accessibility. It tells a story through limited pixels, making every single one count.</p>
      
      <h2>Our Tools</h2>
      <p>We use a combination of industry-standard tools including Aseprite for sprite creation, Pyxel Edit for tileset design, and custom scripts for animation. Each tool serves a specific purpose in our workflow.</p>
      
      <h2>The Process</h2>
      <p>Our pixel art process begins with concept sketches, moves to blocking out colors, and ends with detailed pixel-level refinement. We've developed techniques to maintain consistency across large projects.</p>
      
      <h2>Community Resources</h2>
      <p>We're committed to sharing our knowledge with the community. Check out our tutorial series on pixel art fundamentals available on our YouTube channel.</p>
    `,
    icon: "🎨",
    category: "Art",
  },
  {
    id: 3,
    title: "Game Mechanics That Keep Players Engaged",
    date: "November 30, 2024",
    excerpt:
      "Exploring the core mechanics that make indie games addictive and fun.",
    content: `
      <h2>Understanding Player Motivation</h2>
      <p>What keeps players coming back? Engagement. And engagement comes from well-designed mechanics that provide immediate feedback, clear progression, and meaningful choices.</p>
      
      <h2>Core Mechanics We Love</h2>
      <p>From resource management to puzzle-solving, exploration to combat, we analyze what makes each mechanic compelling and how to implement them in our games.</p>
      
      <h2>Balancing Challenge and Reward</h2>
      <p>The sweet spot between too easy and too hard is where magic happens. We spend countless hours tuning difficulty curves and reward systems to keep players in that flow state.</p>
      
      <h2>Playtesting</h2>
      <p>No amount of theory can replace real playtesting. We involve our community early and often, gathering feedback that shapes our game design decisions.</p>
    `,
    icon: "⚙️",
    category: "Game Design",
  },
  {
    id: 4,
    title: "Marketing Your Indie Game on a Budget",
    date: "November 22, 2024",
    excerpt: "Strategies for reaching your audience without breaking the bank.",
    content: `
      <h2>The Reality of Indie Marketing</h2>
      <p>With limited budgets and no marketing team, indie developers must be creative. We've learned that authentic storytelling and community engagement can be more powerful than any paid advertisement.</p>
      
      <h2>Building Your Community</h2>
      <p>Start early. Engage with your audience on social media, Discord, and forums. Build a community around your game before it's even released.</p>
      
      <h2>Content Creation</h2>
      <p>Creating devlogs, tutorials, and behind-the-scenes content not only showcases your game but also provides value to your audience, building loyalty and trust.</p>
      
      <h2>Partnerships and Collaborations</h2>
      <p>Other indie developers, content creators, and gaming communities can amplify your message. Don't hesitate to reach out and collaborate.</p>
    `,
    icon: "📢",
    category: "Marketing",
  },
  {
    id: 5,
    title: "The Solo Developer Lifestyle",
    date: "November 15, 2024",
    excerpt:
      "Reflections on working alone and maintaining mental health in game development.",
    content: `
      <h2>The Ups and Downs</h2>
      <p>Being a solo developer means total creative control but also total responsibility. It's rewarding when things go right and challenging when they don't.</p>
      
      <h2>Work-Life Balance</h2>
      <p>It's easy to get lost in your project, working late into the night. But maintaining balance is crucial for long-term success and personal well-being.</p>
      
      <h2>Community Support</h2>
      <p>The indie game community is incredibly supportive. Don't hesitate to ask for help, share your struggles, and celebrate your wins with others on the same journey.</p>
      
      <h2>Looking Forward</h2>
      <p>The indie game development journey is personal and unique for each developer. Embrace your path and remember that every successful game started with someone brave enough to try.</p>
    `,
    icon: "💭",
    category: "Personal",
  },
  {
    id: 6,
    title: "Technical Optimization for Indie Games",
    date: "November 8, 2024",
    excerpt:
      "How to optimize your game to run smoothly across different platforms.",
    content: `
      <h2>Performance Matters</h2>
      <p>Whether targeting mobile, console, or PC, performance is crucial. A beautiful game that runs poorly is a game nobody will play.</p>
      
      <h2>Profiling and Debugging</h2>
      <p>We use profiling tools to identify bottlenecks in our code and graphics. Every millisecond counts when you're trying to maintain 60 FPS.</p>
      
      <h2>Art Optimization</h2>
      <p>Smart texture atlasing, sprite batching, and particle effect optimization can dramatically improve performance without sacrificing visual quality.</p>
      
      <h2>Multi-Platform Considerations</h2>
      <p>Different platforms have different capabilities. We optimize for the lowest common denominator while leveraging more powerful hardware when available.</p>
    `,
    icon: "⚡",
    category: "Technical",
  },
];

// Generate blog cards
function generateBlogCards(): void {
  const blogGrid = document.getElementById("blogGrid");

  if (!blogGrid) return;

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

// Show blog post (modal or new page simulation)
function showBlogPost(post: BlogPost): void {
  const container = document.querySelector("body");
  if (!container) return;

  // Create modal overlay
  const modal = document.createElement("div");
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    overflow-y: auto;
  `;

  const postContainer = document.createElement("div");
  postContainer.style.cssText = `
    background: white;
    border-radius: 10px;
    padding: 40px;
    max-width: 800px;
    width: 90%;
    margin: 40px auto;
  `;

  postContainer.innerHTML = `
    <button id="closeModal" style="
      float: right;
      background: var(--primary-color);
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
    ">✕ Close</button>

    <article class="blog-post">
      <div class="blog-post-header">
        <span style="font-size: 3rem; display: block; margin-bottom: 20px;">${post.icon}</span>
        <h1>${post.title}</h1>
        <div class="blog-post-meta">
          Published on ${post.date} in ${post.category}
        </div>
      </div>
      <div class="blog-post-body">
        ${post.content}
      </div>
    </article>
  `;

  modal.appendChild(postContainer);
  container.appendChild(modal);

  // Close modal
  const closeBtn = modal.querySelector("#closeModal");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.remove();
    });
  }

  // Close on outside click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
}

// Setup smooth scroll for navigation links
function setupSmoothScroll(): void {
  document.querySelectorAll('a[href^="index.html#"]').forEach((anchor) => {
    anchor.addEventListener("click", () => {
      // Allow default navigation to index.html
      return true;
    });
  });
}

// Initialize blog page
document.addEventListener("DOMContentLoaded", () => {
  generateBlogCards();
  setupSmoothScroll();
  console.log("🎮 Deadwolf Games Blog initialized!");
});

// Export for module system
export { showBlogPost, generateBlogCards };
