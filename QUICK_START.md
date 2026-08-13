# 🎮 Deadwolf Games Website - Quick Start Guide

Congratulations! Your Deadwolf Games website is ready! Here's everything you need to know to get started.

## ✅ What's Been Created

Your website includes:

### Pages

- **index.html** - Main landing page with all sections
- **blog.html** - Blog page with interactive posts
- **blog.ts** - Blog functionality (modal, post generation)
- **main.ts** - Main page functionality (YouTube integration, animations)

### Sections Included

1. **Header** - Navigation with smooth scroll
2. **Hero** - Video showcase with tagline
3. **About** - Studio information with philosophy subsection
4. **Videos** - YouTube gamedev videos (playable)
5. **Contact** - Address, email, phone, and embedded map
6. **Socials** - Links to Twitter, GitHub, YouTube, Discord, Instagram, LinkedIn
7. **Blog** - Interactive blog with modal post viewer
8. **Footer** - Copyright and credits

### Styling

- Modern, responsive design
- Works on desktop, tablet, and mobile
- Color scheme: Dark red (#8b0000) with accents
- Smooth animations and transitions
- Semantic HTML5 and accessibility features

## 🚀 Quick Start (Local Development)

### 1. Start Development Server

```bash
npm run dev
```

Your site will open at `http://localhost:5173`

### 2. Make Changes

- Edit `.html` files for structure changes
- Edit `/src/main.ts` for homepage functionality
- Edit `/src/blog.ts` for blog functionality
- Edit `/src/styles/main.css` for styling

### 3. See Changes Live

The browser auto-refreshes when you save files!

## 📝 Before You Deploy

### Must-Do Customizations

1. **Add Your Social Links** (index.html, line ~130)

   ```html
   <a href="https://twitter.com/YOUR_USERNAME" target="_blank" title="Twitter">
     <a href="https://github.com/YOUR_USERNAME" target="_blank" title="GitHub">
       <!-- etc --></a
     ></a
   >
   ```

2. **Update Contact Info** (index.html, line ~100)
   - Replace "Your City, Your Country" with your location
   - Update email address
   - Update phone number

3. **Add Your YouTube Videos** (src/main.ts, line ~9)

   ```typescript
   const gamedevVideos: YouTubeVideo[] = [
     {
       id: "YOUR_YOUTUBE_VIDEO_ID", // From youtube.com/watch?v=ID
       title: "Your Video Title",
       description: "Your video description",
     },
   ];
   ```

4. **Update Blog Posts** (src/blog.ts, line ~8)
   - Edit or add blog posts to the `blogPosts` array
   - Each post has: id, title, date, excerpt, content, icon, category

5. **Add Images/Videos to Assets**
   - Place `about-image.jpg` in `/assets/` folder
   - Place `hero-video.mp4` in `/assets/` folder

6. **Update Colors** (Optional - src/styles/main.css, line ~10)
   ```css
   :root {
     --primary-color: #8b0000; /* Dark red */
     --accent-color: #ff6b6b; /* Bright red */
     /* etc */
   }
   ```

## 🌐 Deploy to GitHub Pages

### Quick Deploy (Recommended - Uses GitHub Actions)

1. **Create GitHub Repository**
   - Go to github.com
   - Click **+** → **New repository**
   - Name it: `deadwolf-games`
   - Select **Public**
   - Create repository

2. **Push Your Code**

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Deadwolf Games website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/deadwolf-games.git
   git push -u origin main
   ```

   Replace `YOUR_USERNAME` with your GitHub username

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Click **Pages** (left sidebar)
   - Source: Select **GitHub Actions**
   - Done! Site will be available at: `https://YOUR_USERNAME.github.io/deadwolf-games`

GitHub Actions will automatically:

- Build your site whenever you push
- Deploy it to GitHub Pages
- No extra setup needed!

### Deploy Updates

```bash
git add .
git commit -m "Update: [describe your changes]"
git push
```

Your site updates automatically!

## 🎨 Customization Examples

### Change Hero Video

Edit `index.html` line ~48:

```html
<video width="100%" controls>
  <source src="assets/your-video.mp4" type="video/mp4" />
</video>
```

### Add a New Blog Post

Edit `src/blog.ts`, add to `blogPosts` array:

```typescript
{
  id: 7,
  title: 'My New Blog Post',
  date: 'December 20, 2024',
  excerpt: 'This is a short preview...',
  content: `<h2>Full Article</h2><p>Your content here...</p>`,
  icon: '🎮',
  category: 'Game Development'
}
```

### Change Colors

Edit `src/styles/main.css`:

```css
:root {
  --primary-color: #your-color;
  --accent-color: #your-accent;
}
```

## 📱 Testing

### Local Testing

```bash
npm run dev          # Development server
npm run build        # Production build
npm run preview      # Preview production version
```

### Before Deploying

- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on mobile (use Chrome DevTools)
- [ ] Check all links work
- [ ] Verify videos play
- [ ] Test smooth scrolling

## 📚 File Guide

```
deadwolf-games/
├── index.html              # Main page
├── blog.html               # Blog page
├── src/
│   ├── main.ts            # Homepage functions
│   ├── blog.ts            # Blog functions
│   └── styles/
│       └── main.css       # All styling
├── assets/                # Your images/videos
├── dist/                  # Production build (generated)
├── package.json           # Dependencies
├── vite.config.ts         # Build config
├── tsconfig.json          # TypeScript config
├── README.md              # Full documentation
├── DEPLOYMENT_GUIDE.md    # Detailed deployment guide
└── .github/
    ├── copilot-instructions.md
    └── workflows/
        └── deploy.yml     # Auto-deploy config
```

## 🔧 Common Tasks

### Build for Production

```bash
npm run build
```

Creates optimized files in `/dist/` folder.

### View Production Build Locally

```bash
npm run preview
```

### Update Dependencies

```bash
npm update
```

### Check for Errors

```bash
npm run build
```

Shows any TypeScript or build errors.

## 🆘 Troubleshooting

### Site not showing up after push?

- Wait 2-3 minutes for GitHub to build
- Check "Actions" tab in GitHub for build logs
- Make sure repository is **Public**

### YouTube videos not showing?

- Verify video IDs are correct (from youtube.com/watch?v=ID)
- Check browser console for errors (F12)
- Try a different video ID

### Styling looks off?

- Hard refresh browser: `Ctrl+Shift+R` (Windows)
- Clear browser cache
- Check CSS is importing correctly

### Build errors?

```bash
npm run build
```

Shows specific error messages to fix.

## 📖 Full Documentation

For more detailed information:

- **README.md** - Complete project overview
- **DEPLOYMENT_GUIDE.md** - Detailed deployment instructions
- **src/styles/main.css** - CSS variable documentation
- **.github/copilot-instructions.md** - Developer guidelines

## 🎯 Next Steps

1. **Customize Everything**
   - Add your videos, images, and content
   - Update colors and branding

2. **Deploy to GitHub**
   - Push code to GitHub
   - GitHub Actions handles the rest

3. **Share Your Site**
   - Send link to friends/community
   - Share on social media
   - Add to portfolio

4. **Iterate**
   - Get feedback from community
   - Add blog posts regularly
   - Keep content fresh

## 💡 Tips

- Blog posts are in modal popups - great for keeping readers on site
- YouTube videos auto-embed - just add video IDs
- Site is fully responsive - looks great on all devices
- All styling is in one CSS file - easy to customize
- TypeScript provides type safety - less bugs

## 🎮 You're Ready!

Your Deadwolf Games website is production-ready. All you need to do is:

1. ✅ Customize content (videos, images, text)
2. ✅ Push to GitHub
3. ✅ Enable GitHub Pages
4. ✅ Share your link!

---

**Questions?** Check the documentation files or the source code comments.

**Ready to deploy?** See `DEPLOYMENT_GUIDE.md` for step-by-step instructions.

**Happy game developing! 🎮❤️**
