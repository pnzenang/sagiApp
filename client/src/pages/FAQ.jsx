import styled from "styled-components";
import { useState } from "react";
import data from "../utils/data";
import { Question } from "../components";

const FAQ = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <Wrapper>
      <div className="container">
        <h1>Q&A ABOUT SAGI</h1>
        <section className="info">
          {questions.map((question) => {
            return <Question key={question.id} {...question}></Question>;
          })}
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 1rem 2rem 2rem;
  line-height: 2rem;

  main {
    min-height: 100vh;
    /*using flex because of better browser support */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    width: 50vw;
    margin: 1rem auto;
    background: var(--clr-white);
    border-radius: var(--radius);
    padding: 1rem 1rem;
    width: 100%;
    /* max-width: var(--fixed-width); */
    display: grid;
    gap: 1rem 1rem;
  }
  .container h3 {
    line-height: 1.2;
    font-weight: 500;
    color: #349feb;
  }
  /* @media (min-width: 992px) {
    .container {
      display: grid;
      grid-template-columns: 250px 1fr;
    }
  } */
  h1 {
    color: var(--primary-500);
    font-weight: 700;
    text-align: center;
  }
  .question {
    padding: 1rem 1.5rem;
    border: 2px solid var(--clr-grey-special);
    margin-bottom: 1rem;
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
  }
  .question h4 {
    text-transform: none;
    line-height: 1.5;
    color: var(--primary-500);
  }
  .question p {
    color: var(--clr-grey-3);
    margin-bottom: 0;
    margin-top: 0.5rem;
  }
  .question header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: orange;
  }
  .question header h4 {
    margin-bottom: 0;
  }
`;
export default FAQ;
