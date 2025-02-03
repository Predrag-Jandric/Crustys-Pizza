import { useDispatch } from "react-redux"
import { deleteItem } from "./cartSlice"
import Button from "../../ui/Button"

function DeleteItem({pizzaId}) {
const dispatch = useDispatch()

function handleDelete(){
    dispatch(deleteItem(pizzaId))
}

    return (
        <div>
            <Button onClick={handleDelete} type="primarySmall">Delete</Button>
        </div>
    )
}

export default DeleteItem
