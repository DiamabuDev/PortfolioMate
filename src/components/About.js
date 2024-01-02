import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const About = () => {
    return (
        <section className="about" id="about">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>About Me</h2>
                                    <p>As a Senior Mobile Developer with over five years of experience, I've contributed to diverse sectors like health, education, and digital banking, bringing innovative solutions to each. My passion for mobile development is coupled with a strong skill set in problem-solving and technology implementation, significantly driving organizational growth and success in various challenging environments.</p>

                                    <Tab.Container id="about-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Experience</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Education</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Languages</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <p>Senior iOS developer - FSB Technology (2022 - 2023)
                                                    Develop new features and correct bugs for casino and sports betting apps like CasinoTime (CA), Fitzdares (CA). Work with international teammates.

                                                    Ssr iOS Developer - Globant (2021 - 2022)
                                                    Develop new features and correct bugs for tvOS ESPN Sportscenter USA application. Work with Disney and international teammates.

                                                    iOS Developer - Soluntech (2020 - 2021)
                                                    Develop native for iOS ArmCare application, correct bugs and build new features. Refactor and build new architecture.

                                                    iOS Developer - Valid (2020)
                                                    Develop native for iOS Daviplata application, correct bugs and build new features. I worked on allies feature and virtual store.

                                                    Mobile Developer - Proximate (2018 - 2020)
                                                    Develop native mobile applications for Android and iOS. Analyze, design, and support mobile applications. Publish applications to the App store and Google Play Store Manage customer databases. Experiences with clients such as Seguros Colmena, EAN University, U. Rosario, Medplus, Colmédica, Efecty.</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <p>Education
                                                    Systems and Telecommunications Engineer
                                                    Sergio Arboleda (2015-2021)
                                                    BPMN Diploma, Intelligent Industry and Data Analytics for the business management.
                                                    University of Salamanca (2019-2020)</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>Spanish: Native Speaker
                                                    English: Professional Proficiency    </p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}