import {useEffect} from "react";
import CardGrid from "./CardGrid";
import CountNum from "./CountNum";

const Portfolio = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return <>
        <section className={'portfolio'} style={{marginTop: '100px'}}>
            <h1 className="d-flex justify-content-center">Portfolio 🎨</h1>
            <div className="underline4"></div>
            <div className="underline5"></div>
            <CardGrid/>
            <CountNum></CountNum>
        </section>
    </>

};

export default Portfolio;
