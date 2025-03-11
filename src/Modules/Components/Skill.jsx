import { card } from "../../Constants/Card";
import { useEffect } from "react";

const Skill = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <section className="skill" style={{marginTop: '100px'}}>
            <h1 className="d-flex justify-content-center">Skill 🔪</h1>
            <div className="underline2"></div>
            <div className="underline3"></div>
            <div className="container" style={{maxWidth: '1000px'}}>
                <div className="row g-3 justify-content-center mt-5">
                    {card.map(({icon}, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-4">
                            <div className="card-border text-center p-3">
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
    );
};

export default Skill;
