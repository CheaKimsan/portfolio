import {Link} from "react-router-dom";
import {FaGithub, FaGitlab, FaLinkedin} from "react-icons/fa6";

const navbar = () => {
    return <>
        <div className={'container mt-5'}>
            <nav className="navbar navbar-light text-light">
                <div className="container">
                    <div className="navbar-brand text-light" to="#">
                        <h1 className={'nav-name'}>Chea Kimsan  🧑🏻‍💻</h1>
                    </div>

                    <div className={'icon-nav'}>
                        <Link to={''} className={'icon'}><FaLinkedin/></Link>
                        <Link to={''} className={'icon'}><FaGitlab/></Link>
                        <Link to={''} className={'icon'}><FaGithub/></Link>
                    </div>

                </div>
            </nav>
        </div>
    </>
}
export default navbar;