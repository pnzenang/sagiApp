import styled from "styled-components";

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: var(--background-secondary-color);
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .copyright {
    font-weight: bolder;
  }

  .btn-container {
    display: flex;
    align-items: center;
  }
  .name {
    color: var(--primary-500);
  }
  #date {
    color: var(--primary-500);
  }
  @media (min-width: 992px) {
    position: sticky;
    bottom: 0;
    .nav-center {
      width: 90%;
    }
  }
`;
export default Wrapper;
