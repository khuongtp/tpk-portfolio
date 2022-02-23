import "./App.scss";
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Works,
} from "./containers";
import { Navbar } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
