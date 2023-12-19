import clases from "./NavBar.module.css"
import Button from "../Button/Button.jsx"
import CartWidget from "../CartWidget/CartWidget.jsx"

const NavBar = () => {
    return (
        <nav>
            <h1 className={clases.titulo}>Tienda Magnolia</h1>
            <CartWidget/>
            <section>
                <Button label={"Inicio"} hacerClick ={() => console.log("Inicio")}/>
                <Button label={"Ropa mujer"} hacerClick ={() => console.log("Ropa mujer")}/>
                <Button label={"Ropa hombre"} hacerClick ={() => console.log("Ropa hombre")}/>
                <Button label={"Ropa niños/as"} hacerClick ={() => console.log("Ropa niños/as")}/>
                <Button label={"Contacto"} hacerClick ={() => console.log("Contacto")}/>
            </section>
        </nav>
    )
}
export default NavBar