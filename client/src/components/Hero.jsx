import React from "react";
import styled from "styled-components";
import heroBcg from "../assets/images/africa.jpg";
import heroBcg2 from "../assets/images/kids.jpg";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>SAGI MISSION</h1>
        <p>
          It is true that we are witnessing a race to court cameroonians for
          registration in some form of death benefits, most are doing it for
          personal enrichment, but at SAGI we believe that we must stick to
          basics, our organization must stay true to its initial mission, which
          brought joy to the faces of many Cameroonians by organizing its member
          associations so that when a family is struck by the death of one of
          its Members, we get together, provide the necessary funds to bury the
          loved one with love and peace of mind.
        </p>
        {/* <Link to="/products" className="btn hero-btn">
          shop now
        </Link> */}
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="nice table" className="main-img" />
        <img src={heroBcg2} alt="person working" className="accent-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 90vh;
  display: grid;
  place-items: center;
  margin-bottom: 0.5rem;
  text-align: left;

  .img-container {
    display: none;
  }
  h1 {
    margin-bottom: 2rem;
    font-weight: bolder;
    color: var(--primary-400);
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 2rem 0;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
      font-weight: bolder;
      color: var(--primary-400);
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
    .content {
      margin-right: 1.5rem;
    }
  }
`;

export default Hero;
