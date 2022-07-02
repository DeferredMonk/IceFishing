import { BrowserRouter as Router, Route } from "react-router-dom"
import Index from "./Components/Index";
import Nav from "./Components/Nav";
import Instructions from "./Components/Instructions";
import Apply from './Components/Apply'
import ThankYou from './Components/ThankYou'
import { useRef, useState } from "react";

function App() {

  const applierInfo = useRef({})

  return (
    <>
      <Router>
        <Nav kilpailu="Pilkkikilpailu 2022" />
        <Route path="/" exact component={Index} />
        <Route path="/Saannot" exact component={Instructions} />
        <Route path="/Ilmoittaudu" exact>
          <Apply applierInfo={applierInfo} />
        </Route>
        <Route path="/kiitos" exact>
          <ThankYou applierInfo={applierInfo} />
        </Route>
      </Router>
    </>
  );
}

export default App;
