import React from "react";
import { Button, Card } from "react-bootstrap";
import imgA from "../../Assets/Image/dashboard.png";
import imgB from "../../Assets/Image/air_bnb.png";
import imgC from "../../Assets/Image/pro_1.png";
import imgD from "../../Assets/Image/Demo_html.png"
import {Link, useNavigate} from "react-router-dom";

const cardData = [
    { id: 1, img: imgA, text: "Dashboard project showcasing analytics." ,link : "/"},
    { id: 2, img: imgB, text: "Airbnb clone with booking functionality.",link:'/' },
    { id: 3, img: imgC, text: "Professional portfolio website." , link: '/'},
    { id: 4, img: imgD, text: "Demo Project Html" , link: 'https://portfolio.kiloit.org/gen2-reactjs/Chea+Kimsan/first-project-san/baker.html'}
];


const CardGrid = () => {
    return (
        <div className="container mt-5" style={{ maxWidth: '1200px' }}>
            <div className="row justify-content-center">
                {cardData.map((card) => (
                    <div key={card.id} className="col-md-4 d-flex justify-content-center mt-3">
                        <Card className="card-port p-1 rounded-3" style={{ width: '100%' }}>
                            <Card.Img className="object-fit-cover" variant="top" src={card.img} height="200px" />
                            <Card.Body>
                                <Card.Text>{card.text}</Card.Text>
                                <Link to={card.link}>
                                    <button className="btn peasa">Live Demo</button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardGrid;
