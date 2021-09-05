import React from "react";
import { Switch, Route } from "react-router";
import Header from "./components/header/Header";
import ContactForm from "./components/contactForm/ContactForm";
import Home from "./views/home/Home";
import Resume from "./views/resume/Resume";
import { useProvideContact } from "./hooks";
import "./App.scss";
import SocialLinks from "./components/socialLinks/SocialLinks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  const { state } = useProvideContact();
  console.log(state.contactFormVisible);
  return (
    <div className="mainAppContainer">
      <ToastContainer />
      <Header />
      {state.contactFormVisible ? <ContactForm /> : ""}
      <SocialLinks />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </div>
  );
}

export default App;
