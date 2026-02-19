# Design System & Branding Guide

Complete design specifications for Raptor Truckline website.

## 🎨 Color Palette

### Primary Colors
- **White**: `#ffffff` - Main background
- **Charcoal**: `#2a2a2a` - Primary text color
- **Deep Red (Accent)**: `#D72638` - Primary accent color
- **Light Gray**: `#f8f8f8` - Secondary background

### Extended Palette
- **Black**: `#000000` - Darkest elements
- **Gray-100**: `#f3f4f6` - Light backgrounds
- **Gray-200**: `#e5e7eb` - Borders, dividers
- **Gray-300**: `#d1d5db` - Secondary borders
- **Gray-600**: `#4b5563` - Secondary text
- **Gray-700**: `#374151` - Tertiary text
- **Red-700**: `#a01d2a` - Accent hover state

### Usage Guide
```
- Backgrounds: White (#ffffff)
- Text: Charcoal (#2a2a2a)
- Accents/CTAs: Deep Red (#D72638)
- Hover CTAs: Red-700 (#a01d2a)
- Secondary text: Gray-600, Gray-700
- Borders/dividers: Gray-200, Gray-300
```

## 📚 Typography

### Font Families
- **Primary**: Inter
- **Secondary**: Poppins
- **Fallback**: System sans-serif

### Font Weights
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

### Heading Styles

**H1** (Page titles, hero)
- Size: 48px (mobile) → 64px (desktop)
- Weight: 700 (bold)
- Line Height: 1.2
- Color: #2a2a2a (charcoal) or white (on dark bg)

**H2** (Section titles)
- Size: 36px (mobile) → 48px (desktop)
- Weight: 700 (bold)
- Line Height: 1.25
- Color: #2a2a2a (charcoal)

**H3** (Subsection titles)
- Size: 24px → 30px
- Weight: 700 (bold)
- Line Height: 1.3
- Color: #2a2a2a (charcoal)

**H4** (Card titles)
- Size: 18px → 20px
- Weight: 600 (semibold)
- Line Height: 1.4
- Color: #2a2a2a (charcoal)

### Body Text
- Size: 16px
- Weight: 400 (regular)
- Line Height: 1.6
- Color: #4b5563 (gray-600)

### Small Text (captions, labels)
- Size: 12px → 14px
- Weight: 400 (regular)
- Line Height: 1.5
- Color: #6b7280 (gray-500)

## 🎯 Spacing System

Based on 4px grid:
- `xs`: 4px
- `sm`: 8px
- `md`: 12px
- `lg`: 16px
- `xl`: 24px
- `2xl`: 32px
- `3xl`: 48px
- `4xl`: 64px

### Common Usage
```
Section padding: py-16 (4rem / 64px)
Container padding: px-4 sm:px-6 lg:px-8
Card padding: p-8 (2rem / 32px)
Gap between items: gap-8 (2rem)
Gap between elements: gap-4 (1rem)
```

## 🔘 Button Styles

### Primary Button
- Background: Deep Red (#D72638)
- Text: White
- Padding: 12px 32px (py-3 px-8)
- Border Radius: 8px (rounded-lg)
- Hover: Red-700 (#a01d2a)
- Font Weight: 600 (semibold)

```html
<button class="bg-accent-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
  Button Text
</button>
```

### Secondary Button
- Background: Transparent
- Border: 2px White
- Text: White
- Padding: 12px 32px (py-3 px-8)
- Border Radius: 8px (rounded-lg)
- Hover: White background, charcoal text

```html
<button class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-charcoal transition-colors">
  Button Text
</button>
```

### Tertiary Button
- Background: Light Gray (#f8f8f8)
- Text: Charcoal (#2a2a2a)
- Padding: 12px 32px (py-3 px-8)
- Border Radius: 8px (rounded-lg)
- Hover: White bg, subtle shadow

## 📐 Border Radius

- Small: 8px (rounded-lg)
- Medium: 12px (rounded-xl)
- Large: 16px (rounded-2xl)
- Circle: 50% (rounded-full)

## 🎬 Animations

### Fade In
```javascript
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
duration: 0.8s
easing: ease-in
```

### Slide Up
```javascript
@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(30px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}
duration: 0.8s
easing: ease-out
```

### Slide Down
```javascript
@keyframes slideDown {
  from { 
    opacity: 0;
    transform: translateY(-30px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}
duration: 0.8s
easing: ease-out
```

### Hover Effects
- Scale: `group-hover:scale-110` (element increases to 110%)
- Translate: `hover:-translate-y-2` (moves up 8px)
- Shadow: `hover:shadow-lg` (adds shadow)
- Color: `hover:text-accent-red` (changes color)
- Opacity: `hover:opacity-100`

## 🖼️ Image Specifications

### Hero Banner
- Aspect Ratio: 16:9
- Min Width: 1200px
- Format: WebP (primary), JPG (fallback)
- Optimization: 80-100 KB

### Service Cards
- Aspect Ratio: 3:2
- Size: 400x267px
- Format: WebP/JPG
- Optimization: 30-50 KB

### Team Photos
- Aspect Ratio: 1:1
- Size: 300x300px minimum
- Format: WebP/JPG
- Optimization: 20-40 KB

### Logos/Icons
- SVG preferred (scalable)
- Or: PNG with transparency
- Min size: 48x48px

## 📲 Responsive Breakpoints

Using Tailwind CSS breakpoints:
- `sm`: 640px (tablets)
- `md`: 768px (small desktops)
- `lg`: 1024px (desktops)
- `xl`: 1280px (large monitors)
- `2xl`: 1536px (extra large)

### Layout Guidelines
```
Mobile/Phone:  1 column, full width
Tablet (sm):   2 columns
Desktop (md):  3+ columns
Large (lg):    4+ columns
```

## 🌓 Dark Mode (Optional Future)

Color mappings for dark mode:
```javascript
Dark mode palette:
- Background: #1a1a1a (almost black)
- Text: #f0f0f0 (off-white)
- Accents: #D72638 (same deep red)
- Borders: #333333 (dark gray)
```

## 📊 Shadows

```
Shadow elevation system:
- sm: 0 1px 2px rgba(0,0,0,0.05)
- md: 0 4px 6px rgba(0,0,0,0.1)
- lg: 0 10px 15px rgba(0,0,0,0.1)
- xl: 0 20px 25px rgba(0,0,0,0.1)

Usage:
- Cards: shadow-md
- Hover cards: hover:shadow-lg
- Elevated sections: shadow-lg
- Subtle borders: shadow-sm
```

## 🎪 Component Examples

### Hero Section
- Background: Dark gradient (charcoal to black)
- Text: White
- CTA: Deep red buttons
- Accent elements: Light gray accents

### Service Cards
- Background: White
- Border: Subtle gray border
- Hover: Lift up (-translate-y-2), shadow
- Text: Charcoal headings, gray body

### Value Cards
- Background: Light gray (#f8f8f8)
- Border: None or subtle
- Hover: Change to white bg
- Text: Charcoal headings, gray body
- Icons: Large emoji (48px)

### Footer
- Background: Dark charcoal (#2a2a2a)
- Text: White and light gray
- Links: Hover to accent red
- Accent: Divider lines in gray

## 🎯 Design Principles

1. **Minimalistic**: Clean, uncluttered designs
2. **Professional**: Corporate, trustworthy appearance
3. **Accessible**: Good contrast ratios, readable text
4. **Responsive**: Works on all device sizes
5. **Fast**: Optimized images, smooth animations
6. **Consistent**: Unified color, typography, spacing

## 📝 How to Update the Design System

### Change Color Scheme
1. Edit `tailwind.config.js` colors section
2. Update `src/index.css` color utilities
3. Update this guide
4. Test all pages

### Change Fonts
1. Update Google Fonts link in `index.html`
2. Update `tailwind.config.js` fontFamily
3. Test readability at all sizes

### Add New Component
1. Follow spacing and color guidelines
2. Use Tailwind classes for consistency
3. Document in this guide
4. Use in components

### Modify Animations
1. Edit keyframes in `src/index.css`
2. Update `tailwind.config.js` animation section
3. Test performance (keep duration < 1s)

## ✅ QA Checklist

When reviewing designs:
- [ ] Colors match brand palette
- [ ] Text is readable (contrast ratio ≥ 4.5:1)
- [ ] Spacing is consistent with system
- [ ] Buttons have clear hover states
- [ ] Images optimized and cropped
- [ ] Animations feel smooth (60 FPS)
- [ ] Mobile responsive (test at 320px, 768px, 1280px)
- [ ] Accessibility checked (axe, lighthouse)
- [ ] All links working
- [ ] No visual bugs or overlaps

---

**Design System Version**: 1.0
**Last Updated**: February 2026
**Status**: Complete and Ready
