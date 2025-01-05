import image from '../../Assets/Image/photo_2024-12-17_15-43-15.jpg';
import { Link } from "react-router-dom";
import { FaArrowTurnDown, FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="footer border-top">
            <div className="container mt-5 mb-5">
                <div className="row">
                    {/* First Column */}
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <div className="d-flex flex-column flex-sm-row align-items-center gap-4">
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
                                <div className="icon-nav mt-3 d-flex justify-content-center justify-content-sm-start gap-3">
                                    <Link to="" className="icon"><FaLinkedin /></Link>
                                    <Link to="" className="icon"><FaGitlab /></Link>
                                    <Link to="" className="icon"><FaGithub /></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="col-12 col-md-6">
                        <div className="text-center text-md-start">
                            <h1 className="fs-4">Social On <FaArrowTurnDown /></h1>
                            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-5 mt-3">
                                <div className="email">
                                    <h5>Email</h5>
                                    <span>cheakimsan061789705@gmail.com</span>
                                </div>
                                <div className="phone">
                                    <h5>Phone</h5>
                                    <span>+885 61 789 706</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
