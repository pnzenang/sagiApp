import Wrapper from "../assets/wrappers/BigSidebar";
import { useHomeLayoutContext } from "../pages/HomeLayout";

import Logo from "./Logo";
import NavLiens from "./NavLiens";

const BigSide = () => {
  const { showSidebar } = useHomeLayoutContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container  " : "show-sidebar sidebar-container"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLiens />
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSide;
