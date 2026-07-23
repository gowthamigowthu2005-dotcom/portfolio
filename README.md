# GOWTHAMI N — Portfolio Website

A modern, premium Full Stack Developer Portfolio built with **Next.js 14**, **Tailwind CSS v4**, and **Framer Motion**.

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion + GSAP |
| Email | EmailJS |
| Icons | React Icons |
| Theme | next-themes (dark/light) |

## 📁 Folder Structure

```
portfolio/
├── app/
│   ├── globals.css       # Design tokens, animations
│   ├── layout.tsx        # SEO, ThemeProvider, JSON-LD
│   └── page.tsx          # Main page (all sections)
├── components/
│   ├── sections/         # Hero, About, Education, etc.
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── PageLoader.tsx
│   ├── CustomCursor.tsx
│   ├── ScrollProgress.tsx
│   ├── ParticleBackground.tsx
│   └── SectionWrapper.tsx
├── hooks/
│   ├── useTypewriter.ts
│   └── useCountUp.ts
├── lib/
│   └── constants.ts      # All portfolio data
└── public/
    ├── resume.pdf         # ⚠️ Replace with your actual resume
    ├── robots.txt
    └── sitemap.xml
```

## ⚙️ Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📧 EmailJS Setup

1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Create a service and email template
3. Open `components/sections/Contact.tsx`
4. Replace placeholders:
   ```ts
   const SERVICE_ID = "YOUR_EMAILJS_SERVICE_ID";
   const TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";
   const PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY";
   ```

## 📄 Resume

Place your `resume.pdf` file inside the `public/` directory.

## 🌐 Deployment

Deploy instantly to **Vercel**:

```bash
npx vercel --prod
```

Or connect your GitHub repo to Vercel for automatic deployments.

---

Built with ❤️ by **GOWTHAMI N**
