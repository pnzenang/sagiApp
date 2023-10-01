import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/team.svg";

import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            SAGI <span>:Active</span> solidarity
          </h1>
          <p>
            Helps lessen the financial burden of any family whose fallen loved
            one was a member. This is an extension of the solidarity that we
            know back home, where one person's problem becomes the community's
            problem; cameroonians registered to SAGI get together to take care
            of their fallen sister or brother without breaking anybody's bank.
          </p>
          <Link to="/home" className="btn explore-link">
            explore
          </Link>
          <Link to="/login" className=" btn">
            Login
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
