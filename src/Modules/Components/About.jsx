import { useEffect } from 'react';
import image from '../../Assets/Image/photo_2024-12-17_15-43-15.jpg';

const About = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);
    return (
        <div className="container about_me" style={{ marginTop: '100px' }}>
            <div className="row align-items-center vh-50">
                <div className="col-12 d-md-none text-center mb-4">
                    <div className="my-photo">
                        <img src={image} alt="My Photo" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 text-center text-lg-start">
                    <div className="intro">
                        <h1>Nice to meet you! 👋</h1>
                        <br />
                        <h1 className="line">I'm Kimsan.</h1>
                    </div>
                    <div className="text fs-6 mt-4 ms-lg-0" style={{ maxWidth: '400px' }}>
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
                    <div className="my-photo">
                        <img src={image} alt="My Photo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
