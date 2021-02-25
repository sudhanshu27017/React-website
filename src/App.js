import Navbar from './components/Navbar';
import Head   from './components/Head';
import About  from './components/About';
import Service  from './components/Service';
import Gallery  from './components/Gallery';
import Testimonial  from './components/Testimonial';
import Contact  from './components/Contact';
import Footer  from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
            <Switch>
              <Route exact path="/" component={Head} />
              <Route exact path="/about"  component={About} />
              <Route path="/services" component={Service} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/testimonials" component={Testimonial} /> 
              <Route path="/contact" component={Contact} /> 
            </Switch>
        
          <Footer />
      </Router>
    </div>
  );
}

export default App;
