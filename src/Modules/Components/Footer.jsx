import image from '../../Assets/Image/photo_2024-12-17_15-43-15.jpg';
import {Link} from "react-router-dom";
import {FaArrowTurnDown} from "react-icons/fa6";
import {navLinks, sci} from "../../Constants/Card";
import {NavLink} from "react-router-dom";
import clsx from "clsx";
import 'aos/dist/aos.css';

const Footer = () => {

    return (
        <div className="footer border-top" data-aos="fade-up" data-aos-duration="5000">
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <div className="d-flex flex-column flex-sm-row align-items-center gap-5">
                            <img
                                className="rounded-circle object-fit-cover"
                                src={image}
                                alt="Chea Kimsan"
                                width="120px"
                                height="120px"
                            />
                            <div className="text-center text-sm-start">
                                <h1 className="fs-4">Chea Kimsan</h1>
                                <span>Front-End Developer</span>
                                <div
                                    className="icon-nav mt-3 d-flex justify-content-center justify-content-sm-start">

                                    {
                                        sci.map(({id, icon}, index) => (
                                            <Link to="" key={index} className="icon">{icon}</Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="text-center text-md-start">
                            <h1 className="fs-4">Social On <FaArrowTurnDown/></h1>
                            <div
                                className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-3 mt-3">
                                <div className="email">
                                    <h5>Email</h5>
                                    <span className={'border-bottom'}>cheakimsan061789705@gmail.com</span>
                                </div>
                                <div className="phone">
                                    <h5>Phone</h5>
                                    <span>+885 61 789 705</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row border-top mt-5">
                    <div className="col">
                        <div className="navbar">
                            <ul className="navbar-nav d-flex flex-row justify-content-center align-items-center p-2 gap-4">
                                {navLinks.map(({ path, label, end }) => (
                                    <li key={path} className="nav-item">
                                        <NavLink
                                            className={({ isActive }) =>
                                                clsx('nav-link link-navbar text-light', { active: isActive })
                                            }
                                            aria-current="page"
                                            to={path}
                                            end={end}
                                        >
                                            {label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
