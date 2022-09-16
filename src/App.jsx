import "./App.css";
import Skills from "./components/Skills/Skills";
import Educations from "./components/Educations/Educations";
import SocialsMedia from "./components/SocialsMedia/SocialsMedia";
import MyBio from "./components/MyBio/MyBio";
import Footer from "./components/Footer/Footer";
import AudioBackground from "./components/Audio/Audio";
import VideoDisplay from "./components/Video/Video";

function App() {
  return (
    <div className="App-header">
      {/* Audio */}
      <AudioBackground />

      {/* Video */}
      <VideoDisplay />
      <hr />

      {/* My Bio */}
      <MyBio />
      <br />

      {/* Social Media Links */}
      <SocialsMedia />
      <br />

      {/* Skills */}
      <Skills />
      <br />

      {/* Education */}
      <Educations />
      <br />

      {/* Experience */}

      {/* Projects */}

      {/* Contact */}

      {/* Footer */}
      <hr />
      <Footer />
    </div>
  );
}

export default App;
