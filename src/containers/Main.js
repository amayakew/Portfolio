import React, {useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import StartupProject from "./StartupProjects/StartupProject";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";
import Contact from "./contact/Contact";
import Footer from './footer/FooterSection';

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <>
          <Header />
          <Greeting />
          <Skills />
          <StackProgress />
          <Education />
          <StartupProject />
          <Contact />
          <Footer />
          <ScrollToTopButton />
        </>
      </StyleProvider>
    </div>
  );
};

export default Main;
