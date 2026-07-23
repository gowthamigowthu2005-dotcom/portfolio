import "./globals.css";
import { ThemeProvider } from "next-themes";
import PageLoader from "@/components/PageLoader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata = {
  metadataBase: new URL("https://gowthami.dev"),
  title: {
    default: `Portfolio | Gowthami N`,
    template: "%s | Gowthami N",
  },
  description:
    `Portfolio of Gowthami N — Computer Science Engineering student and Full Stack Developer passionate about building beautiful, scalable web applications.`,
  keywords: [
    "Gowthami N", "Full Stack Developer", "Frontend Developer", "Portfolio",
    "React", "Next.js", "Tailwind CSS", "JavaScript", "HTML", "CSS",
    "Web Developer Bengaluru", "CSE student",
  ],
  authors: [{ name: "Gowthami N", url: "https://gowthami.dev" }],
  creator: "Gowthami N",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gowthami.dev",
    title: "Gowthami N — Full Stack Developer",
    description: "Portfolio of Gowthami N — building beautiful, scalable web applications.",
    siteName: "Gowthami N Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Gowthami N — Full Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gowthami N — Full Stack Developer",
    description: "Portfolio of Gowthami N — building beautiful, scalable web applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Gowthami N",
              url: "https://gowthami.dev",
              sameAs: [
                "https://linkedin.com/in/gowthamin08",
                "https://github.com/gowthamigowthu2005-dotcom",
              ],
              jobTitle: "Full Stack Developer",
              worksFor: { "@type": "Organization", name: "Torii Minds LLP" },
              alumniOf: { "@type": "CollegeOrUniversity", name: "Nagarjuna College of Engineering and Technology" },
              address: { "@type": "PostalAddress", addressCountry: "IN" },
              email: "gowthamigowthu2005@gmail.com",
              telephone: "+6361722066",
            }),
          }}
        />
      </head>
      <body className="bg-[#050816] min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <PageLoader />
          <CustomCursor />
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
