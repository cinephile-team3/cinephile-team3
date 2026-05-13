import "./PrimaryButton.scss";

const PrimaryButton = ({ label }) => {
  return (
    <button className="primary__button">{label}</button>
  )
};

export default PrimaryButton;