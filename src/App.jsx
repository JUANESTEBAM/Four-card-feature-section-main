import "./index.css";
import "./App.css";
import img1 from "./assets/icon-supervisor.svg";
import img2 from "./assets/icon-team-builder.svg";
import img3 from "./assets/icon-karma.svg";
import img4 from "./assets/icon-calculator.svg";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div>
        <h1 className="first-title"> Reliable, efficient delivery</h1>
        <h1 className="second-title"> Powered by Technology</h1>
        <p className="header-text">
          Our Artificial Intelligence powered tools use millions of project data
          <br />
          points to ensure that your project is successful
        </p>
      </div>
      <div className="container-cards">
        <Card
          title="Supervisor"
          text=" Monitors activity to identify project roadblocks"
          img={img1}
          borderColor="hsl(180, 62%, 55%)"
        />
        <div className="middle-cards">
          <Card
            title="Team Builder"
            text="Scans our talent network to create the optimal team for your
        project"
            img={img2}
            borderColor="hsl(0, 78%, 62%)"
          />
          <Card
            title="Karma"
            text=" Regularly evaluates our talent to ensure quality"
            img={img3}
            borderColor="hsl(34, 97%, 64%)"
          />
        </div>

        <Card
          title="Calculator"
          text=" Uses data from past projects to provide better delivery estimates"
          img={img4}
          borderColor="hsl(212, 86%, 64%)"
        />
      </div>
    </>
  );
}

export default App;
