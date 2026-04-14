import './App.css';
import './components/Navbar.css';
import './components/Main.css';
import './components/Section.css';
import './components/Aside.css';
import './components/Footer.css';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Section from './components/Section';

const App = () => {
  return (
    <div className="app container">
      <Navbar />
      <Main />
      <Section />
      <Aside />
      <Footer />
    </div>
  );
};

export default App;
