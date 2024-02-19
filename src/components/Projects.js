import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.jpeg";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Fitzdares and CasinoTime (Canada) - Sports Betting Apps - iOS",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "ESPN Sports Center (USA)",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "ArmCare App (USA) - iOS",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Daviplata App (CO) - iOS",
            description: "Design & Development",
            imgUrl: projImg4,
        },
        {
            title: "Efecty App (CO) - iOS",
            description: "Design & Development",
            imgUrl: projImg5,
        },
        {
            title: "URosario App (CO) - iOS",
            description: "Design & Development",
            imgUrl: projImg6,
        },
        ,
        {
            title: "Colmedica App (CO) - iOS",
            description: "Design & Development",
            imgUrl: projImg7,
        },
        ,
        {
            title: "Medplus App (CO) - iOS",
            description: "Design & Development",
            imgUrl: projImg8,
        }    
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2 className="mb-5">Projects</h2>
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}