import './App.css';
import Background from './assets/videos/background.mp4';
import AudioBackground from './assets/audio/01-Genshin-Impact-Main-ThemeGens.mp3';

function App() {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className='App-header'>

      {/* Video Background */}
      <video autoPlay loop playsInline className='Video-background'>
        <source src={Background} type="video/mp4" />
      </video>

      {/* Audio Background */}
      <audio autoPlay loop playsInline className='Video-background'>
        <source src={AudioBackground} type="audio/mp3" />
      </audio>
      <hr />

      {/* My Name */}
      <div className='Text-container'>
        <h1>Hello, I'm Dian aka Rappwalk aka MexL aka madiajijah11 aka GenzoDR</h1>
        <h1><i className="bi bi-quote"></i></h1>
        <p>I'm a full stack developer, web developer & mobile developer.</p>
      </div>
      <br />

      {/* Social Media Links */}
      <div className='Row-container'>
        <div className="row rows-cols-4">
          <div className="col">
            <a href='https://www.facebook.com/nyanyaw.meong' target={"_blank"} type="button" className="btn btn-outline-primary btn-lg text-nowrap"><i className="bi bi-facebook"></i> Facebook</a>
          </div>
          <div className="col">
            <a href='https://www.instagram.com/dian.rhmdni' target={"_blank"} type="button" className="btn btn-outline-danger btn-lg text-nowrap"><i className="bi bi-instagram"></i> Instagram</a>
          </div>
          <div className="col">
            <a href='https://www.linkedin.com/in/dian-rhmdni' target={"_blank"} type="button" className="btn btn-outline-primary btn-lg text-nowrap"><i className="bi bi-linkedin"></i> LinkedIn</a>
          </div>
          <div className="col">
            <a href='https://www.twitter.com/rappwalk' target={"_blank"} type="button" className="btn btn-outline-info btn-lg text-nowrap"><i className="bi bi-twitter"></i> Twitter</a>
          </div>
        </div>
      </div>
      <br />

      {/* Skills */}
      <div className='Skills-container'>
        <h2>Skills</h2>
        <hr />
        <table className="table table-borderless text-white">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Skill</th>
              <th scope="col">Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>HTML</td>
              <td>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>CSS</td>
              <td>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Javascript</td>
              <td>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />

      {/* Education */}
      <div className='Education-container'>
        <h2>Education</h2>
        <hr />
        <table className="table table-borderless text-white">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">School</th>
              <th scope="col">Degree</th>
              <th scope="col">Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Islamic University of Muhammad Arsyad Al Banjari Kalimantan</td>
              <td>Bachelor of Science in Computer Science</td>
              <td>2016</td>
            </tr>
            <tr>
            </tr>
          </tbody>
        </table>
      </div>
      <br />

      {/* Experience */}


      {/* Projects */}


      {/* Contact */}


      {/* Footer */}
      <hr />
      <div className='Footer-container'>
        <p>Copyright © 2020 - {year}</p>
      </div>
    </div>
  )
}

export default App
