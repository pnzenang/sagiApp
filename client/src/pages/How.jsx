import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import howInfo from "../utils/howInfo";
import styled from "styled-components";

const How = () => {
  return (
    <Wrapper>
      <div>
        <h1 className="how-title">HOW IT WORKS</h1>
        <Row sm={1} md={2} lg={3} className="g-4">
          {howInfo.map((how) => {
            const { id, title, info } = how;
            return (
              <Col key={id} className="col">
                <Card className="card">
                  <Card.Body>
                    <Card.Title className="card-title">{title}</Card.Title>
                    <hr />
                    <Card.Text className="card-info">{info}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  flex-wrap: row wrap;
  border-radius: var(--border-radius);
  border: red;
  padding: 1rem 2rem 2rem;
  line-height: 2rem;
  background: var(--background-secondary-color);
  padding-bottom: 3rem;
  .col {
    display: flex;
    flex-wrap: row wrap;
  }
  .card {
    background: var(--background-secondary-color);
    text-align: left;
    border-color: var(--primary-500);
  }
  .how-title {
    font-weight: 700;
    margin: 2rem 0;
    color: var(--primary-500);
    text-align: center;
  }
  .card-title {
    color: var(--primary-500);
    font-weight: 700;
    text-transform: uppercase;
    /* font-family: pacifico; */
  }
  .card-info {
    color: var(--text-color);
    line-height: 2rem;
    font-style: pacifico;
  }

  hr {
    color: var(--primary-500);
  }
`;
export default How;
