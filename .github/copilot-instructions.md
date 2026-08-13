# Deadwolf Games Website - Copilot Instructions

This file provides guidance for AI assistants (like GitHub Copilot) on how to maintain and improve the Deadwolf Games website project.

## Project Overview

**Type**: Static website built with TypeScript, HTML5, and CSS3
**Framework**: Vite
**Language**: TypeScript
**Purpose**: Professional website for indie game development studio
**Deployment**: GitHub Pages

## Project Structure

```
deadwolf-games/
├── index.html              # Main website (home page)
├── blog.html               # Blog listing page
├── src/
│   ├── main.ts            # Main page logic and YouTube video loading
│   ├── blog.ts            # Blog page logic
│   └── styles/
│       └── main.css       # All website styling
├── assets/                # Images, videos, media
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── README.md              # Project documentation
└── DEPLOYMENT_GUIDE.md    # GitHub Pages deployment guide
```

## Key Files

### index.html

- Main landing page
- Sections: Header, Hero, About, Videos, Contact, Socials, Footer
- Navigation bar with smooth scroll
- Video and image placeholders

### blog.html

- Blog page with post grid
- Interactive modal reader
- Links back to homepage

### src/main.ts

- Loads YouTube videos dynamically
- Sets up smooth scrolling
- Handles social link interactions
- Active navigation highlighting

### src/blog.ts

- Generates blog cards from array
- Modal post viewer
- Blog post array contains sample posts

### src/styles/main.css

- All website styling
- CSS variables for colors (--primary-color, etc.)
- Responsive design breakpoints at 768px and 480px
- Animations and transitions

## Common Modifications

### Adding a Blog Post

1. Open `src/blog.ts`
2. Add to `blogPosts` array:

```typescript
{
  id: 7,
  title: 'Your Post Title',
  date: 'Month DD, YYYY',
  excerpt: 'Brief description',
  content: '<h2>Heading</h2><p>Content</p>',
  icon: '🎮',
  category: 'Category Name'
}
```

### Adding a YouTube Video

1. Open `src/main.ts`
2. Add to `gamedevVideos` array:

```typescript
{
  id: 'YOUTUBE_VIDEO_ID',
  title: 'Video Title',
  description: 'Video Description'
}
```

### Updating Colors

1. Open `src/styles/main.css`
2. Modify CSS variables in `:root` section

### Updating Contact Info

1. Open `index.html`
2. Find contact section
3. Update address, email, phone, and map iframe

### Updating Social Links

1. Open `index.html`
2. Find socials section
3. Update href attributes with actual URLs

## Styling Guidelines

### Color Scheme

- Primary: #8b0000 (Dark Red)
- Secondary: #1a1a1a (Near Black)
- Accent: #ff6b6b (Bright Red)
- Light BG: #f5f5f5
- Dark BG: #0d0d0d

### Typography

- Font Family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Font sizes: Scale from 0.9rem to 2.5rem
- Font weights: 400 (normal), 500, 600 (semibold), 700 (bold)

### Spacing

- Container max-width: 1200px
- Padding: 20px on sides (mobile), scales up on desktop
- Section padding: 60-80px vertical
- Gap between elements: 15-50px depending on context

### Responsive Breakpoints

- Desktop: > 768px
- Tablet: 480px - 768px
- Mobile: < 480px

## Performance Considerations

- Lazy load images and videos
- Optimize image sizes before adding to assets
- YouTube videos are embedded, not hosted
- CSS is not split (single main.css file)
- TypeScript is compiled and minified for production

## Common Tasks

### Build Process

```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Deploy Changes

```bash
git add .
git commit -m "Description of changes"
git push origin main
```

GitHub Actions will automatically build and deploy.

### Adding External Libraries

Only add if necessary for core functionality. Keep dependencies minimal.

```bash
npm install package-name --save
npm install package-name --save-dev  # For dev only
```

## Code Standards

### TypeScript

- Use strict types (avoid `any`)
- Use interfaces for data structures
- Use const for immutable values
- Add JSDoc comments for functions

### HTML

- Semantic HTML5 elements (section, article, nav, etc.)
- Proper heading hierarchy (h1 → h6)
- Alt text for images
- ARIA labels for accessibility

### CSS

- Use CSS variables for colors
- Mobile-first approach
- Class naming: kebab-case (e.g., `video-card`)
- Group related styles together

### TypeScript Exports

Functions are exported for potential reuse and testing.

## Accessibility (A11y)

- Use semantic HTML
- Include ARIA labels
- Ensure color contrast
- Keyboard navigation support
- Screen reader friendly
- Alt text for images

## SEO Considerations

- Meta descriptions (update in HTML head)
- Semantic HTML structure
- Heading hierarchy
- Image alt text
- Mobile responsive
- Fast loading

## Deployment

### GitHub Pages

- Automatic deployment via GitHub Actions
- Workflow file: `.github/workflows/deploy.yml`
- Deployment branch: gh-pages (auto-created)
- URL: `https://username.github.io/deadwolf-games`
- Custom domain support available

### Build Output

- Source: `src/` and `index.html`, `blog.html`
- Output: `dist/` folder
- Deployment: Contents of `dist/` served as static site

## Troubleshooting

### Build Fails

- Check TypeScript errors: `npm run build`
- Verify all imports are correct
- Check for missing files

### Styling Issues

- Check CSS in browser DevTools
- Verify CSS variables are defined
- Check responsive breakpoint

### JavaScript Issues

- Check browser console for errors
- Verify TypeScript compilation
- Test in development first

## Dependencies

### Runtime

- Font Awesome (CDN for icons)
- YouTube Embed API (embed only, no SDK)
- Google Maps Embed (embed only, no SDK)

### Development

- TypeScript
- Vite
- @vitejs/plugin-typescript

Minimize external dependencies for performance.

## Future Enhancements

Suggested improvements (when requested):

- Dark mode toggle
- Multi-language support
- Advanced blog filtering
- Newsletter subscription
- Search functionality
- Performance metrics dashboard
- Progressive Web App (PWA) support
- Email contact form

## Emergency Procedures

### Broken Deployment

1. Check GitHub Actions logs
2. Revert last commit: `git revert HEAD`
3. Push revert to trigger rebuild

### Site Down

1. Check status on GitHub Pages settings
2. Verify DNS if using custom domain
3. Contact GitHub support if issue persists

## Update Frequency

- Blog posts: As needed
- Videos: Monthly or as released
- Content: Quarterly review
- Dependencies: Quarterly (npm update)

## Questions/Modifications

When modifying this project, ensure:

1. Changes don't break existing functionality
2. Responsive design is maintained
3. Accessibility standards are met
4. Code follows established patterns
5. Git history is clean with meaningful commits

---

**Last Updated**: 2024
**Maintained by**: Deadwolf Games Team
