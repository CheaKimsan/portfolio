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
                    <div className="text fs-6 mt-4 ms-lg-0" style={{ maxWidth: '500px' }}>
                        <p>
                            Based in Cambodia, I'm a mid-level web developer passionate about
                            building modern web applications that users love.
                        </p>
                        <p>
                            Currently, I've worked at the General Department of Immigration for 1year, where
                            I'm part of a team building a web-based drone monitoring and control
                            system. I built the user interface using React.js with TypeScript,
                            focusing on a type-safe, component-driven architecture, and
                            integrated with Firebase for real-time data sync and authentication.
                        </p>
                        <p>
                            Before that, I spent about a year at Kilo IT, working as a front-end
                            developer on the Kilo Health project. I used React.js to build and
                            maintain user-facing features, collaborating closely with designers
                            and back-end developers to deliver a smooth, responsive experience
                            for a health-focused platform.
                        </p>
                        <p>
                            Alongside my professional work, I've also explored other
                            technologies like PHP, Laravel, and Spring through various school
                            assignments and personal projects. While these weren't used in
                            production products, they've helped me build a broader understanding
                            of back-end development and different frameworks.
                        </p>
                        <h2 className="fs-5 mt-4">Education 🎓</h2>
                        <p>
                            Bachelor's Degree — SETEC Institute, 2023–Present
                            <br />
                            BACC II — Phnom Srouch High School, 2020–2022
                        </p>
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