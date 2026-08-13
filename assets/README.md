# Deadwolf Games Assets Directory

This directory should contain all media files for the website:

## Required Files

### Images

- `about-image.jpg` - Image for the About section (recommended: 800x600px)
- `hero-placeholder.jpg` - Fallback image for hero section

### Videos

- `hero-video.mp4` - Main hero video (recommended: MP4 format, optimized for web)

## Recommended Specifications

### Images

- Format: JPEG, PNG, or WebP
- Size: Optimize for web (compress before uploading)
- Dimensions: Match your design (suggested: 16:9 or 4:3 aspect ratio)
- Resolution: 1920px width for desktop, will be responsive

### Videos

- Format: MP4 (h.264 codec)
- Bitrate: 5-8 Mbps for quality
- Resolution: 1080p or higher
- Duration: Keep under 60 seconds for faster loading
- File size: Try to keep under 20MB

## How to Add Assets

1. Create or prepare your media files
2. Optimize them (use tools like TinyPNG, FFmpeg, etc.)
3. Place them in this `assets/` directory
4. Update the src in HTML/CSS files to point to the correct path

## Example Structure

```
assets/
├── about-image.jpg
├── hero-video.mp4
├── game-screenshot-1.jpg
├── game-screenshot-2.jpg
└── logo.svg
```

## Performance Tips

1. **Image Optimization**
   - Use tools like ImageOptim, TinyPNG
   - Consider using WebP format
   - Use appropriate dimensions

2. **Video Optimization**
   - Use FFmpeg: `ffmpeg -i input.mp4 -b:v 5M output.mp4`
   - Consider using Vimeo or YouTube for video hosting
   - Use video placeholders initially

3. **Loading Strategy**
   - Lazy load images with loading="lazy"
   - Use picture element for responsive images
   - Consider using service workers for caching

---

All assets are served from this directory relative to the project root.
Reference them in your HTML/CSS as `/assets/filename.ext`
