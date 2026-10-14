export const portfolio = {
  name: "Ahldrin Alarcon",
  introduction: "I’m a BSIT student focused on mobile and web development. I love challenging myself to turn ideas into working systems people can actually use.",
  githubUsername: "Ahhhldrin",
  linkedinUrl: "https://www.linkedin.com/in/ahldrin-alarcon-10855b306",
  facebookUrl: "https://www.facebook.com/ahhhldrin",
  email: "ahhhldrinalarcon31@gmail.com",
  education: {
    university: "National University",
    campus: "Manila",
    degree: "BSIT",
    specialization: "Mobile & Web Application Development",
  },
  projects: [
    {
      number: "01",
      title: "BiyaHero",
      fullTitle: "BiyaHero: A Crowdsourcing Application with Prescriptive Analytics for Commuters",
      detail: "Crowdsourced route planning and prescriptive analytics for public-transport commuters.",
      category: "CAPSTONE PROJECT",
      platform: "WEB + MOBILE",
      overview: "BiyaHero is a commuter-focused mobile application that helps users plan public-transport trips by presenting route options based on their origin, destination, transport preferences, and priorities. Its hybrid routing engine uses GTFS transit data and bounded graph searches to generate feasible candidates, while a prescriptive analytics layer ranks them using factors such as travel time, fare, walking distance, transfers, waiting time, reliability, and available safety or traffic context. The system also supports community incident reporting, administrator validation, and trip navigation with relevant advisories, alongside a web-based portal for managing reports, users, routes, and administrative activity.",
      contribution: "I led the full-stack development of BiyaHero, a commuter route-planning system with a Flutter mobile application and an administrative web portal. I built and integrated the backend API, hybrid GTFS route-generation engine, prescriptive route-ranking layer, and community reporting and administrator-validation workflows. I also led deployment preparation and system testing across the mobile app, web portal, and backend.",
      tools: [],
      toolGroups: [
        {
          title: "Development technologies",
          items: ["Flutter", "Dart", "React", "Vite", "Node.js", "Express", "PostgreSQL", "PostGIS", "MongoDB", "Gradle"],
        },
        {
          title: "Platforms & integrations",
          items: ["Firebase Authentication", "Firebase Storage", "Firebase Cloud Messaging", "Firebase Hosting", "Heroku", "Heroku CLI", "DigitalOcean · OSRM", "Mapbox", "TomTom Traffic", "Google Places", "GTFS"],
        },
      ],
      screenGroups: [
        {
          label: "Mobile application",
          type: "mobile",
          screens: [
            { title: "Home", image: "/projects/biyahero-home-mobile-cutout.png", alt: "BiyaHero mobile home screen with a map and nearby transportation markers" },
            { title: "Route planning", image: "/projects/biyahero-route-planning-mobile-cutout.png", alt: "BiyaHero mobile route planning screen with start, destination, and route priority options" },
            { title: "Route suggestions", image: "/projects/biyahero-route-suggestions-mobile-cutout.png", alt: "BiyaHero mobile route suggestions with travel time, fare, and advisory details" },
          ],
        },
        {
          label: "Web administration",
          type: "web",
          screens: [
            { title: "Dashboard", image: "/projects/biyahero-dashboard-web.png", alt: "BiyaHero web administration dashboard showing report and user summaries" },
            { title: "Report management", image: "/projects/biyahero-report-management-web.png", alt: "BiyaHero web report management page with filters, map, and report table" },
            { title: "Admin login", image: "/projects/biyahero-admin-login-web.png", alt: "BiyaHero web administrator login page" },
          ],
        },
      ],
    },
    {
      number: "02",
      title: "Rentify",
      fullTitle: "Rentify Car Rental Management System",
      detail: "A database-systems course project for browsing rental cars, handling bookings, and managing rental records.",
      category: "DATABASE COURSE PROJECT",
      platform: "WEB APPLICATION",
      overview: "An early group project from Database Systems coursework, applying relational database design to a car rental workflow. Customers can browse vehicles and submit bookings; administrators manage vehicles, users, and reservations. The system stores customer profiles, payment records, and rental history.",
      contribution: "Designed the relational database and built the overall web application, connecting the interface, PHP backend, and SQL Server database.",
      tools: ["HTML", "CSS", "JavaScript", "PHP", "Microsoft SQL Server 2022", "XAMPP", "SQL Server Management Studio"],
      screenGroups: [
        {
          label: "Customer web application",
          type: "web",
          screens: [
            { title: "Home", image: "/projects/rentify-home.png", alt: "Rentify home page with the project branding and rental service introduction" },
            { title: "Featured cars", image: "/projects/rentify-featured-cars.png", alt: "Rentify featured car catalog with vehicle types and daily rates" },
            { title: "Available vehicles", image: "/projects/rentify-available-vehicles.png", alt: "Rentify available vehicle listings with details and booking actions" },
          ],
        },
      ],
    },
    {
      number: "03",
      title: "Prettiest",
      fullTitle: "Prettiest: Apparel E-commerce System",
      detail: "An apparel e-commerce system with a customer storefront and admin tools for products and inventory.",
      category: "WEB SYSTEMS COURSE PROJECT",
      platform: "WEB APPLICATION",
      overview: "An apparel e-commerce system planned around Prettiest, a Manila-based streetwear brand. The system includes a customer-facing storefront with product browsing, cart, checkout, and order tracking, alongside an admin panel for managing products, orders, users, and inventory alerts.",
      contribution: "Designed the relational database schema and built the overall web application, including the storefront and the administration workflows for products, orders, and inventory.",
      tools: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      screenGroups: [
        {
          label: "Storefront & admin system",
          type: "web",
          screens: [
            { title: "Storefront", image: "/projects/prettiest-storefront.png", alt: "Prettiest customer-facing storefront homepage with navigation, apparel campaign photography, and a shop call to action" },
            { title: "Product management", image: "/projects/prettiest-manage-products.png", alt: "Prettiest administrator product catalog for updating apparel listings and stock" },
            { title: "Inventory alerts", image: "/projects/prettiest-inventory-alerts.png", alt: "Prettiest administrator inventory alerts screen showing product stock levels" },
          ],
        },
      ],
    },
  ],
  skillGroups: [
    { number: "01", title: "Programming languages", skills: ["JavaScript", "Java", "SQL", "Dart"] },
    { number: "02", title: "Web development", skills: ["React", "Vite", "Node.js", "Express.js", "HTML", "CSS"] },
    { number: "03", title: "Mobile development", skills: ["Flutter"] },
    { number: "04", title: "Databases", skills: ["PostgreSQL", "PostGIS", "MongoDB"] },
    { number: "05", title: "Tools & platforms", skills: ["Git", "GitHub", "Firebase", "Postman"] },
    { number: "06", title: "Cybersecurity & network analysis", skills: ["Kali Linux", "Nmap", "Metasploit Framework", "Wireshark"] },
  ],
  certifications: [
    {
      number: "01",
      title: "IT Specialist - Cybersecurity",
      detail: "Certiport, a Pearson VUE business · 2026",
      badgeUrl: "/certificates/it-specialist-cybersecurity-badge.png",
      certificateUrl: "/certificates/it-specialist-cybersecurity.pdf",
      verificationUrl: "https://www.credly.com/badges/263056dd-a298-4715-b798-952aa13f9a74/public_url",
    },
    {
      number: "02",
      title: "PMI Project Management Ready®",
      detail: "Project Management Institute · 2026",
      badgeUrl: "/certificates/pmi-project-management-ready-badge.png",
      certificateUrl: "/certificates/pmi-project-management-ready.pdf",
      verificationUrl: "https://www.credly.com/badges/7a8abd29-23c4-46e9-9532-a7b5335ebb77/public_url",
    },
  ],
} as const;
