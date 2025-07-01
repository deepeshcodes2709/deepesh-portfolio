// app/page.jsx

import Image from "next/image";
import styles from "./page.module.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftSection from "@/component/leftsection";
import RightSection from "@/component/rightsection";

export default function Home() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={3} className="leftSectionStyle">
            <LeftSection />
          </Col>
          <Col md={9} className="rightSectionStyle">
            <RightSection />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
