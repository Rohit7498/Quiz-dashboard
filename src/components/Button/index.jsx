import './style.css';


function Button(props) {
  
  const {
    content = "Button",
    variant = "default",
    onClick,
  } = props;
  
  return (
    <div className="buttonContainer" onClick={onClick}>
      <div className="button">
        <div className="typography">{content}</div>
      </div>
    </div>
  );
}

export default Button;
