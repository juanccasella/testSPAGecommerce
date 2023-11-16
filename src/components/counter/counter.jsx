import { Button } from "antd"

const Counter = () => {
    const [counter, setCounter] = useState (1)
    const stock =20
    const suma = () => {
        counter < stock && setCounter(counter + 1)
    }

    const resta = () => {
        counter > 1 && setCounter(counter - 1)
    }

    return(
        <div>
            <Button onClick={resta}>-</Button>
            <p>{counter}</p>
            <Button onClick={suma}>+</Button>
        </div>
    )
}

export default Counter