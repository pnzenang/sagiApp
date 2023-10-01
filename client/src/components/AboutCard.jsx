import styled from "styled-components";
import { useState } from "react";
import data from "../utils/data";
import { Contact, Question } from "../components";
import { BsTelephone, BsGlobe } from "react-icons/bs";
import { AiOutlineMail, AiOutlineForm } from "react-icons/ai";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image1 from "../assets/images/poor-man.svg";
import image2 from "../assets/images/advertising.svg";
import image3 from "../assets/images/justice-dollar.svg";
import image4 from "../assets/images/saving-money.svg";

const Contacts = () => {
  return (
    <Wrapper>
      <Container fluid>
        <Row className="row">
          <h1 className="about-title">ABOUT US</h1>
          <Col>
            <img
              src={image1}
              className="rounded-4 shadow-4 float-end m-1"
              alt=""
            />
            <h3>UP UNTIL 2009</h3>
            <p>
              Auto-layout for flexbox grid columns also means you can set the
              width of one column and have the sibling columns automatically
              resize around it. You may use predefined grid classes (as shown
              below), grid mixins, or inline widths. Note that the other columns
              will resize no matter the width of the center column. Auto-layout
              for flexbox grid columns also means you can set the width of one
              column and have the sibling columns automatically resize around
              it. Auto-layout for flexbox grid columns also means you can set
              the width of one column and have the sibling columns automatically
              resize around it. You may use predefined grid classes (as shown
              below), grid mixins, or inline widths. Note that the other columns
              will resize no matter the width of the center column. Auto-layout
              for flexbox grid columns also means you can set the width of one
              column and have the sibling columns automatically resize around
              it. Auto-layout for flexbox grid columns also means you can set
              the width of one column and have the sibling columns automatically
              resize around it. You may use predefined grid classes (as shown
              below), grid mixins, or inline widths. Note that the other columns
              will resize no matter the width of the center column. Auto-layout
              for flexbox grid columns also means you can set the width of one
              column and have the sibling columns automatically resize around
              it. Auto-layout for flexbox grid columns also means you can set
              the width of one column and have the sibling columns automatically
              resize around it. You may use predefined grid classes (as shown
              below), grid mixins, or inline widths. Note that the other columns
              will resize no matter the width of the center column. Auto-layout
              for flexbox grid columns also means you can set the width of one
              column and have the sibling columns automatically resize around
              it.
            </p>
            <hr />
          </Col>
        </Row>
        <Row className="row">
          <Col>
            <br />
            <img
              src={image2}
              className="rounded-4 shadow-4 float-start m-3"
              alt=""
            />
            <h3>FROM 2009 TO 2016</h3>
            <p>
              Auto-layout for flexbox grid columns also means you can set the
              width of one column and have the sibling columns automatically
              resize around it. You may use predefined grid classes (as shown
              below), grid mixins, or inline widths. Note that the other columns
              will resize no matter the width of the center column. Auto-layout
              for flexbox grid columns also means you can set the width of one
              column and have the sibling columns automatically resize around
              it. Auto-layout for flexbox grid columns also means you can set
              the width of one column and have the sibling columns automatically
              resize around it. You may use predefined grid classes (as shown
              below), grid mixins, or inline widths. Note that the other columns
              will resize no matter the width of the center column. Auto-layout
              for flexbox grid columns also means you can set the width of one
              column and have the sibling columns automatically resize around
              it. Auto-layout for flexbox grid columns also means you can set
              the width of one column and have the sibling columns automatically
              resize around it. You may use predefined grid classes (as shown
              below), grid mixins, or inline widths. Note that the other columns
              will resize no matter the width of the center column. Auto-layout
              for flexbox grid columns also means you can set the width of one
              column and have the sibling columns automatically resize around
              it. Auto-layout for flexbox grid columns also means you can set
              the width of one column and have the sibling columns automatically
              resize around it. You may use predefined grid classes (as shown
              below), grid mixins, or inline widths. Note that the other columns
              will resize no matter the width of the center column. Auto-layout
              for flexbox grid columns also means you can set the width of one
              column and have the sibling columns automatically resize around
              it.
            </p>
            <hr />
          </Col>
        </Row>
        <Row className="row">
          <Col>
            <img
              src={image3}
              className="rounded-4 shadow-4 float-end m-2"
              alt=""
            />
            <h3>FROM 2016 TO 2023</h3>
            <p>
              Auto-layout for flexbox grid columns also means you can set the
              width of one column and have the sibling columns automatically
              resize around it. You may use predefined grid classes (as shown
              below), grid mixins, or inline widths. Note that the other columns
              will resize no matter the width of the center column. Auto-layout
              for flexbox grid columns also means you can set the width of one
              column and have the sibling columns automatically resize around
              it. Auto-layout for flexbox grid columns also means you can set
              the width of one column and have the sibling columns automatically
              resize around it. You may use predefined grid classes (as shown
              below), grid mixins, or inline widths. Note that the other columns
              will resize no matter the width of the center column. Auto-layout
              for flexbox grid columns also means you can set the width of one
              column and have the sibling columns automatically resize around
              it. Auto-layout for flexbox grid columns also means you can set
              the width of one column and have the sibling columns automatically
              resize around it. You may use predefined grid classes (as shown
              below), grid mixins, or inline widths. Note that the other columns
              will resize no matter the width of the center column. Auto-layout
              for flexbox grid columns also means you can set the width of one
              column and have the sibling columns automatically resize around
              it. Auto-layout for flexbox grid columns also means you can set
              the width of one column and have the sibling columns automatically
              resize around it. You may use predefined grid classes (as shown
              below), grid mixins, or inline widths. Note that the other columns
              will resize no matter the width of the center column. Auto-layout
              for flexbox grid columns also means you can set the width of one
              column and have the sibling columns automatically resize around
              it.
            </p>
            <hr />
          </Col>
        </Row>
        <Row className="row">
          <Col>
            <br />
            <img
              src={image4}
              className="rounded-4 shadow-4 float-start m-2"
              alt=""
            />
            <h3>FROM 2023 GOING FORWARD</h3>
            <p>
              Auto-layout for flexbox grid columns also means you can set the
              width of one column and have the sibling columns automatically
              resize around it. You may use predefined grid classes (as shown
              below), grid mixins, or inline widths. Note that the other columns
              will resize no matter the width of the center column. Auto-layout
              for flexbox grid columns also means you can set the width of one
              column and have the sibling columns automatically resize around
              it. Auto-layout for flexbox grid columns also means you can set
              the width of one column and have the sibling columns automatically
              resize around it. You may use predefined grid classes (as shown
              below), grid mixins, or inline widths. Note that the other columns
              will resize no matter the width of the center column. Auto-layout
              for flexbox grid columns also means you can set the width of one
              column and have the sibling columns automatically resize around
              it. Auto-layout for flexbox grid columns also means you can set
              the width of one column and have the sibling columns automatically
              resize around it. You may use predefined grid classes (as shown
              below), grid mixins, or inline widths. Note that the other columns
              will resize no matter the width of the center column. Auto-layout
              for flexbox grid columns also means you can set the width of one
              column and have the sibling columns automatically resize around
              it. Auto-layout for flexbox grid columns also means you can set
              the width of one column and have the sibling columns automatically
              resize around it. You may use predefined grid classes (as shown
              below), grid mixins, or inline widths. Note that the other columns
              will resize no matter the width of the center column. Auto-layout
              for flexbox grid columns also means you can set the width of one
              column and have the sibling columns automatically resize around
              it.
            </p>
            <hr />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 1rem 2rem 2rem;
  line-height: 2.5rem;
  /* text-align: justify; */

  main {
    min-height: 75vh;
    /*using flex because of better browser support */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    background: var(--clr-white);
    border-radius: var(--radius);
    padding: 1rem 2rem;
    width: 100%;

    display: grid;
    gap: 1rem 1rem;
    box-shadow: var(--light-shadow);
  }
  img {
    max-width: 300px;
  }
  @media (min-width: 992px) {
    .container {
      display: grid;
      grid-template-columns: 100px 1fr;
    }
    img {
      max-height: 200px;
      max-width: 300px;
    }
  }

  .row {
    margin: 2rem 0 1rem 0;
  }
  h3 {
    color: var(--primary-400);
    font-weight: bolder;
  }
  p {
    text-align: left;
  }
  hr {
    margin: 1rem 10rem;
    color: var(--primary-500);
  }
  .about-title {
    margin-bottom: 2rem;
    text-align: center;
  }
  .m-3 {
    padding: 0 3rem;
  }
`;
export default Contacts;
