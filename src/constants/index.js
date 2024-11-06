export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Skills',
        href: '#skills',
    },
    {
        id: 4,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 5,
        name: 'Work',
        href: '#work',
    },
    {
        id: 6,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Himanshu was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Himanshu’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Himanshu. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Himanshu was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'CodeOverflow - Coding Doubts Solving Platform',
        desc: 'CodeOverflow is a collaborative, community-driven platform designed to help coders solve their technical doubts. It provides an interactive space for developers to ask questions, share solutions, and exchange knowledge across all programming languages and technologies.',
        subdesc: "What sets CodeOverflow apart is its Room feature — a dedicated space where users can connect with like-minded individuals. These rooms foster specialized discussions, allowing users to join communities based on specific interests, skills, or goals.",
        href: 'https://code-overflow-one.vercel.app/',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.ico',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
        ],
    },
    {
        title: 'Appointly - Simplified Appointment Scheduling',
        desc: 'Appointly is a user-friendly appointment booking platform, where users can create accounts, set their schedules, and define availability. Other users can easily book appointments based on the available slots, ensuring a seamless scheduling experience.',
        subdesc: 'With Appointly, managing appointments becomes effortless—users control their schedule, and each booking instantly updates both calendars, ensuring no missed meetings. It’s a seamless way to stay organized and accessible for meetings and events.',
        href: 'https://appointly-nu.vercel.app/',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.svg',
        logoStyle: {
            backgroundColor: '#D3D3D3',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/javascript.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4.5, -5.8, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -7, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-9, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-7, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    // {
    //     id: 1,
    //     name: 'ITXJOBS',
    //     pos: 'Frontend Developer',
    //     duration: '2022 - Present',
    //     title: "",
    //     icon: '/assets/framer.svg',
    //     animation: 'victory',
    // },
    {
        id: 2,
        name: 'Defence Research and Development Organization (DRDO)',
        pos: 'Web Developer Intern',
        duration: 'Jan 2021 - Apr 2021',
        title: "Crafted a comprehensive Library Management System (LMS) to efficiently categorize books by department. Applied HTML, CSS, and JavaScript to craft an intuitive user interface for seamless navigation. Leveraged MySQL database to store and manage book details, ensuring optimal performance and accessibility.",
        icon: '/assets/drdo.png',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Tech Mahindra Foundation',
        pos: 'Frontend Developer Intern',
        duration: 'Jan 2020 - Apr 2020',
        title: "Designed and developed a Weather Web Application facilitating seamless access to real-time weather and temperature data through city- specific searches. Created the user interface using ReactJs with CSS for styling. Fulfilled data retrieval from the Weather API to provide real-time up-to-date weather information",
        icon: '/assets/tmf.jpg',
        animation: 'salute',
    },
];

export const technologies = [
    {
        name: "HTML 5",
        icon: '/tech/html.png',
    },
    {
        name: "CSS 3",
        icon: '/tech/css.png',
    },
    {
        name: "JavaScript",
        icon: '/tech/javascript.png',
    },
    {
        name: "TypeScript",
        icon: '/tech/typescript.png',
    },
    {
        name: "React JS",
        icon: '/tech/reactjs.png',
    },
    {
        name: "Redux Toolkit",
        icon: '/tech/redux.png',
    },
    {
        name: "Tailwind CSS",
        icon: '/tech/tailwind.png',
    },
    {
        name: "Node JS",
        icon: '/tech/nodejs.png',
    },
    {
        name: "MongoDB",
        icon: '/tech/mongodb.png',
    },
    {
        name: "Three JS",
        icon: '/tech/threejs.svg',
    },
    {
        name: "Git",
        icon: '/tech/git.png',
    },
    // {
    //     name: "Figma",
    //     icon: '/tech/figma.png',
    // },
    {
        name: "Docker",
        icon: '/tech/docker.png',
    },
];