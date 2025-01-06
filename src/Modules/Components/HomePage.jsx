import {card} from "../../Constants/Card";
import {FaBagShopping} from "react-icons/fa6";

const HomePage = () => {
    return (
        <>
            <div className="container">
                <div className="row align-items-center vh-50">
                    {/* Button Section for Small Screens */}
                    <div className="col-12 d-md-none text-center mb-4">
                        <button className="btn btn-primary available-work">
                            <FaBagShopping/> Available For Work
                        </button>
                    </div>

                    <div className="col-lg-6 col-md-12 text-center text-lg-start">
                        <div className="intro">
                            <h1>Nice to meet you! 👋</h1>
                            <br/>
                            <h1 className="line">I'm Kimsan.</h1>
                        </div>
                        <div className="text fs-6 mt-4 ms-lg-0" style={{maxWidth: "400px"}}>
                            <p>
                                Based in Cambodia, I'm a front-end developer passionate about
                                building modern web applications that users love.
                            </p>
                            <h1>Contact Me 📭</h1>
                            <div className="underline"></div>
                            <div className="underline1"></div>
                        </div>
                    </div>
                    <div
                        className="col-lg-6 d-none d-md-flex justify-content-center justify-content-lg-end mt-4 mt-lg-0">
                        <button className="btn btn-primary available-work">
                            <FaBagShopping/> Available For Work
                        </button>
                    </div>
                </div>
            </div>
            <section className="skill mt-5">
                    <h1 className="d-flex justify-content-center">Skill 🔪</h1>
                    <div className="underline2"></div>
                    <div className="underline3"></div>
                <div className="container" style={{maxWidth: '1000px'}}>
                    <div className="row g-3 justify-content-center mt-5">
                    {card.map(({icon}, index) => (
                            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-4">
                                <div className="card text-center p-3">
                                    <div className="card-body p-3">
                                        <div className="card-body align-content-center text-center p-3">
                                            <i className="icon-skill">{icon}</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </>
    );
};

export default HomePage;
