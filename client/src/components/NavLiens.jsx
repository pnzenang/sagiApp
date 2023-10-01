import { useHomeLayoutContext } from "../pages/HomeLayout";
import liens from "../utils/liens";
import { NavLink } from "react-router-dom";

const NavLiens = () => {
  const { toggleSidebar } = useHomeLayoutContext();
  return (
    <div className="nav-links">
      {liens.map((lien) => {
        const { text, path, icon } = lien;
        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={toggleSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLiens;
