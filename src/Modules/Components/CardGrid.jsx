import React from "react";
import {Card } from "react-bootstrap";
import dashboardImage from '../../Assets/Image/dashboard.png';
import imgB from "../../Assets/Image/air_bnb.png";
import imgC from "../../Assets/Image/pro_1.png";
import imgD from "../../Assets/Image/view.png"
import imgE from "../../Assets/Image/localhost_3000_dashboard.png"
import imgF from "../../Assets/Image/kilo_health.png"
import {Link} from "react-router-dom";

const cardData = [
    { id: 1, img: dashboardImage, text: "Dashboard project showcasing analytics.", buttons: ["HTML", "CSS","PHP","MYSQL"] },
    { id: 2, img: imgD, text: "CMS Information Project", buttons: ["PHP","HTML","Bootstrap"] }, // Changed title here
    { id: 3, img: imgB, text: "Airbnb clone with booking functionality.", buttons: ["React.Js","Bootsrtap","CSS"] },
    { id: 4, img: imgC, text: "Demo Project Html", buttons: ["HTML","CSS","Bootstrap"] },
    { id: 5, img: imgE, text: "Dashboard project showcasing analytics.", buttons: ["React.Js","Axios","Redux"] },
    { id: 6, img: imgF, text: "Kilo Health", buttons: ["React.Js","Axios","Redux"] },
];




const CardGrid = () => {
    return (
        <div className="container mt-5" style={{ maxWidth: "1200px" }}>
            <div className="row justify-content-center">
                {cardData.map((card) => (
                    <div key={card.id} className="col-md-4 d-flex justify-content-center mt-3">
                        <Card className="card-port p-1 rounded-3" style={{ width: "100%" }}>
                            <Card.Img className="object-fit-cover" variant="top" src={card.img} height="200px" />
                            <Card.Body>
                                <Card.Text>{card.text}</Card.Text>

                                {/* Loop through buttons and render them */}
                                {card.buttons.map((btn, btnIndex) => (
                                    <button key={btnIndex} className="btn peasa ms-2 mt-2 mt-sm-0">
                                    {btn}
                                </button>
                                
                                ))}
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardGrid;
