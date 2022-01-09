import './style.css';


function Button(props) {
  
  const {
    content = "Button",
    variant = "default",
    onClick,
  } = props;
  
  return (
    <div className="button" onClick={onClick}>
      <div className="buttonTypography">{content}</div>
    </div>
  );
}

export default Button;
