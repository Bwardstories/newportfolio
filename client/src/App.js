import React from "react";
import { Switch, Route } from "react-router";
import Header from "./components/header/Header";
import ContactForm from "./components/contactForm/ContactForm";
import Home from "./views/home/Home";
import Resume from "./views/resume/Resume";
import { useProvideContact } from "./hooks";
import "./App.scss";
import SocialLinks from "./components/socialLinks/SocialLinks";

function App() {
  const { state } = useProvideContact();
  console.log(state.contactFormVisible);
  return (
    <div className="mainAppContainer">
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
