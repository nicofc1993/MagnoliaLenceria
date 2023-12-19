import clases from "./Button.module.css"

const Button = (props) => {
    return <button className={clases.botones} onClick={props.hacerClick}>{props.label}</button>
}

export default Button