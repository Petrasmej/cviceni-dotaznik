import { Icon } from '../Icon/index';
import './style.css';

export const Option = ({ type, text, onSelected }) => {
  const handleClick = () => {
    console.log(text);
    onSelected(type);
  };

  return (
    <div className="option" onClick={handleClick}>
      <Icon type={type} />
      <div>{text}</div>
    </div>
  );
};
