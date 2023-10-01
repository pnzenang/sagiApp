import styled from "styled-components";
// import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useForm } from "@formcarry/react";
import { BsTelephone, BsGlobe, BsGlobe2 } from "react-icons/bs";
import { MdAlternateEmail, MdOutlineFax } from "react-icons/md";
import { AiOutlineForm } from "react-icons/ai";

const Contacts = () => {
  const { state, submit } = useForm({
    id: "lf9ydgvxGb",
  });
  // if (state.submitted) {
  //   return <div>Thank you! We received your submission</div>;
  // }
  return (
    <Wrapper>
      <Container fluid>
        <h1 className="contact-title">CONTACTS</h1>
        <Row>
          <Col md={6} className="form-container">
            <form
              action="https://formcarry.com/s/lf9ydgvxGb"
              method="POST"
              className="myForm"
            >
              <div className="form-row">
                <h4>Leave us a message!</h4>
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  type="email"
                  name="message"
                  className="form-textarea"
                  required
                />
              </div>
              <button type="submit" className="btn">
                Send
              </button>
            </form>
          </Col>
          <Col>
            <div className="myForm">
              <div className="contact-line">
                <BsTelephone size={40} className="icon" />
                <p>443-531-5852</p>
              </div>
              <div className="contact-line">
                <MdOutlineFax size={45} className="icon" />
                <p>443-531-5852</p>
              </div>
              <div className="contact-line">
                <MdAlternateEmail size={40} className="icon" />
                <p>info@mySagi.org</p>
              </div>
              <div className="contact-line">
                <BsGlobe size={40} className="icon" />
                <p>mySagi.org</p>
              </div>
              <div className="contact-line">
                <AiOutlineForm size={40} className="icon" />
                <p>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdGmkYyHR03aV9otU2Z7I1rvtP3pbDHJBzGmCamqDvOmvQTMg/viewform?usp=sf_link">
                    Introductory form
                  </a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin: auto;
  min-height: 70vh;
  display: grid;

  align-items: center;
  background: var(--background-secondary-color);

  .myForm {
    max-width: 500px;
    background: var(--background-secondary-color);
    padding: 2rem 2.5rem;
    margin: 4rem auto;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 5px 0 rgba(0, 0, 0, 0.19); */
    border-radius: 5px;
    border: solid 1px var(--primary-500);
  }
  .contact-title {
    text-align: center;
    color: var(--primary-500);
    margin-top: 2rem;
    font-weight: 700;
  }
  h3 {
    margin-bottom: 2rem;
    text-align: center;
  }
  h5 {
    text-transform: lowercase;
  }
  h4 {
    text-align: center;
    margin-bottom: 1.38rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
    font-weight: 700;
    /* color: white; */
    /* text-shadow: 1px 1px 1px black, 0 0 5px var(--primary-500), 0 0 5px; */
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    padding: 0.65rem;
  }
  .member-btn {
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }

  .forgot-btn {
    color: var(--red-dark);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
  .App {
    font-family: sans-serif;
    padding: 20px;
  }
  .contact-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    padding-bottom: 2.9rem;
    text-transform: lowercase;
  }
  .icon {
    size: 500;
    color: var(--primary-500);
  }
`;
export default Contacts;
