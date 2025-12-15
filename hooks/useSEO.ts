import { useEffect } from 'react';

export const useSEO = ({ title, description, type = 'website', image, path }: { title: string, description: string, type?: string, image?: string, path?: string }) => {
  useEffect(() => {
    // Update Title
    document.title = `${title} | PurrfectCare`;

    // Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = description;
      document.head.appendChild(newMeta);
    }

    // Inject Schema.org JSON-LD
    const schemaScriptId = 'seo-schema-json';
    let schemaScript = document.getElementById(schemaScriptId) as HTMLScriptElement;
    
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = schemaScriptId;
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": type === 'article' ? "BlogPosting" : "WebSite",
      "headline": title,
      "description": description,
      "image": image || "https://images.unsplash.com/photo-1574158622682-e40e69881006",
      "author": {
        "@type": "Organization",
        "name": "PurrfectCare"
      },
      "url": window.location.href
    };

    schemaScript.textContent = JSON.stringify(schemaData);

  }, [title, description, type, image, path]);
};