import "./button.css";

const Button = (props) => {
  return (
    <div>
      <a className={`button ${props.color}`} href={props.link} target="_blank">
        {props.text}
      </a>
    </div>
  );
};

export default Button;
