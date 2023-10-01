import Wrapper from "../assets/wrappers/Footer";

const Footer = () => {
  return (
    <Wrapper>
      <p className="copyright">
        copyright &copy;
        <span className="name"> SAGI</span>
        <span id="date"> {new Date().getFullYear()}:</span>
        <span className="name"> Active Solidarity Ltd. </span> All rights
        reserved.
      </p>
    </Wrapper>
  );
};
export default Footer;
