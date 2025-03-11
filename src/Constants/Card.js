import {FaHtml5, FaCss3, FaBootstrap, FaJs, FaReact, FaPhp, FaTelegram} from 'react-icons/fa';
import {SiRedux} from "react-icons/si";
import {FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa6";
import {FaFacebook} from "react-icons/fa";

const sci = [
    {id : 1 ,icon: <FaLinkedin/>,link:'https://www.linkedin.com/in/chea-kimsan-8900032a3/'},
    {id : 2 ,icon: <FaGitlab/> , link:'https://gitlab.com/Cheakimsan'},
    {id : 3 ,icon: <FaTelegram/>,link: '/'},
    {id : 4 ,icon: <FaFacebook/>, link: 'https://www.facebook.com/chea.kimsan.777/' },
]

const card = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaBootstrap />, name: "Bootstrap"},
    { icon: <FaJs />, name: "JavaScript"},
    { icon: <FaReact />, name: "React"},
    { icon: <SiRedux />, name: "Redux"},
    { icon: <FaPhp />, name: "PHP"},
    { icon: <FaGitlab />, name: "Gitlab"},
    { icon: <FaGithub/>, name: "Github"},
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
];

export {card,sci,navLinks,cardPort};