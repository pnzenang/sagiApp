import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import main1 from "../assets/images/open.png";
import main2 from "../assets/images/onBudget.png";
import main3 from "../assets/images/speed.png";
import styled from "styled-components";
const MissionCard = () => {
  return (
    <Wrapper>
      <h2>SAGI Bases its services on its three fundamental pillars:</h2>
      <CardGroup className="card-group">
        <Card className="card">
          <Card.Img variant="top" src={main1} className="card-image1" />
          <Card.Body>
            <Card.Title className="card-title">Transparency</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer> */}
        </Card>
        <Card>
          <Card.Img variant="top" src={main2} className="card-image2" />
          <Card.Body>
            <Card.Title className="card-title">Saving</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer> */}
        </Card>
        <Card>
          <Card.Img variant="top" src={main3} className="card-image3" />
          <Card.Body>
            <Card.Title className="card-title">Fast Delivery</Card.Title>
            <Card.Text className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer> */}
        </Card>
      </CardGroup>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  h2 {
    color: var(--primary-500);
    font-weight: 700;
    /* text-align: center; */
  }
  .card-image1 {
    width: 50%;
    align-content: center;
    margin: auto;
    padding-top: 2rem;
  }
  .card-image2 {
    width: 45%;
    align-content: center;
    margin: auto;
    padding-top: 2rem;
  }
  .card-image3 {
    width: 45%;
    align-content: center;
    margin: auto;
    padding-top: 2rem;
  }
  .card {
    margin-top: 2rem;
    background: var(--primary-500);
  }
  .card-title {
    text-align: center;
    font-weight: 700;
    font-size: 30px;
    color: var(--primary-900);
  }
  .card-text {
    color: var(--text-color);
  }
`;
export default MissionCard;
