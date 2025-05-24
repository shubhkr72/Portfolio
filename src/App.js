import './App.css';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Circle from './components/Circle';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer/>
      <Circle/>
    </div>
  );
}

export default App;