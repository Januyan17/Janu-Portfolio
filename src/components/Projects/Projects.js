import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/water1.png";
import emotion from "../../Assets/Projects/food.png";
import tellie from "../../Assets/Projects/tellie.png";
import dating from "../../Assets/Projects/date1.png";
import suicide from "../../Assets/Projects/cable.png";
import bitsOfCode from "../../Assets/Projects/manga.png";
import chat from "../../Assets/Projects/chat.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dating}
              isBlog={false}
              title="MatchDate"
              description="I crafted an engaging UI using Flutter, combining aesthetics with usability. CRUD actions were seamlessly integrated via Flutter and Firebase, enabling efficient backend interaction. The app facilitates real-time audio and video calls, text messaging,Image Sharing ,Voice Sharing  and notifications. Monetization was achieved by seamlessly integrating Google Ads"
              // ghLink=""
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Mangakiku"
              description="I meticulously crafted UIs, prioritizing visually captivating and intuitive designs to elevate user experience. By seamlessly incorporating CRUD APIs through Flutter, I established a robust connection between the app and backend server or database. This integration empowers effortless data manipulation and management, all within the application's framework."
              // ghLink=""
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tellie}
              isBlog={false}
              title="Tellie"
              description="This research using DeepLearning aims to create a system that emotionally narrates stories to children, mimicking the expressive delivery of human storytellers. Catering primarily to the tech-immersed Alpha generation, the system encourages their engagement in meaningful activities, countering excessive screen time. It enables caregivers to efficiently manage story sessions by performing three core functions: extracting story text from images, identifying emotions within each sentence, and producing emotional audio narratives."
              // ghLink=""
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Water Bill Collection"
              description="I created a captivating and user-friendly UI using Flutter, covering the entire application design process. Through Flutter, I seamlessly integrated CRUD API functionality, enabling effortless backend interaction and data management. By harnessing Firebase Machine Learning, I integrated image scanning to extract text from images, enhancing accessibility and user convenience."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Cable Connection"
              description=" I orchestrated the development of both front-end and back-end aspects, guaranteeing a smooth fusion of the application's UI and backend. Crafting captivating and intuitive UIs, I skillfully designed layouts and components to ensure an engaging user journey. Through API connections, I facilitated seamless communication between the app and external services or databases, enabling diverse interactions such as data retrieval and updates, thereby enriching the overall functionality."
              // ghLink=""
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat Application"
              description="I designed an appealing Flutter UI that blends aesthetics and user-friendliness, while seamless Firebase integration handles CRUD actions effortlessly. The app supports real-time text, image, and voice messaging, complemented by timely notifications. Notably, Google Ads integration ensures a smooth monetization strategy, enhancing the overall user experience."
              // ghLink=""
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Food Ordering"
              description="I executed CRUD operations using Kotlin and Firebase, streamlining data management and interaction between the app and Firebase backend. This seamless integration enabled fluid data manipulation within the application. Leveraging Firebase, I integrated OTP verification and email authentication for secure user access. Moreover, I embedded QR scanning within the app, enhancing user interactions by extracting information from QR codes, boosting convenience."
              // ghLink=""
              // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
