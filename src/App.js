import './App.css';

function App() {
  return (
    <div>
          <nav>
        <div class="navItem">
            <img class="navLogo" height="30px" src="./resources/logo.svg" alt=""/>
            <p class="brand">Smart CV</p>
        </div>
        <div class="navItem">
            <button>Get Started</button>
        </div>
    </nav>

        <section class="section-one">
      <div>
        <div>
          <div>
            <p class="head-light text-center">
              Increase Chance of getting <br />
              selected with <span>Smart CV</span>
            </p>
            <p class="desc-light text-center">
              Let AI Do Your Resume Work - You Prep Your Interview
            </p>
            <div>
              <button>Go to playground</button>
            </div>
          </div>
          <img class="resume-temp" src="./resources/resume.svg" alt="" />
        </div>
      </div>
    </section>

    <hr/>

    <section class="section-one">
      <div>
      </div>
    </section>
    </div>
  );
}

export default App;
