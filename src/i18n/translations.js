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
      role: "Design Engineer · Product-focused Frontend",
      resume: "Resume",
      resumeDe: "German Resume",
    },
    about: {
      intro: "I've spent half my career as a designer and the other half writing the code, so I can take a product from idea to implementation on my own.",
    },
    experience: {
      eyebrow: "Where I've worked",
      title: "Experience",
      subtitle: "From design studios to frontend teams.",
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
      title: "Products I've shipped",
      subtitle: "Designed and built end to end. All live.",
      live: "Live preview",
      viewLive: "Visit live site",
      viewCode: "View code",
      impact: "The problem",
      build: "What I did",
      moreWork: "More projects on GitHub",
      ctaButton: "Contact",
      tech: "Tech stack",
      items: {
        gobento: {
          category: "Social app",
          role: "Full-stack",
          tagline: "A social app that turns group-chat ideas into real plans.",
          impact: "Group plans get lost in chats. Gobento puts the date, place and guest list in one shareable link.",
          build: "Design, frontend, API, login and payments.",
        },
        navi: {
          category: "Mobile web app",
          role: "Full-stack",
          tagline: "A U-Bahn and S-Bahn co-pilot for Berlin riders.",
          impact: "Riders can report delays, lost items or unsafe situations in a few taps.",
          build: "Design, live train map, moderated reports and SMS/email alerts.",
        },
        epica: {
          category: "Brand site",
          role: "Frontend · UI/UX",
          tagline: "Brand identity and website for a Chilean alternative fashion label.",
          impact: "A young Chilean fashion label needed a brand and a website.",
          build: "Brand identity, website and animations.",
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
      subtitle: "Open to Design Engineer and product-focused Frontend roles. Remote or Berlin.",
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
      role: "Design Engineer · Frontend con foco en producto",
      resume: "CV en inglés",
      resumeDe: "CV en alemán",
    },
    about: {
      intro: "Pasé la mitad de mi carrera como diseñadora y la otra mitad escribiendo el código, así que puedo llevar un producto de la idea a la implementación por mi cuenta.",
    },
    experience: {
      eyebrow: "Dónde he trabajado",
      title: "Experiencia",
      subtitle: "De estudios de diseño a equipos de frontend.",
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
      title: "Productos que he lanzado",
      subtitle: "Diseñados y construidos de principio a fin. Todos en línea.",
      live: "Vista en vivo",
      viewLive: "Ver sitio en vivo",
      viewCode: "Ver código",
      impact: "El problema",
      build: "Qué hice",
      moreWork: "Más proyectos en GitHub",
      ctaButton: "Contacto",
      tech: "Tecnologías",
      items: {
        gobento: {
          category: "App social",
          role: "Full-stack",
          tagline: "Una app social que convierte las ideas del chat grupal en planes reales.",
          impact: "Los planes se pierden en los chats grupales. Gobento junta fecha, lugar e invitados en un solo link.",
          build: "Diseño, frontend, API, login y pagos.",
        },
        navi: {
          category: "App web móvil",
          role: "Full-stack",
          tagline: "Un copiloto para viajar en U-Bahn y S-Bahn en Berlín.",
          impact: "Reportar retrasos, objetos perdidos o situaciones de riesgo en pocos toques.",
          build: "Diseño, mapa de trenes en vivo, reportes moderados y alertas por SMS/email.",
        },
        epica: {
          category: "Sitio de marca",
          role: "Frontend · UI/UX",
          tagline: "Identidad de marca y sitio web para una marca chilena de moda alternativa.",
          impact: "Una marca chilena de moda joven necesitaba identidad y sitio web.",
          build: "Identidad de marca, sitio web y animaciones.",
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
      subtitle: "Abierta a puestos de Design Engineer y Frontend con foco en producto. Remoto o en Berlín.",
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
      role: "Design Engineer · Produktorientiertes Frontend",
      resume: "Lebenslauf (EN)",
      resumeDe: "Lebenslauf (DE)",
    },
    about: {
      intro: "Die Hälfte meiner Laufbahn war ich Designerin, die andere Hälfte habe ich programmiert. Deshalb kann ich ein Produkt allein von der Idee bis zur Umsetzung bringen.",
    },
    experience: {
      eyebrow: "Wo ich gearbeitet habe",
      title: "Erfahrung",
      subtitle: "Von Designstudios zu Frontend-Teams.",
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
      title: "Produkte, die ich gelauncht habe",
      subtitle: "Von Anfang bis Ende gestaltet und gebaut. Alle live.",
      live: "Live-Vorschau",
      viewLive: "Live ansehen",
      viewCode: "Code ansehen",
      impact: "Das Problem",
      build: "Was ich gemacht habe",
      moreWork: "Mehr Projekte auf GitHub",
      ctaButton: "Kontakt",
      tech: "Tech-Stack",
      items: {
        gobento: {
          category: "Social App",
          role: "Full-Stack",
          tagline: "Eine Social App, die aus Gruppenchat-Ideen echte Pläne macht.",
          impact: "Pläne gehen im Gruppenchat unter. Gobento bündelt Datum, Ort und Gästeliste in einem Link.",
          build: "Design, Frontend, API, Login und Zahlungen.",
        },
        navi: {
          category: "Mobile Web-App",
          role: "Full-Stack",
          tagline: "Ein Co-Pilot für U-Bahn und S-Bahn in Berlin.",
          impact: "Verspätungen, Fundsachen oder unsichere Situationen mit wenigen Taps melden.",
          build: "Design, Live-Zugkarte, moderierte Meldungen und Warnungen per SMS/E-Mail.",
        },
        epica: {
          category: "Marken-Website",
          role: "Frontend · UI/UX",
          tagline: "Markenidentität und Website für ein chilenisches Alternative-Fashion-Label.",
          impact: "Ein junges chilenisches Modelabel brauchte eine Marke und eine Website.",
          build: "Markenidentität, Website und Animationen.",
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
      subtitle: "Offen für Rollen als Design Engineer und im produktorientierten Frontend. Remote oder in Berlin.",
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
