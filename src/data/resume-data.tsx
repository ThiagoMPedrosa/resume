import {
  ThalesLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Thiago Pedrosa",
  initials: "TP",
  location: "Ontario, Canada, EST",
  locationLink: "https://www.google.com/maps/place/Ontario",
  about:
    "An accomplished Tech-Leader with over 9 years of growth and innovation, currently specializing in driving projects to success.",
  summary: (
    <>
      Technical Lead with 9+ years of experience in EMV payment systems, smartcard personalization, credential issuance, secure data processing, and
      production system support. Strong background in integration, validation, troubleshooting, scripting, and customer-facing technical delivery across
      secure payment environments, with exposure to cryptography, key management, PCI-CP, ISO standards, and Windows/Linux-based infrastructure.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/56482267?v=4",
  personalWebsiteUrl: "https://cv-thiagopedrosa.vercel.app",
  contact: {
    email: "thiago.mp13@hotmail.com",
    tel: "+3657790082",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ThiagoMPedrosa",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/thiago-pedrosa-8a521b158/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Faculdades Integradas Campos Salles",
      degree: "Bachelors Degree in Information Systems",
      start: "2016",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Giesecke+Devrient",
      link: "https://www.gi-de.com/en/",
      badges: ["Hybrid", "Business Solutions", "Tech-Lead", "Client-Facing"],
      title: "Business Solution Tech Lead",
      logo: ThalesLogo,
      start: "2025",
      end: null,
      description: (
        <>
          Act as a technical advisor for clients and internal stakeholders on payment technologies,
          EMV processing, and cross-border system integrations
          <ul className="list-inside list-disc">
            <li>
              Analyze and gather business and system requirements from stakeholders, 
              translating them into functional and technical specifications.
            </li>
            <li>
              Design and recommend integrated IT solutions, including legacy and 
              API-based systems, ensuring scalability, interoperability, and security
            </li>
            <li>
              Develop system architecture, data flows, interface designs, and
              technical documentation to support implementation and integration
            </li>
            <li>
              Evaluate existing systems and processes to identify gaps and risks,
              and propose optimized technical solutions
            </li>
            <li>
              Collaborate with clients, development, and QA teams to deliver 
              scalable payment solutions aligned with business objectives.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Thales Cyber & Digital Canada",
      link: "https://www.thalesgroup.com",
      badges: ["Hybrid", "Project Management", "Python", "Django", "Java", "C#"],
      title: "Industrial Personalization Solutions Field Support Senior",
      logo: ThalesLogo,
      start: "2025",
      end: "2025",
      description: (
        <>
          Responsible for implementing, maintaining, and enhancing Thales
          personalization systems across the Americas region.
          <ul className="list-inside list-disc">
            <li>
              Serve as subject matter expert in the development and deployment of Thales
              internal solutions, utilizing Java, Python, C#, and Velocity.
            </li>
            <li>
              Provide advanced technical support for multi-site projects across the Americas
              ensuring seamless process implementation and effective integration of Thales solutions.
            </li>
            <li>
              Implement, optimize, and maintain Thales Banking & Payment systems
              across the Americas region, identifying improvement opportunities and ensuring
              reliability through cloud-based monitoring tools.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Thales Cyber & Digital Canada",
      link: "https://www.thalesgroup.com",
      badges: ["Hybrid", "Python", "Django", "Java", "C#", "Oracle"],
      title: "Perso System Support Engineer Specialist",
      logo: ThalesLogo,
      start: "2022",
      end: "2025",
      description: (
        <>
          Responsible for implementing, maintaining, and enhancing Thales 
          personalization systems across the Americas region.
          <ul className="list-inside list-disc">
            <li>
              Develop and deploy Thales internal systems, focused on Java, Python, C#, and Velocity
            </li>
            <li>
              Direct interface for local teams across the USA and Canada, ensuring
              seamless processes implementation, promoting APS and other Thales’ solutions.
            </li>
            <li>
              Responsible for Canada’s Banking & Payment Infrastructure.
            </li>
            <li>
              Personalization, innovation, development, and security standards.
            </li>
            <li>
              Troubleshoot data processing, adhering to ISO specifications, and support PCI-CP (VISA/MC) compliance.
            </li>            
          </ul>
        </>
      ),
    },
    {
      company: "Thales Cyber & Digital Brazil",
      link: "https://www.thalesgroup.com",
      badges: ["On Site", "JavaScript", "PHP", "EMV", "PLSQL", "Oracle", "SPI"],
      title: "Order Engineering - Software Developer",
      logo: ThalesLogo,
      start: "2019",
      end: "2022",
      description: (
        <>
          Responsible for implementing, maintaining, and enhancing Thales 
          personalization systems across the Americas region.
          <ul className="list-inside list-disc">
            <li>
              Software Development & Validation: data processing, Electrical Personalization (EMV), quality controls, and reports.
            </li>
            <li>
              Creation & improvement of Data Processing tools focusing on performance, 
              processing large amounts of data, advanced cryptography, and managing
              data for utilization in banking Smartcards (EMV data preparation).
            </li>       
          </ul>
        </>
      ),
    },
    {
      company: "Thales Cyber & Digital Brazil",
      link: "https://www.thalesgroup.com",
      badges: ["On Site", "DoS", "EMV", "PLSQL", "Oracle"],
      title: "New Product Integration Technician",
      logo: ThalesLogo,
      start: "2016",
      end: "2019",
      description: (
        <>
          Responsible for implementing, maintaining, and enhancing Thales 
          personalization systems across the Americas region.
          <ul className="list-inside list-disc">
            <li>
              Definition and execution of new technologies, methods, processes, 
              and product tests, implementation, and acceptance test of new banking
              personalization machines.
            </li>
            <li>
              Definition and implementation of new methods, processes, and products.
            </li>
            <li>
              Previous and post-implementation tests of new projects in production.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Django",
    ".NET",
    "Flask",
    "Oracle, Mariadb, MySQL",
    "Project Management",
    "EMV Transactions and concepts",
    "SQL and PLSQL",
    "Python, JavaScript, HTML, CSS, PHP, Java, Velocity, C#.",
    "Gitlab CI/CD",
    "IIS, Nginx",
    "AWS, Google Cloud, Datadog",
    "Data Processing",
    "Agile and Kanban methodologies",
    "System Architecture",
    "Remote Team Leadership",
  ],
  projects: [
    {
      title: "Inventory Management System",
      techStack: ["Django", "Python", "MariaDB", "IIS, Nginx", "LDAP"],
      description:
        "Django Web Server application that manages Inventory stock and KPIs across multiple sites worldwide.",
      logo: ThalesLogo,
      link: {
        href: "",
        label: ""
      },
    },
    {
      title: "Voluntariando",
      techStack: [
        "Node.js",
        "Next.Firebase",
        "AWS S3",
      ],
      description:
        "Improve the information access about voluntary positions, bringing position posts and their availability according to the filters.",
      logo: ThalesLogo,
      link: {
        href: "",
        label: ""
      },
    },
  ],
} as const;
