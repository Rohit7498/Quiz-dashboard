import './style.css';

function Input({ placeholder, value, onChange, onKeyDown, }) {  
  
  return (
    <input
      type="text"
      placeholder={placeholder || "Type here..."}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

export default Input;
