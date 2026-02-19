# Raptor Truckline - Modern React Web Application

A professional, modern, minimalistic React web application for Raptor Truckline, a leading trucking and logistics company in Ontario, Canada.

## 🚀 Features

- **Modern UI/UX**: Clean, minimalistic design with deep red accent (#D72638)
- **Fully Responsive**: Mobile-first approach for all devices
- **Fast Performance**: Built with Vite for optimal build times
- **SEO Optimized**: Meta tags, OpenGraph tags, and semantic HTML
- **Smooth Animations**: CSS transitions and fade/slide effects
- **Firebase Ready**: Placeholder integration for authentication, forms, and database
- **Production Ready**: Optimized for Vercel deployment

## 📋 Project Structure

```
raptor-truckline/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── ValueCard.jsx
│   │   ├── ServicesHighlights.jsx
│   │   ├── MissionVision.jsx
│   │   ├── CoreValues.jsx
│   │   ├── SafetyCompliance.jsx
│   │   ├── WhyChooseUs.jsx
│   │   └── CTA.jsx
│   ├── pages/                # Page components
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Careers.jsx
│   ├── config/               # Configuration files
│   │   └── firebase.jsx      # Firebase configuration (TODO)
│   ├── utils/                # Utility files
│   │   └── constants.jsx     # Company info, images, constants
│   ├── App.jsx               # Main app component with routing
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── public/                   # Static assets
│   ├── favicon.ico
│   └── og-image.jpg         # OpenGraph image
├── index.html                # HTML entry point
├── package.json              # Dependencies
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── .gitignore                # Git ignore rules
└── README.md                 # This file
```

## 🛠️ Tech Stack

- **React 18**: UI library
- **Vite**: Fast build tool
- **TailwindCSS**: Utility-first CSS framework
- **React Router DOM**: Client-side routing
- **Firebase**: Backend services (authentication, database, storage)

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm (or yarn/pnpm)
- Git

### Installation

1. **Clone the repository** (or navigate to the directory):
   ```bash
   cd raptor-truckline
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Firebase** (Optional but recommended):
   - Create a Firebase project at https://console.firebase.google.com/
   - Update `src/config/firebase.jsx` with your credentials
   - Create a `.env.local` file with your Firebase config:
     ```
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     ...
     ```

### Development

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000` with hot module replacement (HMR).

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment

### Vercel (Recommended)

1. **Push code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/raptor-truckline.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Add environment variables in Vercel dashboard
   - Click "Deploy"

3. **Custom Domain**:
   - Go to project settings in Vercel
   - Add custom domain (e.g., raptortruckline.com)
   - Configure DNS records at your domain registrar

### Other Hosting Options

- **Netlify**: Drag and drop `dist/` folder or connect GitHub
- **GitHub Pages**: Push `dist/` folder to gh-pages branch
- **Traditional Hosting**: Upload `dist/` folder via FTP/SSH

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Firebase Configuration
REACT_APP_FIREBASE_API_KEY=your_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

# API URLs (if needed)
VITE_API_URL=https://api.example.com
```

### Company Information

Update company details in `src/utils/constants.jsx`:

```javascript
export const COMPANY = {
  name: 'Raptor Truckline',
  legalName: '2417551 Ontario Inc',
  emails: {
    dispatch: 'dispatch@raptortruckline.com',
    // ... other emails
  },
  // ... other details
}
```

### Styling

- **Colors**: Customize in `tailwind.config.js`
- **Fonts**: Update in `index.html` and `tailwind.config.js`
- **Animations**: Modify keyframes in `src/index.css`

## 📱 Pages & Routes

- `/` - Home page (hero, services, mission, vision, values, why choose us, safety)
- `/services` - Detailed services overview
- `/about` - Company information, team, locations
- `/contact` - Contact form and company details
- `/careers` - Job listings and career applications

## 🔐 Firebase Integration (TODO)

### Contact Form
- [ ] Implement Firebase Firestore submission in `src/pages/Contact.jsx`
- [ ] Add email notifications via Cloud Functions
- [ ] Create Firestore collection `contact_messages`

### Career Applications
- [ ] Implement Firebase submission in `src/pages/Careers.jsx`
- [ ] Add email notifications for new applications
- [ ] Create Firestore collection `career_applications`

### Authentication (Optional)
- [ ] Implement user sign-up/login
- [ ] Add admin dashboard for form submissions
- [ ] Create user profiles for clients

## 🎨 Customization

### Images & Videos

Current implementation uses text placeholders. To add real images:

1. Create a `public/assets/images/` folder
2. Add your images
3. Update imports in components:
   ```javascript
   import heroImage from '../assets/images/hero.jpg'
   ```

### Color Scheme

Main colors can be customized in `tailwind.config.js` and `src/index.css`:

- Primary: White (`#ffffff`)
- Secondary: Charcoal (`#2a2a2a`)
- Accent: Deep Red (`#D72638`)
- Light Background: Light Gray (`#f8f8f8`)

### Typography

Default fonts: Inter, Poppins (loaded from Google Fonts)

To change fonts:
1. Update `index.html` font import
2. Update `tailwind.config.js` fontFamily

## 📊 SEO & Performance

### Meta & Open Graph Tags
- Already configured in `index.html`
- Update with your actual:
  - Website title and description
  - OG image URL
  - Canonical URL
  - Twitter card info

### Performance Tips

1. **Image Optimization**:
   - Use WebP format for images
   - Optimize with TinyPNG or similar
   - Use lazy loading

2. **Code Splitting**:
   - Vite automatically splits code
   - Route-based code splitting (built-in with React Router)

3. **Lighthouse**:
   - Run Lighthouse audit in Chrome DevTools
   - Target 90+ scores

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Find and kill process on port 3000
# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# On Mac/Linux
lsof -i :3000
kill -9 <PID>
```

### Firebase Connection Issues
- Verify credentials in `.env.local`
- Check Firebase project permissions
- Enable required Firebase services (Firestore, Storage, etc.)

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [Firebase Documentation](https://firebase.google.com/docs)
- [React Router Documentation](https://reactrouter.com)

## 📄 License

This project is proprietary to Raptor Truckline. All rights reserved.

## 👥 Support

For questions or support:
- Email: amandeep@raptortruckline.com
- Phone: +1 (519) XXX-XXXX

## 🚀 Next Steps

1. ✅ Project structure created
2. ✅ React components built
3. ✅ Pages implemented
4. ⬜ Add real images and optimize
5. ⬜ Configure Firebase database
6. ⬜ Implement backend services
7. ⬜ Test on all devices
8. ⬜ Deploy to Vercel
9. ⬜ Configure custom domain
10. ⬜ Monitor analytics and performance

---

**Last Updated**: February 2026
**Version**: 1.0.0
**Status**: Production Ready
