import { FaTimes } from "react-icons/fa";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useHomeLayoutContext } from "../pages/HomeLayout";
import Logo from "./Logo";
import liens from "../utils/liens";
import NavLiens from "./NavLiens";
import { NavLink } from "react-router-dom";
NavLink;
const SmallSide = () => {
  const { showSidebar, toggleSidebar } = useHomeLayoutContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLiens />
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSide;
