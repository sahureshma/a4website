import Styles from "./Servicebutton.module.css";

function Button({ text }) {
  return <button className={Styles.servicebtn}>{text}</button>;
}

export default Button;