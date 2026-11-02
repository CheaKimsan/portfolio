import { FaBootstrap, FaJs, FaReact, FaTelegram, FaNode } from 'react-icons/fa';
import { SiFirebase, SiGo, SiAngular, SiTailwindcss, SiMysql} from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { BiLogoTypescript } from 'react-icons/bi';
import { DiPostgresql } from 'react-icons/di';

const sci = [
    { id: 1, icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/chea-kimsan-8900032a3/' },
    { id: 2, icon: <FaGithub />, link: 'https://github.com/CheaKimsan' },
    { id: 3, icon: <FaTelegram />, link: '/' },
    { id: 4, icon: <FaFacebook />, link: 'https://www.facebook.com/chea.kimsan.777/' },
]

const card = [
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "ReactJS " },
    {icon: <BiLogoTypescript />, name: "ReactTsx"},
    { icon: <SiAngular />, name: "Angular" },
    { icon: <FaNode />, name: "NodeJS" },
    { icon: <SiGo />, name: "Golang" },
    { icon: <SiMysql />, name: "Mysql" },
    { icon: <DiPostgresql />, name: "PostgreSQL" },
    { icon: <SiFirebase />, name: "Firebase" },

    // { icon: <SiPostman />, name: "Postman" },
    // { icon: <SiGithub />, name: "Github" },
    // { icon: <SiGitlab />, name: "Gitlab" },
    // { icon: <SiMinio />, name: "Minio" },

];

const navLinks = [
    { path: '/', label: 'Home', end: true },
    { path: '/about-me', label: 'About Me' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/skill', label: 'Skill' },
];

const cardPort = [
    { title: 'Kilo Health ' },
    { title: 'Kilo Health ' },
    { title: 'Airbnb Website' },
    { title: 'Static Website' },
    {title:  'Drone System '}
];

export { card, sci, navLinks, cardPort };