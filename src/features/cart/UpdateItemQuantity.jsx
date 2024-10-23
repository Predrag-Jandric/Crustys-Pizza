import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice"

function UpdateItemQuantity({pizzaId, currentQuantity}) {
const dispatch = useDispatch()


    function handleDecrease(){
    dispatch(decreaseItemQuantity(pizzaId))
    }

    function handleIncrease(){
        dispatch(increaseItemQuantity(pizzaId))
    }

    return (
        <div className="flex gap-2 items-center md:gap-3">
            <Button type="round" onClick={handleDecrease}>-</Button>
            <span className="text-xs font-medium">{currentQuantity}</span>
            <Button type="round" onClick={handleIncrease}>+</Button>

        </div>
    )
}

export default UpdateItemQuantity
