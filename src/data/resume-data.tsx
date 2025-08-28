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
    "An accomplished software engineer with 8 years of growth and innovation, currently specializing in driving projects to success.",
  summary: (
    <>
      Backend-focused Full Stack Engineer specializing in Banking and Payment
      applications, scalable Django services, and real-time collaboration
      systems. Experienced in technical architecture design and remote deployments.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/56482267?v=4",
  personalWebsiteUrl: "https://resume-thiagopedrosa.vercel.app",
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
      company: "Thales Cyber & Digital Canada",
      link: "https://www.thalesgroup.com",
      badges: ["Hybrid", "Project Management", "Python", "Django", "Java", "C#"],
      title: "Industrial Personalization Solutions Field Support Senior",
      logo: ThalesLogo,
      start: "2025",
      end: null,
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
