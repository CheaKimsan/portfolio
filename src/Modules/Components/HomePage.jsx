import { FaBagShopping } from "react-icons/fa6";

const HomePage = () => {
    return (
        <>
            <div className="container">
                <div className="row align-items-center vh-50">
                    {/* Button Section for Small Screens */}
                    <div className="col-12 d-md-none text-center mb-4">
                        <button className="btn btn-primary available-work">
                            <FaBagShopping /> Available For Work
                        </button>
                    </div>

                    <div className="col-lg-6 col-md-12 text-center text-lg-start">
                        <div className="intro">
                            <h1>Nice to meet you! 👋</h1>
                            <br />
                            <h1 className="line">I'm Kimsan.</h1>
                        </div>
                        <div className="text fs-6 mt-4 ms-lg-0" style={{ maxWidth: "400px" }}>
                            <p>
                                Based in Cambodia, I'm a front-end developer passionate about
                                building modern web applications that users love.
                            </p>
                            <h1>Contact Me 📭</h1>
                            <div className="underline"></div>
                            <div className="underline1"></div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-none d-md-flex justify-content-center justify-content-lg-end mt-4 mt-lg-0">
                        <button className="btn btn-primary available-work">
                            <FaBagShopping /> Available For Work
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
