# 🎨 CUSTOMIZATION CHECKLIST & SETTINGS

Use this checklist to customize your Deadwolf Games website with your actual information.

## 1️⃣ SOCIAL MEDIA LINKS

**File:** `index.html` (around line 25-40)

Current placeholder URLs:

```html
<a href="https://twitter.com" target="_blank" title="Twitter">
  <a href="https://github.com" target="_blank" title="GitHub">
    <a href="https://youtube.com" target="_blank" title="YouTube">
      <a href="https://discord.com" target="_blank" title="Discord">
        <a href="https://instagram.com" target="_blank" title="Instagram">
          <a
            href="https://linkedin.com"
            target="_blank"
            title="LinkedIn"
          ></a></a></a></a></a
></a>
```

Replace with your actual URLs:

- Twitter: `https://twitter.com/YOUR_USERNAME`
- GitHub: `https://github.com/YOUR_USERNAME`
- YouTube: `https://youtube.com/@YOUR_CHANNEL`
- Discord: `https://discord.gg/YOUR_SERVER_ID`
- Instagram: `https://instagram.com/YOUR_USERNAME`
- LinkedIn: `https://linkedin.com/in/YOUR_PROFILE`

**Status:** □ Updated

---

## 2️⃣ CONTACT INFORMATION

**File:** `index.html` (around line 95-110)

Current placeholder:

```html
<p>Your City, Your Country<br />Postal Code</p>
<a href="mailto:contact@deadwolfgames.com">contact@deadwolfgames.com</a>
<p>+1 (XXX) XXX-XXXX</p>
```

Replace with:

- [ ] Address (street, city, country, postal code)
- [ ] Email address
- [ ] Phone number

**Status:** □ Updated

---

## 3️⃣ GOOGLE MAPS

**File:** `index.html` (around line 115)

Current: Generic New York map embed

To update:

1. Go to [Google Maps](https://maps.google.com)
2. Find your location
3. Click Share → Embed a map
4. Copy the iframe code
5. Replace the entire iframe in the HTML

**Status:** □ Updated

---

## 4️⃣ YOUTUBE VIDEOS

**File:** `src/main.ts` (lines 8-27)

Current placeholder videos:

```typescript
const gamedevVideos: YouTubeVideo[] = [
  {
    id: "jNgP6d9HraI", // ← Replace these IDs
    title: "Video Title",
    description: "Description",
  },
];
```

How to find YouTube Video IDs:

- Go to your video on YouTube
- URL looks like: `https://www.youtube.com/watch?v=VIDEO_ID`
- The ID is the part after `v=`

Example:

- URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- ID: `dQw4w9WgXcQ`

Add your videos:

```typescript
{
  id: 'YOUR_VIDEO_ID',
  title: 'Your Video Title',
  description: 'Your video description'
}
```

**Video 1:**

- Title:
- ID:
- Description:

**Video 2:**

- Title:
- ID:
- Description:

**Video 3:**

- Title:
- ID:
- Description:

**Video 4:**

- Title:
- ID:
- Description:

**Status:** □ Updated

---

## 5️⃣ BLOG POSTS

**File:** `src/blog.ts` (lines 7-150)

Current: 6 sample blog posts included

To add your own:

```typescript
{
  id: 7,                    // Unique number
  title: 'Post Title',      // Your post title
  date: 'Month DD, YYYY',   // Publication date
  excerpt: 'Short preview...', // 1-2 sentences
  content: '<h2>Heading</h2><p>Your full content here...</p>',
  icon: '🎮',              // Emoji for the card
  category: 'Category Name' // Blog category
}
```

Available emojis for posts:

- 🎮 Gaming
- 🎨 Art
- ⚙️ Technical
- 📢 Marketing
- 💭 Personal
- ⚡ Performance
- 🎯 Design
- 📚 Learning

**Blog Post 1:**

- [ ] Title:
- [ ] Date:
- [ ] Excerpt:
- [ ] Icon:
- [ ] Category:

**Blog Post 2:**

- [ ] Title:
- [ ] Date:
- [ ] Excerpt:
- [ ] Icon:
- [ ] Category:

**Status:** □ Updated (or keep samples)

---

## 6️⃣ HERO VIDEO

**File:** `index.html` (line 48)

Current:

```html
<source src="assets/hero-video.mp4" type="video/mp4" />
```

To add your video:

1. Create/find your video file (MP4 format recommended)
2. Optimize it (use FFmpeg or online tools)
   ```bash
   ffmpeg -i input.mp4 -b:v 5M -c:a aac output.mp4
   ```
3. Save as `hero-video.mp4` in the `assets/` folder
4. Reference it in HTML (already done if you use the same filename)

**Status:** □ Video added to assets/

---

## 7️⃣ ABOUT SECTION IMAGE

**File:** `index.html` (line 80) and add to `assets/` folder

Current:

```html
<img src="assets/about-image.jpg" alt="Deadwolf Games Studio" />
```

To add your image:

1. Find or create an image
2. Recommended specs:
   - Format: JPEG or PNG
   - Dimensions: 800x600px or similar 4:3 ratio
   - Size: Compress to < 500KB
3. Save as `about-image.jpg` in the `assets/` folder

Tools for optimization:

- Online: TinyPNG.com, ImageOptim.com
- Desktop: ImageOptim (Mac), PNGCrush (all platforms)

**Status:** □ Image added to assets/

---

## 8️⃣ COLORS & BRANDING

**File:** `src/styles/main.css` (lines 10-20)

Current color scheme:

```css
--primary-color: #8b0000; /* Dark Red */
--accent-color: #ff6b6b; /* Bright Red */
--secondary-color: #1a1a1a; /* Dark Gray */
--light-bg: #f5f5f5; /* Light Gray */
--dark-bg: #0d0d0d; /* Almost Black */
```

To customize:

1. Pick your colors (use [ColorHunt.co](https://colorhunt.co))
2. Get hex codes (e.g., #8b0000)
3. Replace in CSS variables

**My Brand Colors:**

- Primary (main color):
- Accent (highlights):
- Secondary (dark text):

**Status:** □ Updated (or keep defaults)

---

## 9️⃣ SITE METADATA

**File:** `index.html` (lines 1-10)

Current:

```html
<title>Deadwolf Games - Indie Game Development Studio</title>
```

To customize:

1. Add a meta description (for search engines)
2. Update favicon (optional)

```html
<title>Your Game Studio Name</title>
<meta name="description" content="What you do in 1-2 sentences" />
```

**Status:** □ Updated

---

## 🔟 HOSTING SETUP

### GitHub Pages (Recommended)

**File:** `.github/workflows/deploy.yml` (already configured)

Steps:

1. [ ] Create GitHub repository named `deadwolf-games`
2. [ ] Push code to `main` branch
3. [ ] Go to Settings → Pages
4. [ ] Set source to "GitHub Actions"
5. [ ] Wait 2-3 minutes
6. [ ] Visit: `https://YOUR_USERNAME.github.io/deadwolf-games`

**Repository URL:** https://github.com/YOUR_USERNAME/deadwolf-games

**Live Site URL:** https://YOUR_USERNAME.github.io/deadwolf-games

### Custom Domain (Optional)

**File:** `.github/workflows/deploy.yml` (no changes needed)

To use custom domain:

1. [ ] Register domain (GoDaddy, Namecheap, etc.)
2. [ ] Update DNS records (ask registrar for help)
3. [ ] Add domain in GitHub Pages settings
4. [ ] Wait 24-48 hours for DNS propagation

**Custom Domain:** deadwolfgames.com (or your domain)

**Status:** □ GitHub Pages setup complete

---

## ✅ FINAL LAUNCH CHECKLIST

**Content:**

- [ ] Social media links updated
- [ ] Contact information added
- [ ] YouTube videos linked
- [ ] Blog posts added (or kept samples)
- [ ] Hero video uploaded
- [ ] About section image added
- [ ] Colors customized (or kept defaults)

**Technical:**

- [ ] npm run build (succeeds)
- [ ] npm run dev (works locally)
- [ ] Mobile responsive tested
- [ ] Links all working
- [ ] Videos play

**Deployment:**

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Site live and accessible
- [ ] All pages load correctly

**Promotion:**

- [ ] Share link with friends
- [ ] Add to portfolio
- [ ] Post on social media
- [ ] Update bio/about with site link

---

## 🔄 REGULAR MAINTENANCE

**Weekly:**

- [ ] Check for broken links
- [ ] Monitor for errors

**Monthly:**

- [ ] Add new blog posts
- [ ] Update social media links
- [ ] Check video embeds

**Quarterly:**

- [ ] Update npm packages: `npm update`
- [ ] Review analytics (if added)
- [ ] Update contact information

---

## 💡 TIPS

1. **Backup your customizations** - Keep a copy before major updates
2. **Test locally first** - Use `npm run dev` before pushing
3. **Commit often** - Small, meaningful commits are easier to revert
4. **Monitor GitHub Actions** - Check the Actions tab for build status
5. **Update content regularly** - Fresh content keeps visitors coming back

---

## 📞 NEED HELP?

1. Check QUICK_START.md for common tasks
2. See README.md for detailed documentation
3. Review .github/copilot-instructions.md for code guidelines
4. Check browser console (F12) for error messages

---

**Once you've completed this checklist, your site is ready to launch! 🚀**

Keep this file for reference when making updates.
