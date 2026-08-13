import "./styles/main.css";

// Interface for video data
interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
}

// Sample YouTube videos - Replace these with actual video IDs
const gamedevVideos: YouTubeVideo[] = [
  {
    id: "f47j_8i-jnQ",
    title: "Grayboxing in my Platformer Game",
    description:
      "The basics of grayboxing and how it helps in designing levels for platformer games.",
  },
  {
    id: "9zSs4WP6rEk",
    title: "Procedural Generation Techniques",
    description:
      "Discover the techniques we use to generate unique and engaging game content.",
  },
  {
    id: "HtJsd0oMhU0",
    title: "A 3d Car Racing Demo",
    description: "Check out our latest 3D car racing demo, showcasing physics",
  },
  {
    id: "u1dJeHZXUiQ",
    title: "How We Create Game Characters",
    description:
      "A behind-the-scenes look at our character design process, from concept art to final in-game models.",
  },
];

// Load YouTube videos dynamically
function loadYouTubeVideos(): void {
  const container = document.getElementById("videosContainer");

  if (!container) return;

  gamedevVideos.forEach((video) => {
    const videoCard = document.createElement("div");
    videoCard.className = "video-card";
    videoCard.innerHTML = `
      <div class="video-frame">
        <iframe 
          src="https://www.youtube.com/embed/${video.id}" 
          allowfullscreen 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <div class="video-info">
        <h3>${video.title}</h3>
        <p>${video.description}</p>
      </div>
    `;
    container.appendChild(videoCard);
  });
}

// Initialize smooth scroll for navigation
function setupSmoothScroll(): void {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(
        (anchor as HTMLAnchorElement).getAttribute("href") || "",
      );
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// Add animation on scroll
function setupScrollAnimation(): void {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
}

// Social links handler
function setupSocialLinks(): void {
  const socialLinks = document.querySelectorAll(".social-links a");

  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", (e) => {
      const target = e.target as HTMLElement;
      target.style.transform = "scale(1.1) rotate(10deg)";
    });

    link.addEventListener("mouseleave", (e) => {
      const target = e.target as HTMLElement;
      target.style.transform = "scale(1) rotate(0deg)";
    });
  });
}

// Handle responsive navigation
function setupResponsiveNav(): void {
  const nav = document.querySelector(".nav");
  const header = document.querySelector(".header");

  if (!nav || !header) return;

  // Add active state to current nav item based on scroll position
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;

      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute("id") || "";
      }
    });

    document.querySelectorAll(".nav a").forEach((link) => {
      const href = (link as HTMLAnchorElement).getAttribute("href");
      const htmlLink = link as HTMLElement;
      if (href === `#${current}`) {
        htmlLink.style.color = "var(--accent-color)";
      } else {
        htmlLink.style.color = "var(--text-light)";
      }
    });
  });
}

// Initialize all functions when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  loadYouTubeVideos();
  setupSmoothScroll();
  setupScrollAnimation();
  setupSocialLinks();
  setupResponsiveNav();

  console.log("🎮 Deadwolf Games website initialized!");
});

// Export for module system
export { loadYouTubeVideos, setupSmoothScroll, setupScrollAnimation };
