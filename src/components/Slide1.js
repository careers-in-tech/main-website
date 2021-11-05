import "./Slide1.css";
import Button from "./Button";

const Slide1 = () => {
  return (
    <header className="App-header hero">
      <hr />
      <h1 className="headerTitle">Careers in Tech and Innovation</h1>
      <p className="headerText">Helping you find your future in tech</p>
      <div className="buttonGroup">
        <Button
          text="Become a Member"
          link="https://docs.google.com/forms/d/18mJXKqK5TPIoRmFZhop529CF8f865N_o3c2Bsw2TsTA"
          color="turquoise"
        />
        <Button
          text="Become an Advisor"
          link="https://docs.google.com/forms/d/1Tqj4OvfrIGQDQYOT4bv5lShbldFWM8TAyMc-MuNdPUQ"
          color="gray"
        />
      </div>
    </header>
  );
};

export default Slide1;
