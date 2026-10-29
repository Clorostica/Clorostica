export const LANGUAGES = [
  { code: "en", label: "EN", name: "English" },
  { code: "es", label: "ES", name: "Español" },
  { code: "de", label: "DE", name: "Deutsch" },
];

export const translations = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      experience: "Experience",
      certificates: "Certificates",
      contact: "Contact",
      language: "Language",
      toLight: "Switch to light theme",
      toDark: "Switch to dark theme",
    },
    hero: {
      role: "Design Engineer",
      resume: "Resume",
      resumeDe: "German Resume",
      facts: [
        { label: "Based in", value: "Berlin", detail: "English · Spanish · German" },
      ],
    },
    about: {
      intro: {
        pre: "I'm a ",
        role: "design engineer",
        mid: " in ",
        city: "Berlin",
        post: ". I've spent half my career designing interfaces and the other half building them, so nothing gets lost between Figma and production.",
      },
    },
    experience: {
      eyebrow: "Where I've worked",
      title: "Experience",
      subtitle: "Agencies and design studios first, then banking software, product teams and my own clients.",
      stack: "Stack",
      items: [
        {
          title: "Software Developer - Fractal Development",
          tasks: [
            "Built blockchain web products in React and Node.js, connecting the interface to smart contracts",
            "Made the apps faster and easier to use",
            "Worked directly with clients on scope and kept the codebase easy to extend",
          ],
        },
        {
          title: "Frontend Developer - Freelancer",
          tasks: [
            "Built websites and web apps for clients with React, Next.js, TypeScript and Tailwind CSS",
            "Turned Figma and Adobe XD designs into reusable components",
            "Set up login with Auth0 and NextAuth",
            "Also shipped sites in Webflow and WordPress",
          ],
        },
        {
          title: "Frontend Developer – JFX",
          tasks: [
            "Built the internal React tools Banco de Chile's account executives use with customers: dashboards, simulators and real-time customer views",
            "Met the bank's strict accessibility and performance standards",
            "Connected the interfaces to REST APIs",
          ],
        },
        {
          title: "Web Designer - Kreativlab",
          tasks: [
            "Designed web interfaces from sitemaps and user flows to high-fidelity prototypes",
            "Ran usability tests to decide between design options",
            "Found and fixed UX problems in existing products",
          ],
        },
        {
          title: "Graphic Designer - CREA7IVE",
          tasks: [
            "Created visual concepts grounded in user research",
            "Took designs from wireframes to high-fidelity prototypes, iterating on user feedback",
          ],
        },
        {
          title: "Web Designer - MAD AGENCY",
          tasks: [
            "Built WordPress sites and ran marketing campaigns for an e-commerce startup",
            "Handled graphics, copy, email and social media from concept to launch",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Selected work",
      title: "Projects",
      subtitle: "Three products I designed and built end to end. They're all live, so you can try them yourself.",
      live: "Live preview",
      viewLive: "Visit live site",
      viewCode: "View code",
      impact: "The problem",
      build: "How I built it",
      moreWork: "More projects on GitHub",
      ctaButton: "Contact",
      tech: "Tech stack",
      items: {
        gobento: {
          category: "Social app",
          role: "Full-stack",
          tagline: "A social app that turns group-chat ideas into real plans.",
          impact: "Plans die in group chats. Gobento turns “we should hang out” into one shareable link with date, place and guest list, plus photos to keep as memories.",
          build: "Built end to end: React + TypeScript front end, an API on Cloudflare Workers with Hono and a D1 database, Auth0 login, Stripe payments, email notifications and 8 languages.",
        },
        navi: {
          category: "Mobile web app",
          role: "Full-stack",
          tagline: "A U-Bahn and S-Bahn co-pilot for Berlin riders.",
          impact: "When something happens on a train, people don't know who to tell. Navi lets riders report delays, lost items or unsafe situations in a few taps, see what's happening across the network and share their trip with trusted contacts.",
          build: "React + TypeScript front end with a live map of trains from the VBB transit API. A Cloudflare Worker with D1 handles reports, moderation and WorkOS login, and sends alerts by SMS (Twilio) and email (Resend). Tested with Vitest.",
        },
        epica: {
          category: "Brand site",
          role: "Frontend · UI/UX",
          tagline: "Brand identity and website for a Chilean alternative fashion label.",
          impact: "A young label needed to stand out. The site tells its story through the identity (logo, color system, audience) and is built to grow its community.",
          build: "React + Vite with Tailwind CSS, scroll-reveal animations, a parallax hero, Swiper galleries and a Spanish/English switch.",
        },
      },
    },
    certificates: {
      title: "Certificates",
      subtitle: "Courses I've finished along the way.",
      hint: "Open the folder and pick a certificate to see it full size.",
      close: "Close",
      verify: "Verify on Coursera",
      folderLabel: "Certificates",
    },
    contact: {
      eyebrow: "Contact",
      title: "Get in touch",
      subtitle: "Open to design engineering roles in Berlin or remote.",
      email: "Email",
      location: "Location",
      locationValue: "Berlin, Germany",
      social: "Social",
      firstName: "First Name",
      lastName: "Last Name",
      emailPlaceholder: "Email",
      message: "Message",
      send: "Send",
    },
    footer: "© 2026 Claudia Sáez. All rights reserved.",
  },

  es: {
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      experience: "Experiencia",
      certificates: "Certificados",
      contact: "Contacto",
      language: "Idioma",
      toLight: "Cambiar a tema claro",
      toDark: "Cambiar a tema oscuro",
    },
    hero: {
      role: "Design Engineer",
      resume: "CV en inglés",
      resumeDe: "CV en alemán",
      facts: [
        { label: "Desde", value: "Berlín", detail: "Inglés · Español · Alemán" },
      ],
    },
    about: {
      intro: {
        pre: "Soy ",
        role: "design engineer",
        mid: " en ",
        city: "Berlín",
        post: ". Pasé la mitad de mi carrera diseñando interfaces y la otra mitad construyéndolas, así que nada se pierde entre Figma y producción.",
      },
    },
    experience: {
      eyebrow: "Dónde he trabajado",
      title: "Experiencia",
      subtitle: "Primero agencias y estudios de diseño, después software bancario, equipos de producto y mis propios clientes.",
      stack: "Stack",
      items: [
        {
          title: "Desarrolladora de Software - Fractal Development",
          tasks: [
            "Construí productos web blockchain con React y Node.js, conectando la interfaz con smart contracts",
            "Hice las apps más rápidas y fáciles de usar",
            "Definí el alcance directamente con los clientes y mantuve el código fácil de ampliar",
          ],
        },
        {
          title: "Desarrolladora Frontend - Freelance",
          tasks: [
            "Construí sitios y apps web para clientes con React, Next.js, TypeScript y Tailwind CSS",
            "Convertí diseños de Figma y Adobe XD en componentes reutilizables",
            "Implementé el login con Auth0 y NextAuth",
            "También entregué sitios en Webflow y WordPress",
          ],
        },
        {
          title: "Desarrolladora Frontend – JFX",
          tasks: [
            "Construí las herramientas internas en React que los ejecutivos de Banco de Chile usan con sus clientes: dashboards, simuladores y vistas de clientes en tiempo real",
            "Cumplí los estrictos estándares de accesibilidad y rendimiento del banco",
            "Conecté las interfaces con APIs REST",
          ],
        },
        {
          title: "Diseñadora Web - Kreativlab",
          tasks: [
            "Diseñé interfaces web desde el mapa del sitio y los flujos hasta prototipos de alta fidelidad",
            "Hice tests de usabilidad para decidir entre alternativas de diseño",
            "Detecté y resolví problemas de UX en productos existentes",
          ],
        },
        {
          title: "Diseñadora Gráfica - CREA7IVE",
          tasks: [
            "Creé conceptos visuales basados en investigación de usuarios",
            "Llevé diseños de wireframes a prototipos de alta fidelidad, iterando con el feedback de usuarios",
          ],
        },
        {
          title: "Diseñadora Web - MAD AGENCY",
          tasks: [
            "Construí sitios en WordPress y llevé campañas de marketing para una startup de e-commerce",
            "Me encargué de gráficas, textos, email y redes sociales desde la idea hasta el lanzamiento",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Trabajo seleccionado",
      title: "Proyectos",
      subtitle: "Tres productos que diseñé y construí de principio a fin. Están todos en línea, así que puedes probarlos.",
      live: "Vista en vivo",
      viewLive: "Ver sitio en vivo",
      viewCode: "Ver código",
      impact: "El problema",
      build: "Cómo lo construí",
      moreWork: "Más proyectos en GitHub",
      ctaButton: "Contacto",
      tech: "Tecnologías",
      items: {
        gobento: {
          category: "App social",
          role: "Full-stack",
          tagline: "Una app social que convierte las ideas del chat grupal en planes reales.",
          impact: "Los planes mueren en los chats grupales. Gobento convierte el “tenemos que juntarnos” en un link para compartir con fecha, lugar y lista de invitados, y fotos para guardar como recuerdo.",
          build: "Hecha de punta a punta: frontend en React + TypeScript, API en Cloudflare Workers con Hono y base de datos D1, login con Auth0, pagos con Stripe, notificaciones por email y 8 idiomas.",
        },
        navi: {
          category: "App web móvil",
          role: "Full-stack",
          tagline: "Un copiloto para viajar en U-Bahn y S-Bahn en Berlín.",
          impact: "Cuando pasa algo en el tren, nadie sabe a quién avisar. Navi permite reportar retrasos, objetos perdidos o situaciones de riesgo en pocos toques, ver qué está pasando en la red y compartir el trayecto con contactos de confianza.",
          build: "Frontend en React + TypeScript con un mapa en vivo de los trenes desde la API de transporte VBB. Un Cloudflare Worker con D1 gestiona los reportes, la moderación y el login con WorkOS, y envía alertas por SMS (Twilio) y email (Resend). Testeado con Vitest.",
        },
        epica: {
          category: "Sitio de marca",
          role: "Frontend · UI/UX",
          tagline: "Identidad de marca y sitio web para una marca chilena de moda alternativa.",
          impact: "Una marca joven necesitaba destacar. El sitio cuenta su historia a través de la identidad (logo, sistema de color, público) y está pensado para hacer crecer su comunidad.",
          build: "React + Vite con Tailwind CSS, animaciones al hacer scroll, hero con parallax, galerías con Swiper y selector español/inglés.",
        },
      },
    },
    certificates: {
      title: "Certificados",
      subtitle: "Cursos que he terminado en el camino.",
      hint: "Abre la carpeta y elige un certificado para verlo en grande.",
      close: "Cerrar",
      verify: "Verificar en Coursera",
      folderLabel: "Certificados",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos",
      subtitle: "Abierta a puestos de design engineering en Berlín o en remoto.",
      email: "Email",
      location: "Ubicación",
      locationValue: "Berlín, Alemania",
      social: "Redes",
      firstName: "Nombre",
      lastName: "Apellido",
      emailPlaceholder: "Email",
      message: "Mensaje",
      send: "Enviar",
    },
    footer: "© 2026 Claudia Sáez. Todos los derechos reservados.",
  },

  de: {
    nav: {
      home: "Start",
      projects: "Projekte",
      experience: "Erfahrung",
      certificates: "Zertifikate",
      contact: "Kontakt",
      language: "Sprache",
      toLight: "Zum hellen Design wechseln",
      toDark: "Zum dunklen Design wechseln",
    },
    hero: {
      role: "Design Engineer",
      resume: "Lebenslauf (EN)",
      resumeDe: "Lebenslauf (DE)",
      facts: [
        { label: "Standort", value: "Berlin", detail: "Englisch · Spanisch · Deutsch" },
      ],
    },
    about: {
      intro: {
        pre: "Ich bin ",
        role: "Design Engineer",
        mid: " in ",
        city: "Berlin",
        post: ". Die Hälfte meiner Laufbahn habe ich Interfaces gestaltet, die andere Hälfte gebaut – deshalb geht zwischen Figma und Produktion nichts verloren.",
      },
    },
    experience: {
      eyebrow: "Wo ich gearbeitet habe",
      title: "Erfahrung",
      subtitle: "Erst Agenturen und Designstudios, dann Banking-Software, Produktteams und eigene Kund:innen.",
      stack: "Stack",
      items: [
        {
          title: "Softwareentwicklerin - Fractal Development",
          tasks: [
            "Blockchain-Webprodukte mit React und Node.js gebaut und die Oberfläche an Smart Contracts angebunden",
            "Die Apps schneller und einfacher nutzbar gemacht",
            "Den Umfang direkt mit Kund:innen abgestimmt und die Codebasis leicht erweiterbar gehalten",
          ],
        },
        {
          title: "Frontend-Entwicklerin - Freelancerin",
          tasks: [
            "Websites und Web-Apps für Kund:innen mit React, Next.js, TypeScript und Tailwind CSS gebaut",
            "Figma- und Adobe-XD-Designs in wiederverwendbare Komponenten umgesetzt",
            "Login mit Auth0 und NextAuth eingerichtet",
            "Außerdem Websites mit Webflow und WordPress ausgeliefert",
          ],
        },
        {
          title: "Frontend-Entwicklerin – JFX",
          tasks: [
            "Die internen React-Tools gebaut, mit denen die Kundenberater:innen der Banco de Chile arbeiten: Dashboards, Simulatoren und Echtzeit-Kundenansichten",
            "Die strengen Vorgaben der Bank zu Barrierefreiheit und Performance erfüllt",
            "Die Oberflächen an REST-APIs angebunden",
          ],
        },
        {
          title: "Webdesignerin - Kreativlab",
          tasks: [
            "Web-Interfaces gestaltet, von Sitemaps und User Flows bis zu High-Fidelity-Prototypen",
            "Usability-Tests durchgeführt, um zwischen Designvarianten zu entscheiden",
            "UX-Probleme in bestehenden Produkten gefunden und behoben",
          ],
        },
        {
          title: "Grafikdesignerin - CREA7IVE",
          tasks: [
            "Visuelle Konzepte auf Basis von Nutzerforschung entwickelt",
            "Designs von Wireframes bis zu High-Fidelity-Prototypen gebracht und mit Nutzerfeedback verbessert",
          ],
        },
        {
          title: "Webdesignerin - MAD AGENCY",
          tasks: [
            "WordPress-Websites gebaut und Marketingkampagnen für ein E-Commerce-Startup betreut",
            "Grafiken, Texte, E-Mail und Social Media von der Idee bis zum Launch verantwortet",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Ausgewählte Arbeiten",
      title: "Projekte",
      subtitle: "Drei Produkte, die ich von Anfang bis Ende gestaltet und gebaut habe. Alle sind live – probier sie selbst aus.",
      live: "Live-Vorschau",
      viewLive: "Live ansehen",
      viewCode: "Code ansehen",
      impact: "Das Problem",
      build: "Wie ich es gebaut habe",
      moreWork: "Mehr Projekte auf GitHub",
      ctaButton: "Kontakt",
      tech: "Tech-Stack",
      items: {
        gobento: {
          category: "Social App",
          role: "Full-Stack",
          tagline: "Eine Social App, die aus Gruppenchat-Ideen echte Pläne macht.",
          impact: "Pläne sterben im Gruppenchat. Gobento macht aus „wir sollten mal was machen“ einen teilbaren Link mit Datum, Ort und Gästeliste – plus Fotos als Erinnerung.",
          build: "Komplett selbst entwickelt: Frontend mit React + TypeScript, API auf Cloudflare Workers mit Hono und D1-Datenbank, Login mit Auth0, Zahlungen mit Stripe, E-Mail-Benachrichtigungen und 8 Sprachen.",
        },
        navi: {
          category: "Mobile Web-App",
          role: "Full-Stack",
          tagline: "Ein Co-Pilot für U-Bahn und S-Bahn in Berlin.",
          impact: "Wenn im Zug etwas passiert, weiß niemand, wem man Bescheid sagen soll. Mit Navi melden Fahrgäste Verspätungen, Fundsachen oder unsichere Situationen mit wenigen Taps, sehen, was im Netz los ist, und teilen ihre Fahrt mit Vertrauenspersonen.",
          build: "React + TypeScript im Frontend mit einer Live-Karte der Züge aus der VBB-API. Ein Cloudflare Worker mit D1 verwaltet Meldungen, Moderation und den Login über WorkOS und verschickt Warnungen per SMS (Twilio) und E-Mail (Resend). Getestet mit Vitest.",
        },
        epica: {
          category: "Marken-Website",
          role: "Frontend · UI/UX",
          tagline: "Markenidentität und Website für ein chilenisches Alternative-Fashion-Label.",
          impact: "Ein junges Label musste sich abheben. Die Website erzählt seine Geschichte über die Identität (Logo, Farbsystem, Zielgruppe) und soll die Community wachsen lassen.",
          build: "React + Vite mit Tailwind CSS, Scroll-Reveal-Animationen, Parallax-Hero, Swiper-Galerien und Spanisch/Englisch-Umschalter.",
        },
      },
    },
    certificates: {
      title: "Zertifikate",
      subtitle: "Kurse, die ich unterwegs abgeschlossen habe.",
      hint: "Öffne den Ordner und wähle ein Zertifikat, um es in voller Größe zu sehen.",
      close: "Schließen",
      verify: "Auf Coursera verifizieren",
      folderLabel: "Zertifikate",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Kontakt aufnehmen",
      subtitle: "Offen für Design-Engineering-Rollen in Berlin oder remote.",
      email: "E-Mail",
      location: "Standort",
      locationValue: "Berlin, Deutschland",
      social: "Social Media",
      firstName: "Vorname",
      lastName: "Nachname",
      emailPlaceholder: "E-Mail",
      message: "Nachricht",
      send: "Senden",
    },
    footer: "© 2026 Claudia Sáez. Alle Rechte vorbehalten.",
  },
};
