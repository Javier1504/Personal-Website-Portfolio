/**
 * CV / Portfolio Content Data
 * ------------------------------------------------------------
 * Edit this file when you want to update profile text, CV summary,
 * experiences, projects, organization experiences, or skills.
 * You do not need to touch index.html for content updates.
 */
window.PORTFOLIO_DATA = {
  profile: {
    name: "Javier Nararya Aqsa Setiyono",
    title: "Informatics Engineering Graduate • Software Engineer • AI/Computer Vision Enthusiast",
    location: "Surabaya, Indonesia",
    email: "javiernararya93@gmail.com",
    phone: "+62 812-4587-2525",
    whatsapp: "6281245872525",
    linkedin: "https://www.linkedin.com/in/javiernararya/",
    github: "https://github.com/Javier1504",
    blog: "https://javiernararyaa.blogspot.com/",
    cv: "./assets/CV.pdf",
    photo: "./assets/profile.jpg",
    summary: "Informatics Engineering Graduate from Institut Teknologi Sepuluh Nopember (ITS) with a GPA of 3.59/4.00 (Cum Laude). Specialized in Computer Vision and Artificial Intelligence, with a primary research focus on Vision-Language Modeling through the development of Transformer-based Image Captioning systems and advanced Image Processing techniques. I possess a deep technical background in architecting Automated Agentic AI for Intelligent Scraping, leveraging Large Language Models (LLMs) to automate complex data extraction workflows. My versatile engineering toolkit further includes developing immersive simulations as a Virtual Reality Developer and building robust end-to-end applications through Fullstack Software Engineering. By integrating heuristic methods like Particle Swarm Optimization (PSO) with modern deep learning frameworks, I aim to bridge the gap between sophisticated visual understanding and autonomous intelligent systems."
  },

  highlights: [
    {
      icon: "code-2",
      label: "Software Engineering",
      value: "Production Grade End-to-End Systems"
    },
    {
      icon: "scan-eye",
      label: "Machine Learning",
      value: "Vision Language • Transformers"
    },
    {
      icon: "graduation-cap",
      label: "Research Focus",
      value: "AI • Computer Vision"
    }
  ],

  heroTags: [
    "AI/ML (Computer Vision)",
    "Vision-Language Transformers",
    "Agentic AI Web Scraping (LLMs)",
    "Fullstack Engineering",
    "Backend APIs (.NET / Laravel)",
    "Cloud & Deployment (IIS/SSL)",
    "Databases (SQL Server / MySQL)"
  ],

  experiences: [
    {
      title: "Junior Software Engineer - PT Sentra Vidya Utama (SEVIMA)",
      period: "Dec 2025 — Now",
      category: "Work",
      featured: true,
      descriptions: [
        "Architected an Autonomous Agentic AI Framework to automate large-scale data acquisition for the maukuliah.id (SEVIMA) university database, significantly increasing data coverage and completeness through intelligent automation.",
        "Engineered robust data extraction pipelines using Playwright, Chromium, and Puppeteer, conducting comprehensive audits within staging environments to ensure high-fidelity retrieval from complex web architectures.",
        "Integrated Gemini LLM for intelligent parsing, leveraging Large Language Models to interpret unstructured content and map it into precise, predefined schemas, ensuring superior data integrity compared to traditional scraping methods."
      ]
    },
    {
      title: ".Net developer - PT Mitra Transformasi Digital (Mitral)",
      period: "Nov 2025 — Now",
      category: "Work",
      featured: true,
      descriptions: [
        "Engineered a Hybrid Conversational Platform integrating ChatGPT and Gemini LLMs with a human-in-the-loop answering system, developed using ASP.NET Core Web API and C# .NET.",
        "Implemented Secure Authentication & Data Architecture by designing a Gmail-based OTP system and managing complex relational data using SQL Server and Entity Framework Core.",
        "Managed Full-cycle Deployment & ERP Integration, including the successful deployment of the platform under HTTPS protocols for secure production and the development of business solutions utilizing the NextERP ecosystem."
      ]
    },
    {
      title: "Lecturer Assistant of Database Systems (English Class)",
      period: "Sep 2023 — Dec 2023",
      category: "Academic",
      featured: false,
      descriptions: [
        "Facilitated Advanced Database Education by teaching core concepts of Query Processing, Oracle DBMS, Relational Modeling, and Physical Database Design.",
        "Mentored and Evaluated 40+ Students, assisting faculty members in monitoring academic progress and assessing core competencies.",
        "Developed Standardized Assessment Materials, including ETS and EAS examination questions."
      ]
    },
    {
      title: "Practical Assistant of Database Systems",
      period: "Sep 2023 — Dec 2023",
      category: "Academic",
      featured: false,
      descriptions: [
        "Developed Case-Study-Based Practicum Modules using advanced SQL query optimization.",
        "Led systematic laboratory sessions and hands-on mentorship to ensure student proficiency."
      ]
    },
    {
      title: "Data Science & Virtual Reality Development - Badan Pendapatan Daerah Jawa Timur (Bapenda Jatim)",
      period: "Agu 2024 — Dec 2024",
      category: "Internship",
      featured: true,
      descriptions: [
        "Implemented Particle Swarm Optimization (PSO) to forecast regional revenue across a 5-year projection.",
        "Engineered Immersive Data Visualizations using Unity Engine with Virtual Reality (VR).",
        "Streamlined internal knowledge management through documentation and technical materials."
      ]
    },
    {
      title: "Lecturer Assistant of Framework Programming",
      period: "Sep 2024 — Dec 2024",
      category: "Academic",
      featured: false,
      descriptions: [
        "Instructed fullstack development: Vue/React and scalable backends using Laravel and Node.js.",
        "Orchestrated project demonstrations and code-quality reviews for 60+ students.",
        "Assisted in competency assessments for a large-scale cohort."
      ]
    },
    {
      title: "Lecturer Assistant of Computer Graphics",
      period: "Sep 2024 — Dec 2024",
      category: "Academic",
      featured: false,
      descriptions: [
        "Instructed Unity Engine for game graphics and WebGL for shadowing and particle effects.",
        "Assisted in teaching and assessing 40+ students in Computer Graphics."
      ]
    },
    {
      title: "IT Support Software Tester and Documentation for Geographical Information System of Kapuas",
      period: "Agu 2024 — Dec 2024",
      category: "Contract",
      featured: true,
      descriptions: [
        "Conducted functional testing and QA for GIS modules, identifying critical bugs to ensure stability.",
        "Authored technical documentation and user manuals for stakeholders and end-users."
      ]
    },
    {
      title: "Lecturer Assistant of Human Computer Interaction",
      period: "Feb 2025 — May 2025",
      category: "Academic",
      featured: false,
      descriptions: [
        "Instructed core HCI principles including UI/UX design methodologies.",
        "Conducted project demo sessions for each group to assess competencies.",
        "Assisted lecturers in teaching and evaluating 120+ students."
      ]
    },
    {
      title: "Website designer of SMAN 2 Surabaya",
      period: "Mar 2023 — Dec 2023",
      category: "Project",
      featured: false,
      descriptions: [
        "Created a digital literacy website design for SMAN 2 Surabaya in a group setting.",
        "Developed the design using Figma and delivered the final handoff."
      ]
    }
  ],

  projects: [
    {
      title: "AskAiApp - AI and human Q&A Web Base App",
      tag: "Fullstack",
      year: 2025,
      desc: "A fullstack web-based application for Q&A featuring ChatGPT, Gemini, and Human response services. The login and registration methods utilize Gmail with authentic verification via OTP codes. A token usage statistics feature is available on the Admin Page to restrict prompting. Users will have their usage limited once the prompting token count reaches 6,000, after which they can resume prompting two hours later.",
      tech: ["HTTPS", "ASP.NET Core Web Api", "IIS", "JWT", "SQL Server", "C#", "OTP", "JS"],
      img: "./assets/projects/AskAiApp.png",
      links: { demo: "#", repo: "#" }
    },
    {
      title: "UrbanTrafficSight AI Captioner - Image Captioning for Urban Traffic Scene",
      tag: "Machine learning + Fullstack",
      year: 2025,
      desc: "A fullstack application built with React and Laravel, utilizing an SQLite database, which implements image captioning specifically for urban traffic imagery using Object Relation Transformer and Beam Search. The model has been tested and developed through my Final Project. The constructed model is proven to adapt to my own custom dataset—which is relatively small in size—while achieving relatively high evaluation metrics across BLEU-1 to BLEU-4, Rouge-L, and BERTScore.",
      tech: ["Transformer", "Deep Learning", "Beam Search", "Laravel", "React", "SQLite", "Machine Learning"],
      img: "./assets/projects/UrbanTrafficSight.png",
      links: { demo: "#", repo: "#" }
    },
    {
      title: "Instapost - Social Media Web Base App with NoSQL Database",
      tag: "fullstack website",
      year: 2024,
      desc: "A fullstack web base application with a social media theme using PHP framework and NoSQL database. Features include mutual users, posting photos or videos, liking or commenting on other users' posts, sending messages to mutual users, custom profiles, and other features. Privacy settings ensure that non-mutual users cannot send messages or view each other's stories.",
      tech: ["PHP", "MongoDB", "CSS", "JS"],
      img: "./assets/projects/InstaPost.png",
      links: { demo: "#", repo: "#" }
    },
    {
      title: "Image Captioning Traffic Scenes",
      tag: "research + computer vision",
      year: 2025,
      desc: "An Indonesian-language Transformer-based captioning system, evaluated using BLEU, ROUGE, and BERTScore metrics.",
      tech: ["PyTorch", "Transformer", "Beam Search"],
      img: "./assets/projects/TA.png",
      links: { demo: "#", repo: "#" }
    },
    {
      title: "E-Market - NextERP Web Base App",
      tag: "fullstack website",
      year: 2024,
      desc: "A fullstack web base application with an e-commerce theme using PHP framework and MySQL database. Features include product listing, shopping cart, user authentication, order management, and admin panel.",
      tech: ["PHP", "MySQL", "CSS", "JS"],
      img: "./assets/projects/E-Market.png",
      links: { demo: "#", repo: "#" }
    },
    {
      title: "Agentic AI Web Scraper for Official University Website Information",
      tag: "automated agentic ai",
      year: 2026,
      desc: "An automated web scraping system that extracts structured data from official university websites using AI agents, with modular pipelines.",
      tech: ["Python", "Playwright", "Puppeteer", "Gemini LLM", "Agentic AI"],
      img: "./assets/projects/AgenticAI.png",
      links: { demo: "#", repo: "#" }
    },
    {
      title: "License Plate Recognition System with yolov8",
      tag: "computer vision",
      year: 2024,
      desc: "A license plate recognition system using YOLOv8 for object detection and OCR for text extraction.",
      tech: ["Python", "YOLOv8", "OpenCV", "OCR"],
      img: "./assets/projects/LicensePlate.png",
      links: { demo: "#", repo: "#" }
    }
  ],

  organizations: [
    {
      title: "Human Resource - Himpunan Mahasiswa Teknik Computer-Informatika (HMTC)",
      period: "Feb 2023 — Dec 2023",
      category: "Himpunan Departemen",
      featured: true,
      descriptions: [
        "Demonstrated Leadership in Community Engagement, fostering team synergy and operational efficiency.",
        "Coordinated HR operations for departmental events and large-scale ceremonies.",
        "Managed staffing logistics, recruitment, and task allocation for high-profile initiatives."
      ]
    },
    {
      title: "Expert Staff IniLhoITS2023!",
      period: "Dec 2022 — Jan 2023",
      category: "Campus Event",
      featured: false,
      descriptions: [
        "Senior Lead Coordinator for a team of 6 staff members.",
        "Defined job descriptions and optimized task distribution for performance.",
        "Directed operational flow for an event with 1,000+ participants."
      ]
    },
    {
      title: "Expert Staff Gerigi ITS 2023",
      period: "Jun 2023 — Agu 2023",
      category: "Campus Event",
      featured: false,
      descriptions: [
        "Executive Lead Coordinator managing a team of 10 staff members.",
        "Optimized workflows and task distribution to maintain team performance.",
        "Directed operational flow for an event with 6,000+ participants."
      ]
    },
    {
      title: "Head of Security, Licensing, dan Facilitator Division - DiesNatalis ITS ke-63",
      period: "Sep 2023 — Oct 2023",
      category: "Campus Event",
      featured: true,
      descriptions: [
        "Led a division of 60 personnel to manage safety, compliance, and event flow.",
        "Oversaw licensing, venue security, and crowd control strategies for large events.",
        "Coordinated incident-free operations for thousands of supporters."
      ]
    },
    {
      title: "Staff of Licensing and Logistics Schematics 2022",
      period: "Apr 2022 — Nov 2022",
      category: "Campus Event",
      featured: false,
      descriptions: [
        "Coordinated permits, venue procurement, and event security protocols.",
        "Liaised with authorities for crowd permits and facility licensing.",
        "Supported VIP protection and crowd control during peak attendance."
      ]
    },
    {
      title: "Staff of Licensing Gerigi ITS 2022",
      period: "Jun 2022 — Agu 2022",
      category: "Campus Event",
      featured: false,
      descriptions: [
        "Handled venue licensing and coordinated equipment procurement.",
        "Managed setup and security of logistics for event operations.",
        "Maintained order for an event with 6,000+ attendees."
      ]
    },
    {
      title: "Head of Security and Licensing Division - ISOMETRIC ITS 2023",
      period: "Mar 2023 — Jun 2023",
      category: "Campus Event",
      featured: true,
      descriptions: [
        "Led a division of 40 personnel for venue licensing and event safety.",
        "Distributed jobdesk and monitored operational execution across the division.",
        "Ensured smooth event flow for hundreds of participants."
      ]
    }
  ],

  skills: [
    {
      icon: "code-2",
      title: "Software Engineering",
      items: [
        "Fullstack Web Apps (React / Vue)",
        "Backend API (ASP.NET Core / Laravel)",
        "Auth & Security (JWT, OTP)",
        "Deployment & Ops (IIS, SSL, Windows Server)",
        "System Integration & Testing"
      ]
    },
    {
      icon: "brain-circuit",
      title: "AI & Research Computer Vision",
      items: [
        "Computer Vision & Vision Language Models",
        "Transformers for Image Captioning (ORT, Beam Search)",
        "Deep Learning (PyTorch / TensorFlow)",
        "Agentic Web Scraping with LLMs"
      ]
    }
  ]
};
