# GitHub Pages Deployment Guide for Deadwolf Games Website

This guide will walk you through deploying your Deadwolf Games website to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your computer
- Node.js 16+ and npm installed

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **+** icon in the top right → **New repository**
3. Name your repository: `deadwolf-games`
4. Choose **Public** (required for GitHub Pages free tier)
5. Click **Create repository**

## Step 2: Prepare Your Local Repository

```bash
cd "d:\Coding\Profile Samples\deadwolf-games"
git init
git add .
git commit -m "Initial commit: Deadwolf Games website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/deadwolf-games.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Configure GitHub Pages

### Option A: Using GitHub Actions (Recommended)

The `.github/workflows/deploy.yml` file is already set up. Follow these steps:

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
   - Leave other settings as default

The workflow will automatically trigger on every push to `main` and deploy your site!

### Option B: Manual Deployment with gh-pages

If you prefer manual control:

1. Install gh-pages:

```bash
npm install --save-dev gh-pages
```

2. Update `package.json` scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. Deploy:

```bash
npm run deploy
```

4. In GitHub, go to **Settings** → **Pages** and set:
   - Source: **Deploy from a branch**
   - Branch: **gh-pages**

## Step 4: Verify Deployment

1. Go to your repository Settings → Pages
2. Look for the deployment message
3. Click the URL to visit your live site
4. Your site will be available at: `https://YOUR_USERNAME.github.io/deadwolf-games`

## Step 5: Update Site Content

After deployment, you can update your site by:

1. Making changes locally
2. Committing and pushing:

```bash
git add .
git commit -m "Update: [describe changes]"
git push
```

3. GitHub Actions will automatically build and deploy your changes

## Customization Before Deployment

Before pushing to GitHub, make sure to customize:

### 1. Social Links (index.html)

Replace placeholder URLs in the socials section with your actual profiles:

```html
<a href="https://twitter.com/yourusername" target="_blank" title="Twitter">
  <a href="https://github.com/yourusername" target="_blank" title="GitHub">
    <!-- etc --></a
  ></a
>
```

### 2. Contact Information (index.html)

Update the contact section with your actual details:

- Address
- Email
- Phone
- Map coordinates

### 3. Blog Content (src/blog.ts)

Update or add your own blog posts in the `blogPosts` array

### 4. YouTube Videos (src/main.ts)

Replace the sample video IDs with your actual YouTube video IDs

### 5. Images and Media

Add your actual images and videos to the `assets/` folder:

- `hero-video.mp4` - Main hero video
- `about-image.jpg` - About section image

## Troubleshooting

### Site not showing up

- Wait 2-3 minutes for GitHub Pages to process
- Check Settings → Pages to see build status
- Verify the repository is public

### Site shows old version

- GitHub caches content. Do a hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Check the workflow run in Actions tab

### Build failing

- Check the Actions tab for error details
- Ensure all files are properly committed: `git status`
- Verify Node.js version matches `package.json`

### Custom domain

To use a custom domain (e.g., deadwolfgames.com):

1. Settings → Pages
2. Add custom domain
3. Update your domain's DNS records (instructions from registrar)
4. Verify domain in GitHub

## Domain Configuration (Optional)

If you own a custom domain, you can point it to GitHub Pages:

1. Update DNS records with your domain provider:
   - Add A records pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a CNAME record pointing to `YOUR_USERNAME.github.io`

2. In GitHub Settings → Pages, add your custom domain

## Monitoring and Analytics

To track visitors and understand usage:

1. **Google Analytics**: Add to index.html head:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_ID");
</script>
```

2. **GitHub Repository Stats**: Automatically tracked in Insights tab

## Performance Tips

1. **Optimize images** before adding to assets
2. **Enable compression** (GitHub does this automatically)
3. **Cache busting** is automatic with Vite
4. **Use CDN** for large files

## Best Practices

1. Keep main branch deployment-ready
2. Use meaningful commit messages
3. Test locally before pushing: `npm run dev`
4. Review workflow runs for any issues
5. Keep dependencies updated: `npm update`

## Next Steps

1. ✅ Deploy to GitHub Pages
2. Update all customizations
3. Test on mobile and desktop
4. Share with your community
5. Monitor analytics and feedback
6. Continuously update content

## Support

If you encounter issues:

1. Check GitHub Actions logs (Settings → Actions)
2. Review this guide
3. Check Vite documentation: https://vitejs.dev
4. Ask in GitHub Discussions or Issues

---

**Happy deploying! 🎮**

Your Deadwolf Games website is now live on the web!
