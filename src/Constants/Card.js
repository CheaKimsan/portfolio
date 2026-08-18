import { FaHtml5, FaCss3, FaBootstrap, FaJs, FaReact, FaPhp, FaTelegram, FaLaravel, FaNode } from 'react-icons/fa';
import { SiRedux, SiFirebase, SiGo, SiAngular, SiTailwindcss, SiMysql, SiMongoose, SiMongodb, SiPostman, SiGithub, SiGitlab, SiMinio } from "react-icons/si";
import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa6";
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
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "ReactJS " },
    {icon: <BiLogoTypescript />, name: "ReactTsx"},
    { icon: <SiAngular />, name: "Angular" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <FaLaravel />, name: "Laravel" },
    { icon: <FaNode />, name: "NodeJS" },
    { icon: <SiGo />, name: "Golang" },
    { icon: <SiMongodb />, name: "Mongoose" },
    { icon: <SiMysql />, name: "Mysql" },
    { icon: <DiPostgresql />, name: "PostgreSQL" },
    { icon: <SiFirebase />, name: "Firebase" },

    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiGithub />, name: "Github" },
    { icon: <SiGitlab />, name: "Gitlab" },
    { icon: <SiMinio />, name: "Minio" },
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