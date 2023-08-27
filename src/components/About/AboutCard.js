import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Seralagan Januyan </span>
            from <span className="purple"> Colombo, Sri Lanka.</span>
            <br /> I am a final year student pursuing my Bachelor's in
            Information Technology at Srilanka Information Institute of
            Technology.
            <br />
            Additionally, I am currently employed as a Software Engineer at
            7Zigma.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If, at first, you do not succeed, call it version 1.0."{" "}
          </p>
          <footer className="blockquote-footer">Khayri R.R. Woulfe</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
