import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header/Header";
import Home from "./screens/Home/Home";
import WhoAreWe from "./screens/WhoAreWe/WhoAreWe";
import KnowHow from "./screens/KnowHow/KnowHow";
import TUC from "./screens/TUC/TUC";
import ClientsPartners from "./screens/ClientsPartners/ClientsPartners";
import Contact from "./screens/Contact/Contact";

import "./App.css";

const App = () => {
  const location = useLocation();
  return (
    <div className="App" style={{ position: "relative" }}>
      <Header />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route path="/who-are-we" component={WhoAreWe} />
          <Route path="/our-know-how" component={KnowHow} />
          <Route path="/tuc" component={TUC} />
          <Route path="/clients-partners" component={ClientsPartners} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
