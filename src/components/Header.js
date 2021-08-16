import "./header.css";

const Header = () => {
  return (
    <header className="App-header hero">
      <hr />
      <h1 className="headerTitle">Careers in Tech and Innovation</h1>
      <p className="headerText">Helping you find your future in tech</p>
      <div>
        <button className="member">Button Component</button>
        <button className="advisor">Button Component</button>
      </div>
    </header>
  );
};

export default Header;
