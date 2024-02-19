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
                                            <Tab.Pane eventKey="first" class="work-history">
                                                <div class="work-history">
                                                    <ul>
                                                        <li>
                                                            <strong>Senior iOS Developer - FSB Technology (2022 - 2023)</strong>
                                                            <ul>
                                                                <li>Developed new features and corrected bugs for casino and sports betting apps, including CasinoTime (CA) and Fitzdares (CA).</li>
                                                                <li>Collaborated with international teams.</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>Ssr. iOS Developer - Globant (2021 - 2022)</strong>
                                                            <ul>
                                                                <li>Developed new features and corrected bugs for the tvOS ESPN Sportscenter USA application.</li>
                                                                <li>Worked with Disney and international teams.</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>iOS Developer - Soluntech (2020 - 2021)</strong>
                                                            <ul>
                                                                <li>Developed the native iOS ArmCare application, corrected bugs, and built new features.</li>
                                                                <li>Refactored and developed a new architecture.</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>iOS Developer - Valid (2020)</strong>
                                                            <ul>
                                                                <li>Developed the native iOS Daviplata application, corrected bugs, and built new features.</li>
                                                                <li>Contributed to the allies feature and the virtual store.</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>Mobile Developer - Proximate (2018 - 2020)</strong>
                                                            <ul>
                                                                <li>Developed native mobile applications for both Android and iOS platforms.</li>
                                                                <li>Analyzed, designed, and provided support for mobile applications.</li>
                                                                <li>Published applications to the App Store and Google Play Store.</li>
                                                                <li>Managed customer databases.</li>
                                                                <li>Worked with clients such as Seguros Colmena, EAN University, Universidad del Rosario, Medplus, Colmédica, and Efecty.</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <div class="edu-history">
                                                    <ul>
                                                        <li>
                                                            <strong>Systems and Telecommunications Engineer</strong>
                                                            <ul>
                                                                <li>Sergio Arboleda (2015-2021)</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>BPMN Diploma, Intelligent Industry and Data Analytics for the business management.</strong>
                                                            <ul>
                                                                <li>University of Salamanca (2019-2020)</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                            <div class="edu-history">
                                                    <ul>
                                                        <li>
                                                            <strong>Spanish</strong>
                                                            <ul>
                                                                <li>Native Speaker</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <strong>English</strong>
                                                            <ul>
                                                                <li>Professional Proficiency</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
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