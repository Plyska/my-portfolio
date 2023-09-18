import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  pettersonapps,
  malevich,
  vvmd,
  freelance,
  threejs,
  graphql,
  materialui,
  nextjs,
  theways,
  sagaplanner,
  carsharing,
  facebook,
  linkedin,
  mail,
} from "../assets";

export const phoneNumbers = [
  {
    country: "UA",
    number: "+ 380 631 048 147",
  },
  {
    country: "CZ",
    number: "+ 420 773 851 509",
  },
];

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "React Native Development",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Webflow Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: materialui,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "VVMD",
    icon: vvmd,
    iconBg: "#383E56",
    date: "November 2022 - CURRENT",
    points: [
      "Development and support of TheWays education platform.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Malevich",
    icon: malevich,
    iconBg: "#E6DEDD",
    date: "April 2022 - November 2022",
    points: [
      "Developed a company product with customer reporting, PDF generation and Gantt charting.",
      "Developed landings for crypto companie.",
      "Supported the application for cryptocurrencies conversion.",
      "Developed a CRM system for users engaged in testing various types of goods such as clothes, shoes, etc.",
    ],
  },
  {
    title: "Front-end developer",
    company_name: "PettersonApps",
    icon: pettersonapps,
    iconBg: "#383E56",
    date: "March 2021 - April 2022",
    points: [
      "Participated in a few fast-paced projects as a Web and Mobile Engineer.",
      "Designed front-end architecture for Planner used to create a layout of the home interior.",
      "Developed a taxi mobile application.",
      "Supported the existing and developed a new functionality for an application for a preschool educational institution.",
    ],
  },
  {
    title: "Front-end developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#383E56",
    date: "February 2020 - April 2021",
    points: [
      "Development of landing pages and web applications using JS, TS, React, Angular.",
      "Refactoring the legacy code using the latest technologies, developing new features and fixing bugs.",
      "Support and development of mobile applications using TS, React Native; • Development and integration with such services as Google Sheets API, Firebase, Pipedrive, Nova Poshta API, IMDB API.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const socialMedia = [
  {
    link: "https://www.linkedin.com/in/andrii-plyska/",
    img: linkedin,
  },
  {
    link: "https://www.facebook.com/andriy.plyska.12/",
    img: facebook,
  },
  {
    link: "mailto:andriy.plyska322@gmail.com",
    img: mail,
  },
];

const projects = [
  {
    name: "The Ways",
    description:
      "The Ways educational platform is the web application designed for communication between users and mentors. The mentors can share  video materials and all the information on the topics of the user’s interest. Additionally, the user can book an online 1-2-1 meeting with a mentor in order to discuss issues in the field of user’s interest. The site also has various courses that users can take to improve or acquire new skills",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "jQuery",
        color: "green-text-gradient",
      },
      {
        name: "Webflow",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "yellow-text-gradient",
      },
    ],
    image: theways,
    source_code_link: "",
    url: "https://www.theways.io/",
  },
  {
    name: "Saga Planner",
    description: `Planner for creating a layout of a home interior. The user can draw his own layout or download a pre-made template. The glider includes the following functionalities:
      7 options of drawing shapes; eraser; scaling the actual sizes of the layout; option to move the layout across the board; viewing the layout in real time; saving and placing an order.`,
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      },
      {
        name: "KonvaJS",
        color: "yellow-text-gradient",
      },
    ],
    image: sagaplanner,
    source_code_link: "",
    url: "https://nordgrona.com/saga#page-section-616ebe98eddc1c74b4e722ee",
  },
  {
    name: "Car Sharing",
    description:
      "A Car Rental web application is a digital platform designed to facilitate the process of renting automobiles to individuals and businesses. Its primary purpose is to provide users with a convenient and efficient way to browse, select, and reserve vehicles for a specified duration. Users can typically access a wide range of car options, including various makes, models, and sizes, often with the flexibility to choose between daily, weekly, or monthly rental periods.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "TailwintCSS",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "yellow-text-gradient",
      },
    ],
    image: carsharing,
    source_code_link: "https://github.com/Plyska/cars-sharing",
    url: "https://cars-sharing.vercel.app/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socialMedia,
};
