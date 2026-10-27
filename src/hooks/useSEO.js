import { useEffect } from "react";

/**
 * Hook para gestionar el SEO dinámico en aplicaciones SPA con React Router.
 * Actualiza título, metaetiquetas de descripción, keywords, canonical y Open Graph por ruta.
 */
export function useSEO({ title, description, keywords, canonicalPath }) {
  useEffect(() => {
    // 1. Título del documento
    if (title) {
      document.title = title;
    }

    // Helper para actualizar o crear meta tags
    const updateMeta = (key, value, isProperty = false) => {
      if (!value) return;
      const attr = isProperty ? "property" : "name";
      let tag = document.querySelector(`meta[${attr}="${key}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", value);
    };

    // 2. Descripción estándar y redes sociales
    if (description) {
      updateMeta("description", description);
      updateMeta("og:description", description, true);
      updateMeta("twitter:description", description);
    }

    // 3. Título en redes sociales
    if (title) {
      updateMeta("og:title", title, true);
      updateMeta("twitter:title", title);
    }

    // 4. Palabras clave (Keywords)
    if (keywords) {
      updateMeta("keywords", keywords);
    }

    // 5. Enlace canónico y URL Open Graph
    if (canonicalPath) {
      const origin =
        typeof window !== "undefined" && window.location.origin
          ? window.location.origin
          : "https://cometocino.cl";
      const fullUrl = `${origin}${canonicalPath}`;

      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", fullUrl);
      updateMeta("og:url", fullUrl, true);
    }
  }, [title, description, keywords, canonicalPath]);
}

export default useSEO;
