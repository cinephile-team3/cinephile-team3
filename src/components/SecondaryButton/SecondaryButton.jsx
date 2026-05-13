import "./SecondaryButton.scss";

const SecondaryButton = ({label}) => {
  return (
    <button className="secondary__button">{label}</button>
  )
};

export default SecondaryButton;