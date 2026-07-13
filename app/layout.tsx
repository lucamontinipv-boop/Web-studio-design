import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://montinicreative.it"),

  title: {
    default: "Siti Web e Landing Page su Misura | Montini Creative",
    template: "%s | Montini Creative",
  },

  description:
    "Progetto siti web e landing page chiari, veloci e mobile-first per attività e professionisti. Struttura, copy, design e contatti diretti in un unico progetto.",

  applicationName: "Montini Creative",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://montinicreative.it",
    siteName: "Montini Creative",
    title: "Siti Web e Landing Page su Misura | Montini Creative",
    description:
      "Pagine su misura che aiutano chi ti trova online a capire cosa offri, fidarsi e contattarti senza perdere tempo.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Montini Creative — Siti web chiari, veloci e su misura",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Siti Web e Landing Page su Misura | Montini Creative",
    description:
      "Pagine su misura che aiutano chi ti trova online a capire cosa offri, fidarsi e contattarti senza perdere tempo.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#181712",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/projects/kaiemi/kaiemi-01-hero.webp"
          media="(min-width: 1024px)"
          fetchPriority="high"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.47.0/tabler-icons.min.css"
          />
        </noscript>
      </head>

      <body>
        {children}

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var once = function (fn) {
                  var done = false;
                  return function () {
                    if (done) return;
                    done = true;
                    fn();
                  };
                };

                var loadIcons = once(function () {
                  if (document.querySelector('link[data-tabler-icons]')) return;
                  var link = document.createElement('link');
                  link.rel = 'stylesheet';
                  link.href = 'https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.47.0/tabler-icons.min.css';
                  link.setAttribute('data-tabler-icons', 'true');
                  document.head.appendChild(link);
                });

                var loadAnalytics = once(function () {
                  window.dataLayer = window.dataLayer || [];
                  window.gtag = function(){ window.dataLayer.push(arguments); };
                  window.gtag('js', new Date());
                  window.gtag('config', 'G-TJQZPFMQXX');

                  var script = document.createElement('script');
                  script.async = true;
                  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-TJQZPFMQXX';
                  document.head.appendChild(script);
                });

                var loadClarity = once(function () {
                  (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                  })(window, document, 'clarity', 'script', 'xlq8qld7a5');
                });

                var interactionEvents = ['pointerdown', 'touchstart', 'keydown'];
                interactionEvents.forEach(function (eventName) {
                  window.addEventListener(eventName, function () {
                    loadIcons();
                    loadAnalytics();
                    loadClarity();
                  }, { once: true, passive: true });
                });

                window.addEventListener('load', function () {
                  window.setTimeout(loadIcons, 1200);
                  window.setTimeout(loadAnalytics, 3500);
                  window.setTimeout(loadClarity, 6500);
                }, { once: true });

                var getLinkLocation = function (link) {
                  if (link.closest('header')) return 'header';
                  if (link.closest('footer')) return 'footer';

                  var section = link.closest('section[id]');
                  if (section && section.id) return section.id;

                  return 'page';
                };

                var getLinkLabel = function (link) {
                  var explicitLabel = link.getAttribute('data-analytics-label');
                  var ariaLabel = link.getAttribute('aria-label');
                  var visibleText = (link.textContent || '').replace(/\\s+/g, ' ').trim();

                  return explicitLabel || ariaLabel || visibleText || 'link';
                };

                var sendAnalyticsEvent = function (eventName, parameters) {
                  loadAnalytics();

                  if (typeof window.gtag === 'function') {
                    window.gtag('event', eventName, parameters);
                  }
                };

                document.addEventListener('click', function (event) {
                  var target = event.target;
                  if (!(target instanceof Element)) return;

                  var mobileLink = target.closest('.mobile-menu-link');
                  if (mobileLink) {
                    var menu = document.getElementById('mobile-navigation');
                    if (menu && menu instanceof HTMLDetailsElement) menu.open = false;
                  }

                  var link = target.closest('a[href]');
                  if (!link) return;

                  var href = link.getAttribute('href') || '';
                  var absoluteUrl = link.href || href;
                  var label = getLinkLabel(link);
                  var location = getLinkLocation(link);
                  var commonParameters = {
                    cta_text: label,
                    cta_location: location,
                    link_url: absoluteUrl,
                    page_path: window.location.pathname
                  };

                  if (/wa\\.me|api\\.whatsapp\\.com|whatsapp:/i.test(absoluteUrl)) {
                    sendAnalyticsEvent('generate_lead', {
                      method: 'whatsapp',
                      cta_text: label,
                      cta_location: location,
                      link_url: absoluteUrl,
                      page_path: window.location.pathname
                    });
                    return;
                  }

                  if (href.charAt(0) === '#') {
                    sendAnalyticsEvent('cta_click', commonParameters);
                    return;
                  }

                  try {
                    var destination = new URL(absoluteUrl, window.location.href);

                    if (destination.hostname !== window.location.hostname) {
                      sendAnalyticsEvent(
                        location === 'progetti' ? 'portfolio_project_click' : 'outbound_click',
                        commonParameters
                      );
                    }
                  } catch (error) {
                    // Ignore malformed links without affecting navigation.
                  }
                });
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
