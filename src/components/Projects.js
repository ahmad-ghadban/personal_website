import React from 'react';
import { Col, Row, Container, Tab } from 'react-bootstrap';
import projImg1 from "../assets/img/project-img1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import { ProjectCard } from './ProjectCard';
export const Projects = () => {
 
    const projects = [
        {
            title: "Online Shopping Store",
            description: "HTML, CSS, and JavaScript",
            imgUrl: projImg1,
        },
        {
            title: "Zombie Defence Game",
            description: "Java and Greenfoot",
            imgUrl: projImg2,
        },
        {
            title: "Order Tracker",
            description: "Visual Basic for Applications",
            imgUrl: projImg3,
        },
    ];
    return (
        <section className='project' id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Here are some of my projects that I have created</p>
                        <Tab.Content>
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

                            
                        </Tab.Content>
                        
                        
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt='lol'></img>
        </section>
    )
}
