import {
  ThalesLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Thiago Pedrosa",
  initials: "TP",
  location: "Oakville, ON, Canada",
  locationLink: "https://www.google.com/maps/place/Oakville,+ON",
  about:
    "Payments Technology Leader | Card Issuance · EMV · Payment Integrations",
  summary: (
    <>
      Payments technology leader with 10+ years across the issuer card lifecycle: EMV card issuance, card programs and PCI-compliant production systems
      for financial institutions in North and South America. Onboarded bank clients and payment processing platforms, and helped launch new card issuance
      programs, including G+D&apos;s AI-driven Agentic Issuance solution and its award-winning Issuance API. Translates client and business needs into
      requirements, prioritizes enhancements, and supports pricing and effort estimates. Brings an engineering background in EMV, cryptography and payment
      integrations to product decisions.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/56482267?v=4",
  personalWebsiteUrl: "https://cv-thiagopedrosa.vercel.app",
  contact: {
    email: "thiago.mp13@hotmail.com",
    tel: "+13657790082",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ThiagoMPedrosa",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/thiago-pedrosa-8a521b158",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Faculdades Integradas Campos Salles",
      degree: "Bachelor's Degree, Information Systems",
      start: "2016",
      end: "2019",
    },
  ],
  awards: [
    {
      title: "Outcome-Driven Award, “Getting results with rigorous execution”",
      issuer: "Giesecke+Devrient",
      year: "2026",
      description:
        "For going above and beyond to deliver the Issuance API, coordinating stakeholders, maintaining critical documentation and providing hands-on API monitoring and issue resolution.",
    },
    {
      title: "Bravo Award, Certificate of Excellence",
      issuer: "Thales",
      year: "2023",
      description:
        "For the Inventory Management System, a web platform managing inventory and ticketing across dozens of sites for hundreds of users (Django, MariaDB, LDAP, GitLab CI/CD).",
    },
    {
      title: "IPS Recognition",
      issuer: "Thales",
      year: "2023",
      description: "For outstanding performance, work ethic and dedication.",
    },
  ],
  work: [
    {
      company: "Giesecke+Devrient",
      link: "https://www.gi-de.com/en/",
      badges: ["Hybrid", "Client-Facing", "Banking & Payment"],
      title: "Business Solution Tech Lead · Ontario, Canada",
      logo: ThalesLogo,
      start: "Nov 2025",
      end: null,
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Lead discovery and requirements gathering with bank clients and payment ecosystem partners,
              translating business needs into functional and technical specifications for card issuance solutions.
            </li>
            <li>
              Onboarded payment processing platforms, including TSYS, Marqeta, Qolo and Engine,
              defining integration requirements, data flows and validation plans across numerous card programs.
            </li>
            <li>
              Contribute to client quotes, pricing and effort estimates, aligning solution scope with
              commercial and delivery constraints across numerous client opportunities.
            </li>
            <li>
              Influence product enhancement priorities and sequencing based on client demand,
              technical risk and business value.
            </li>
            <li>
              Advise clients and internal stakeholders on EMV processing, Visa, Mastercard and Interac
              card program requirements, and cross-border integrations.
            </li>
            <li>
              Assess existing systems and processes to identify gaps and risks, and recommend
              scalable, secure, standards-compliant solutions.
            </li>
          </ul>
          <p className="mt-2 font-semibold">
            Key project: Agentic Issuance & Issuance API (Outcome-Driven Award, 2026)
          </p>
          <ul className="list-inside list-disc">
            <li>
              Gathered client requirements for G+D&apos;s AI-agent-driven card issuance solution, which
              coordinates card lifecycle events through Card Status, Inventory and Issuance APIs.
            </li>
            <li>
              Drove delivery of the Issuance API from requirements through launch: coordinated stakeholders
              across teams, owned critical project documentation, and provided hands-on API monitoring and issue resolution.
            </li>
            <li>
              Delivered client-facing pitches and solution presentations in pre- and post-sales,
              positioning the solution for issuers unifying digital provisioning and physical card delivery.
            </li>
            <li>
              Designed client-specific workflows and customizations, adapting agent-driven lifecycle
              processes to each issuer&apos;s products, policies and integrations.
            </li>
            <li>
              Shaped product enhancements from client feedback and automated internal monitoring of issuance workflows.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Thales Group",
      link: "https://www.thalesgroup.com",
      badges: ["Hybrid", "Project Management", "Python", "Django", "Java", "C#"],
      title: "Industrial Personalization Solutions Senior · Ontario, Canada",
      logo: ThalesLogo,
      start: "Mar 2025",
      end: "Nov 2025",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Onboarded new bank clients and card issuance programs, coordinating integration, validation
              and production launch across engineering, operations and client teams.
            </li>
            <li>
              Prioritized system enhancements based on operational impact and client requirements,
              shaping the improvement roadmap for personalization systems.
            </li>
            <li>
              Built automation and monitoring tools that reduced manual effort and production incidents,
              improving reliability for high-volume card issuance operations.
            </li>
            <li>
              Produced technical documentation and delivered training to internal teams and stakeholders.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Thales Group",
      link: "https://www.thalesgroup.com",
      badges: ["Hybrid", "Python", "Django", "Java", "C#", "Oracle"],
      title: "Perso System Support Engineer Specialist · Ontario, Canada",
      logo: ThalesLogo,
      start: "Apr 2022",
      end: "Mar 2025",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Resolved complex production issues across card issuance systems through log analysis
              and root-cause analysis with cross-functional teams.
            </li>
            <li>
              Integrated, tested and validated personalization software and application changes
              in production across numerous issuer card programs.
            </li>
            <li>
              Kept systems compliant with PCI-CP and ISO standards through upgrades, security controls and audit support.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Thales Group",
      link: "https://www.thalesgroup.com",
      badges: ["On Site", "JavaScript", "PHP", "EMV", "PLSQL", "Oracle", "SPI"],
      title: "Order Engineering – Software Developer · São Paulo, Brazil",
      logo: ThalesLogo,
      start: "Oct 2019",
      end: "Apr 2022",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Designed and built EMV card personalization data processing applications handling
              millions of records per month, including quality controls and reporting.
            </li>
            <li>
              Applied cryptographic methods and key management to prepare secure EMV and PIN-related
              card data; set up client card profiles for Visa and Mastercard programs.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Thales Group",
      link: "https://www.thalesgroup.com",
      badges: ["On Site", "DoS", "EMV", "PLSQL", "Oracle"],
      title: "New Product Integration Technician · São Paulo, Brazil",
      logo: ThalesLogo,
      start: "2016",
      end: "Oct 2019",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Analyzed requirements and ran acceptance testing to introduce new card personalization
              technologies and products into production.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Issuer card lifecycle & issuance",
    "Visa / Mastercard / Interac programs",
    "Requirements & solution design",
    "APIs & payment integrations",
    "Processor onboarding (TSYS, Marqeta)",
    "Pre- & post-sales support",
    "EMV, PIN & key management",
    "PCI-CP & ISO compliance",
    "Pricing & effort estimation",
    "Digital & physical card provisioning",
    "Client onboarding & stakeholders",
    "Product enhancement prioritization",
    "SQL and PL/SQL",
    "Oracle, MySQL/MariaDB",
    "Excel",
    "Datadog",
    "APIs and integrations",
    "API monitoring",
    "Agentic AI workflows",
    "Python, Java, C#, JavaScript",
    "Django, .NET, Flask",
    "AWS, Google Cloud",
    "GitLab CI/CD",
    "GitHub Copilot",
  ],
  projects: [
    {
      title: "Inventory Management System",
      techStack: ["Django", "MariaDB", "LDAP", "GitLab CI/CD"],
      description:
        "Web platform managing inventory and ticketing across dozens of sites for hundreds of users.",
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
