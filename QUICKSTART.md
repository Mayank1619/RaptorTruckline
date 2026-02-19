# Quick Start Guide - Raptor Truckline Website

## 🎯 What You Have

A complete, production-ready React web application with:
- Modern, responsive UI with TailwindCSS
- 5 main pages (Home, Services, About, Contact, Careers)
- 11 reusable React components
- SEO optimization
- Firebase integration ready (commented placeholders)
- Smooth animations and transitions
- Mobile-first design

## ⚡ Quick Start (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Opens at http://localhost:3000

### 3. Build for Production
```bash
npm run build
npm run preview  # Test production build locally
```

## 📁 Main Files to Know

**Pages** (what your visitors see):
- `src/pages/Home.jsx` - Landing page
- `src/pages/Services.jsx` - Service catalog
- `src/pages/About.jsx` - Company info
- `src/pages/Contact.jsx` - Contact & inquiry form
- `src/pages/Careers.jsx` - Job postings

**Components** (building blocks):
- `src/components/Navbar.jsx` - Navigation menu
- `src/components/Hero.jsx` - Eye-catching banner
- `src/components/ServiceCard.jsx` - Service tiles
- `src/components/CTA.jsx` - Call-to-action sections

**Configuration**:
- `src/utils/constants.jsx` - All company info & content
- `src/config/firebase.jsx` - Firebase setup (TODO)
- `tailwind.config.js` - Colors & styling
- `vite.config.js` - Build settings

## 🎨 Customization Quick Links

### Change Company Info
→ Edit `src/utils/constants.jsx`

### Change Colors
→ Edit `tailwind.config.js` (look for `colors:` section)
- Main accent: `accent-red: '#D72638'`
- Dark text: `charcoal: '#2a2a2a'`

### Change Fonts
→ Look in `index.html` for Google Fonts link

### Update Images (Placeholders)
→ Text placeholders are in `src/utils/constants.jsx`
→ Replace emoji icons in components as needed
→ Add real images in `public/` folder

## 🔧 To Add Real Images

1. Create folder: `public/assets/images/`
2. Add your images there
3. Update constants:
```javascript
// In src/utils/constants.jsx
export const IMAGES = {
  hero: '/assets/images/hero.jpg',
  // etc
}
```
4. Use in components

## 🔗 Add Firebase (Contact Forms, Auth, etc.)

1. Go to https://console.firebase.google.com/
2. Create project, add Web app
3. Copy config to `.env.local`:
```
REACT_APP_FIREBASE_API_KEY=...
REACT_APP_FIREBASE_AUTH_DOMAIN=...
etc...
```
4. Uncomment Firebase code in:
   - `src/pages/Contact.jsx` (lines marked TODO)
   - `src/pages/Careers.jsx` (lines marked TODO)

## 📱 Test on Mobile

While dev server is running (`npm run dev`):
- Open on phone: `http://YOUR_COMPUTER_IP:3000`
- Check responsive design at all screen sizes

## 🚀 Deploy to Vercel (Free)

1. Push code to GitHub
2. Visit https://vercel.com
3. Import GitHub repository
4. Click Deploy (takes 30 seconds)
5. Add custom domain in Vercel settings
6. Point domain DNS to Vercel

## 📊 What's Inside Each Page

### Home
- Hero section with CTA buttons
- 6 main services
- Mission & Vision
- 6 core values
- Why choose us section
- Safety & compliance highlights
- Contact CTA

### Services
- All 6 services in detail
- Service methodology (6 key approaches)
- Custom solutions info

### About
- Company story
- Head office & terminal info
- Company legal details
- Team roles (4 positions)
- Mission, Vision, Values
- Core values display

### Contact
- Contact form (saves to Firebase TODO)
- 5 direct contact cards (phone, emails)
- Office locations
- Business hours

### Careers
- Why work here (6 benefits)
- 6 open job positions
- Detailed job pages
- Application form
- Email fallback for resumes

## ✅ Before Going Live

- [ ] Update all company info in `constants.jsx`
- [ ] Replace placeholder text with real content
- [ ] Add real images/photos
- [ ] Set up Firebase (optional but recommended)
- [ ] Test contact forms work
- [ ] Update meta tags in `index.html`
- [ ] Add Google Analytics
- [ ] Test on all devices
- [ ] Run lighthouse audit (target 90+)
- [ ] Deploy to Vercel

## 🆘 Common Questions

**Q: How do I add a new service?**
A: Add to array in `src/utils/constants.jsx` SERVICES, show appears automatically.

**Q: How do I change the red color?**
A: Change `#D72638` in `tailwind.config.js` and `src/index.css`

**Q: How do I add a new page?**
A: Create in `src/pages/`, add route to `src/App.jsx`, add link to `src/components/Navbar.jsx`

**Q: Contact form doesn't work?**
A: Set up Firebase and uncomment code in `Contact.jsx` (marked TODO)

**Q: How do I add navigation to a form?**
A: Forms auto-link to sections via route links in Navbar

## 📞 File Structure Reminder

```
src/
├── pages/           ← What users see
├── components/      ← Reusable pieces
├── config/          ← Firebase setup
├── utils/           ← Text/data constants
├── App.jsx          ← Routes & layout
└── index.css        ← Global styles
```

## 🎓 Next Steps

1. ✅ Understand the file structure
2. ✅ Run `npm install && npm run dev`
3. ✅ Edit `constants.jsx` with your info
4. ✅ Add your images
5. ✅ Test everything locally
6. ✅ Deploy to Vercel
7. ✅ Set up custom domain
8. ✅ Configure Firebase (optional)

---

**Need help?** Check README.md for detailed documentation.
**Want to deploy?** See "Deploying" section in README.md.
