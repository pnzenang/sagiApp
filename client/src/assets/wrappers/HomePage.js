import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 3rem 2rem 4rem;
  line-height: 2rem;
  .form-title {
    margin-bottom: 1.5rem;
    font-weight: bolder;
  }
  .accordion-item {
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
  }
  .badge {
    background: var(--primary-500);
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }
  .status-title {
    font-weight: bold;
  }
  .container {
    margin: auto;
    width: 640px;
    padding: 50px;
    font-family: "Avenir", sans-serif;
    color: #33475b;
  }
  .container img {
    display: flex;
    justify-content: center;
  }
  .text {
    line-height: 2rem;
    color: grey;
    font-weight: bolder;
    display: grid;
  }
  .text-title {
    margin: 3rem;
  }

  .form-btn {
    align-self: end;
    margin-top: 1rem;
    display: flex;
    place-items: center;
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  .accordion-header {
    color: red;
  }
  .accordion-button {
    color: var(--primary-400);
    background: var(--background-secondary-color);
    font-weight: bolder;
  }
  .accordion-item {
    color: var(--text-secondary-color);
    background: var(--background-secondary-color);
  }

  h1 {
    padding: 1rem;
    color: var(--primary-500);
    font-weight: 600;
  }
`;

export default Wrapper;
