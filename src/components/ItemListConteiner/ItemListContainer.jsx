import clases from "./ItemListContainer.module.css"

const ItemListContainer = ({greeting}) => {
    return(
        <div>
            <h1 className={clases.bienvenidos}>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer