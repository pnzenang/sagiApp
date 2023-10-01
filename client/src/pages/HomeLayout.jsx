import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSide, SmallSide, Navbar2, Footer } from "../components";
import { createContext, useContext, useState } from "react";

const HomeLayoutContext = createContext();

const HomeLayout = () => {
  //temp
  const [showSidebar, setShowSidebar] = useState(false);
  // const [isDarkTheme, setIsDarkTheme] = useState(false);

  // const toggleDarkTheme = () => {
  //   const newDarkTheme = !isDarkTheme;
  //   setIsDarkTheme(newDarkTheme);
  //   document.body.classList.toggle("dark-theme", newDarkTheme);
  //   localStorage.setItem("darkTheme", newDarkTheme);
  // };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <HomeLayoutContext.Provider value={{ showSidebar, toggleSidebar }}>
      <Wrapper>
        <main className="dashboard">
          <SmallSide />
          <BigSide />
          <div>
            <Navbar2 />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </HomeLayoutContext.Provider>
  );
};
export const useHomeLayoutContext = () => useContext(HomeLayoutContext);
export default HomeLayout;
