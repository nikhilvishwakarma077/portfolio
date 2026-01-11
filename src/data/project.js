import Headphones from "../assets/Headphones.png"
import FlowSyncBanner from "../assets/FlowSyncBanner.png"
import Eschool from "../assets/Eschool.png"

export const images = {
    image1: Headphones,
    image2: FlowSyncBanner,
    image3: Eschool
}

export const fullstackPojects = [
    {
        id: "ecommerce",
        title: "MERN E-Commerce Platform",
        description: "Full-stack e-commerce app with auth, cart, and orders.",
        stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
        features: [
            "JWT auth with refresh tokens",
            "Cart & checkout flow",
            "Admin product CRUD",
            "Order history",
        ],
        github: "https://github.com/nikhilvishwakarma077/ecommerce-mern",
        demo: "",
        image: "https://repository-images.githubusercontent.com/285856040/69180880-2138-11eb-8b06-03db3ef1abad",
        githublink: "https://github.com/nikhilvishwakarma077/ecommerce-mern"
    },
    {
        id: "dashboard",
        title: "Admin Dashboard",
        description: "Role-based dashboard with filters and pagination.",
        stack: ["React", "Express", "MongoDB"],
        features: [
            "Protected routes",
            "Server-side pagination",
            "Search & filters",
        ],
        github: "https://github.com/yourname/dashboard",
        demo: "",
        image: "https://themefisher.com/blog-thumb/bootstrap-admin-dashboard-templates.webp",
        githublink: "https://github.com/nikhilvishwakarma077/blogger"
    },
];

export const frontendProjects = [
    {
        id: "ecommerce",
        title: "A Product Landingpage",
        description: "A Complete Responsive product purchase website using react + tailwind.",
        stack: ["React", "Tailwind"],
        features: [
            "checkout flow",
            "Order status",
        ],
        github: "https://github.com/nikhilvishwakarma077/product-landingpage",
        demo: "https://product-landingpage-mu.vercel.app/",
        image: Headphones,
        githublink: "https://github.com/nikhilvishwakarma077/product-landingpage"
    },
    {
        id: "Education",
        title: "E-School",
        description: "A Complete Responsive E-learning website using ReactJS + Tailwind CSS + Framer-motion",
        stack: ["React", "Tailwind", "Framer-motion"],
        features: [
            "No features yet",
        ],
        github: "https://github.com/nikhilvishwakarma077/e-school",
        demo: "https://e-school-one.vercel.app/",
        image: Eschool,
        githublink: "https://github.com/nikhilvishwakarma077/e-school"
    },
    {
        id: "SaaS (Product)",
        title: "FlowSync AI",
        description: "A modern SaaS landing page for an AI workflow automation platform (flowsyncaisolutions) designed to drive free trial, demo signups and chat bot preview.",
        stack: ["React", "Tailwind"],
        features: [
            "No feature yet",

        ],
        github: "https://github.com/nikhilvishwakarma077/flowsyncaisolutions-landingpage",
        demo: "https://flowsyncaisolutions-landingpage-gj2.vercel.app/",
        image: FlowSyncBanner,
        githublink: "https://github.com/nikhilvishwakarma077/flowsyncaisolutions-landingpage"
    },
]