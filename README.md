# Deadwolf Games Website

A modern, responsive website for Deadwolf Games indie game development studio built with TypeScript, HTML5, and CSS3. The site features smooth animations, integrated YouTube video player, and a blog system.

## Features

- 🎮 **Modern Design** - Beautiful, responsive UI with smooth animations
- 📱 **Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🎥 **YouTube Integration** - Dynamically embed and showcase game development videos
- 📝 **Blog System** - Interactive blog with modal post viewer
- 🎨 **Custom Styling** - Beautiful color scheme and typography
- ⚡ **Fast Performance** - Built with Vite for optimal performance
- 📍 **Contact Section** - Embedded Google Maps and contact information
- 🔗 **Social Links** - Easy integration with social media platforms
- ♿ **Accessible** - Semantic HTML and ARIA labels for better accessibility

## Sections

1. **Header** - Navigation bar with smooth scroll to sections
2. **Hero Section** - Video showcase with tagline
3. **About** - Studio information with subsections
4. **Videos** - YouTube game development videos
5. **Contact** - Address info and embedded map
6. **Socials** - Links to social media platforms
7. **Blog** - Dedicated blog page with interactive posts
8. **Footer** - Copyright and credits

## Project Structure

```
deadwolf-games/
├── index.html                 # Main website page
├── blog.html                  # Blog page
├── src/
│   ├── main.ts               # Main TypeScript for homepage
│   ├── blog.ts               # Blog page TypeScript
│   ├── styles/
│   │   └── main.css          # Main stylesheet
│   └── ...
├── assets/                    # Images, videos, and media files
├── package.json              # Project dependencies
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm installed

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/deadwolf-games.git
cd deadwolf-games
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

## Customization

### Update Contact Information

Edit the contact section in `index.html` to add your actual contact details and Google Maps location.

### Add YouTube Videos

Update the `gamedevVideos` array in `src/main.ts` with your actual YouTube video IDs:

```typescript
const gamedevVideos: YouTubeVideo[] = [
  {
    id: "YOUR_VIDEO_ID",
    title: "Video Title",
    description: "Video Description",
  },
];
```

### Add Blog Posts

Update the `blogPosts` array in `src/blog.ts` with your blog content.

### Customize Colors

Edit the CSS variables in `src/styles/main.css`:

```css
:root {
  --primary-color: #8b0000;
  --secondary-color: #1a1a1a;
  --accent-color: #ff6b6b;
  /* ... more colors */
}
```

### Add Assets

Place your images, videos, and other media files in the `assets/` folder:

- `hero-video.mp4` - Main hero section video
- `about-image.jpg` - About section image

## Build for Production

Build the website for production:

```bash
npm run build
```

The optimized files will be in the `dist/` folder.

Preview the production build:

```bash
npm run preview
```

## Deploy to GitHub Pages

### Method 1: Using GitHub Pages (Free)

1. Create a GitHub repository named `deadwolf-games` (or your project name)

2. Update `vite.config.ts` to include the base path:

```typescript
export default defineConfig({
  base: "/deadwolf-games/",
  plugins: [typescript()],
});
```

3. Push your code to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/deadwolf-games.git
git branch -M main
git push -u origin main
```

4. Build the project:

```bash
npm run build
```

5. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Set Source to "GitHub Actions"
   - Or manually push the `dist` folder using `gh-pages` package

### Method 2: Using GitHub Actions (Recommended)

1. Create a `.github/workflows/deploy.yml` file:

```yaml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. Push to GitHub and the site will auto-deploy!

### Method 3: Deploy to Other Platforms

**Netlify:**

- Connect your GitHub repository
- Set build command: `npm run build`
- Set publish directory: `dist`

**Vercel:**

- Import project from GitHub
- Vercel will auto-detect Vite configuration

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

Website metrics:

- First Contentful Paint (FCP): < 2s
- Largest Contentful Paint (LCP): < 3s
- Cumulative Layout Shift (CLS): < 0.1
- Fully optimized for mobile and desktop

## Accessibility

- Semantic HTML5 structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## Technologies Used

- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation frontend build tool
- **CSS3** - Modern styling with animations
- **HTML5** - Semantic markup
- **Font Awesome** - Icon library
- **YouTube Embed API** - Video integration
- **Google Maps Embed API** - Map integration

## SEO Optimization

The website includes:

- Meta descriptions
- Semantic HTML
- Open Graph tags (can be added)
- Structured data support (can be added)

To improve SEO further, consider adding:

1. Sitemap.xml
2. robots.txt
3. Schema.org structured data
4. Open Graph meta tags

## License

This project is open source and available under the MIT License.

## Support

For issues, suggestions, or contributions:

1. Create an issue on GitHub
2. Submit a pull request
3. Contact: contact@deadwolfgames.com

## Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## Roadmap

- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Advanced blog filtering
- [ ] Newsletter signup
- [ ] Game downloads section
- [ ] Presskit/Media kit
- [ ] Performance optimizations

---

**Made with ❤️ by Deadwolf Games**

_A solo indie game development studio creating handcrafted experiences_
