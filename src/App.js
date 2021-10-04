import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ErrorFound from "./components/ErrorFound/ErrorFound";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Pages from "./components/Pages/Pages";
import Services from "./components/Services/Services";
import Teachers from "./components/Teachers/Teachers";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/events">
            <Events></Events>
          </Route>{" "}
          <Route exact path="/teachers">
            <Teachers></Teachers>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>{" "}
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>{" "}
          <Route exact path="/pages">
            <Pages></Pages>
          </Route>
          <Route path="*">
            <ErrorFound></ErrorFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
