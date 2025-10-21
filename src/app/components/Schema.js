"use client";
import Script from "next/script";

export default function Schema() {
  return (
    <Script
      id="org-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Your Car Rental Company",
          "url": "https://google.com",
          "logo": "https://yourwebsite.com/logo.png",
          "sameAs": [
            "https://www.facebook.com/yourpage",
            "https://twitter.com/yourpage",
            "https://www.instagram.com/yourpage",
          ],
        }),
      }}
    />
  );
}
