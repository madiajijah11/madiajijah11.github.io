import './App.css';
import Skills from './Skills/Skills';
import Educations from './Educations/Educations';
import SocialsMedia from './SocialsMedia/SocialsMedia';
import MyBio from './MyBio/MyBio';
import AudioAndVideo from './AudioAndVideo/AudioAndVideo';
import Footer from './Footer/Footer';

function App() {

  return (
    <div className='App-header'>

      {/* Audio Background and Video */}
      <AudioAndVideo />
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
  )
}

export default App
