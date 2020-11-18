import Navbar from "./components/Navbar.js";
import "./App.css";
import Home from "./components/Home.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <Navbar />,
      <Home />,
      <Footer />
    </div>
  );
}

export default App;
