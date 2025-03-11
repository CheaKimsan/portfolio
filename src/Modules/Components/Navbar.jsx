import {Link, NavLink} from "react-router-dom";
import {sci} from "../../Constants/Card";

const navbar = () => {
    return <>
        <div className={'container mt-5'}>
            <nav className="navbar navbar-light text-light">
                <div className="container">
                    <NavLink className="navbar-brand text-light" to={'/'}>
                        <h1 className={'nav-name'}>Chea Kimsan  🧑🏻‍💻</h1>
                    </NavLink>

                    <div className={'icon-nav'}>
                        {
                            sci.map(({id,icon,link},index)=>(
                                <Link to={link} key={index} className="icon">{icon}</Link>
                            ))
                        }
                    </div>

                </div>
            </nav>
        </div>
    </>
}
export default navbar;