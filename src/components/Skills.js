import { Col, Row, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import React from 'react';
import "react-multi-carousel/lib/styles.css";
import python from "../assets/img/python.png";
import java from "../assets/img/java.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import react2 from "../assets/img/react.png.jpg";
import javascript from "../assets/img/javascript.png";
import vba from "../assets/img/vba.png";
import c2 from "../assets/img/c.png";
import git2 from "../assets/img/git.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
          <section className="skill" id ="skills">
              <Container>
                  <Row>
                      <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Here are some of my technical skills</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={python} alt = "python" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={java} alt = "java" />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={html} alt = "html" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt = "css" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={javascript} alt = "javascript" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={react2} alt = "react" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={vba} alt = "vba" />
                                    <h5>VBA</h5>
                                </div>
                                <div className="item">
                                    <img src={c2} alt = "c" />
                                    <h5>C</h5>
                                </div>
                                <div className="item">
                                    <img src={git2} alt = "git" />
                                    <h5>Github</h5>
                                </div>
                            </Carousel>
                        </div>
                      </Col>
                  </Row>
              </Container>
              <img className="background-image-left" src={colorSharp} alt="lol" />
          </section>
      )
}