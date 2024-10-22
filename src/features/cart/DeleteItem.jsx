import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { deleteItem } from "./cartSlice"

function DeleteItem({pizzaId}) {
const dispatch = useDispatch()

function handleDelete(){
    dispatch(deleteItem(pizzaId))
}

    return (
        <div>
            <Button onClick={handleDelete} type="small">Delete</Button>
        </div>
    )
}

export default DeleteItem
