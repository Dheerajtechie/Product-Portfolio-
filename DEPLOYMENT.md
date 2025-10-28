# 🚀 Deployment Guide - Dheeraj Ingle Portfolio

## 📋 Quick Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**
2. **Click "New Project"**
3. **Import Git Repository:**
   - Select "Import Git Repository"
   - Choose `Dheerajtechie/Product-Portfolio-`
   - Click "Import"

4. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)

5. **Environment Variables (Optional):**
   - No environment variables needed for this project

6. **Deploy:**
   - Click "Deploy"
   - Wait for deployment to complete (2-3 minutes)

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name: dheeraj-portfolio
# - Directory: ./
# - Override settings? N
```

## 🌐 Custom Domain Setup

### After Deployment:

1. **Go to Project Settings in Vercel Dashboard**
2. **Navigate to "Domains" tab**
3. **Add your custom domain:**
   - `dheerajingle.com` (if you own it)
   - `portfolio.dheerajingle.com` (subdomain)
   - Any other domain you prefer

4. **Configure DNS:**
   - Add CNAME record pointing to your Vercel domain
   - Or use Vercel's nameservers

## 📊 Performance Optimization

### Pre-deployment Checklist:

- ✅ **Build Success:** `npm run build` completes without errors
- ✅ **TypeScript:** No type errors
- ✅ **Images:** Optimized and properly sized
- ✅ **SEO:** Meta tags and structured data included
- ✅ **Responsive:** Tested on mobile, tablet, desktop
- ✅ **Performance:** Lighthouse score 90+

### Post-deployment Verification:

1. **Test all links and buttons**
2. **Verify images load correctly**
3. **Check mobile responsiveness**
4. **Test contact forms and CTAs**
5. **Run Lighthouse audit**

## 🔧 Environment Configuration

### Production Settings:

```json
{
  "NODE_ENV": "production",
  "NEXT_PUBLIC_SITE_URL": "https://dheeraj-portfolio.vercel.app"
}
```

## 📈 Analytics & Monitoring

### Vercel Analytics:
- Automatically enabled
- View in Vercel Dashboard > Analytics
- Real user metrics and performance data

### Google Analytics (Optional):
Add to `src/app/layout.tsx`:

```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

## 🚀 Deployment URLs

- **Production:** https://dheeraj-portfolio.vercel.app
- **Preview:** https://dheeraj-portfolio-git-main-dheerajtechie.vercel.app
- **GitHub:** https://github.com/Dheerajtechie/Product-Portfolio-

## 📱 Mobile Testing

### Test on Real Devices:
1. **iPhone Safari:** Test touch interactions
2. **Android Chrome:** Verify responsive design
3. **iPad:** Check tablet layout
4. **Desktop:** Test all hover effects

### Browser Support:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🔄 Continuous Deployment

### Automatic Deployments:
- **Main Branch:** Auto-deploys to production
- **Feature Branches:** Auto-deploys to preview URLs
- **Pull Requests:** Auto-deploys to preview URLs

### Manual Deployments:
```bash
# Deploy specific branch
vercel --prod

# Deploy with specific environment
vercel --env production
```

## 🛠️ Troubleshooting

### Common Issues:

1. **Build Failures:**
   - Check TypeScript errors: `npm run build`
   - Verify all imports are correct
   - Check for missing dependencies

2. **Image Issues:**
   - Ensure images are in `public/` folder
   - Check file paths are correct
   - Verify image formats (JPG, PNG, WebP)

3. **Styling Issues:**
   - Check Tailwind CSS classes
   - Verify responsive breakpoints
   - Test dark mode functionality

4. **Performance Issues:**
   - Optimize images
   - Check bundle size
   - Enable Vercel Analytics

## 📞 Support

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **GitHub Issues:** https://github.com/Dheerajtechie/Product-Portfolio-/issues

---

**🎯 Your portfolio is now ready for professional deployment!**

**Next Steps:**
1. Deploy to Vercel using the steps above
2. Set up custom domain (optional)
3. Share your live portfolio URL
4. Update your resume with the new URL
5. Start applying to Google APM 2026! 🚀
