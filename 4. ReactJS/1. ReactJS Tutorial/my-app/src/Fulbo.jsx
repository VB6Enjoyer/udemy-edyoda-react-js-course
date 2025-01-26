import React, { useState } from 'react';
import classes from "./Fulbo.module.css"

// Imported CSS classes
// Usage of HTML properties
export const Boca = (props) => {
    return (
        <div className={classes.boca}>
            <h3>AGUANTE BOCA</h3>
            <h4>{props.description}</h4>
            <p>Bokita el más grande 0 descensos</p>
        </div>
    )
}

// Passing data from an input to an element
export const Selesion = () => {
    const [value, setValue] = useState("");

    return (
        <div>
            <Messi value={value} />
            <Jugador setValue={setValue} />
        </div>
    )
}

function Jugador({ setValue }) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        setValue(input); // Update shared state
        setInput(""); // Clear input field
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Escribí un crá" />
            <button type="submit">Este es crá</button>
        </form>
    )
}

function Messi({ value }) {
    return (
        <div className={classes.selesion}>
            <h3>AGUANTE LA SELESION</h3>
            <h4>MESSI MESSI MESSI MESSIIIIIII DALE MESSI TODAVIA</h4>
            <h5>Y aguante {value} también</h5>
        </div>
    )
}

// Passing functions as props. You can have various counters using the same format
export const Copas = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div>
            <h1>Copas: {count}</h1>
            <AñadirCopas onIncrement={increment} />
            <Pechear onDecrement={decrement} />
        </div>
    );
}

function AñadirCopas({ onIncrement }) {
    return (
        <button onClick={onIncrement} className={classes.copas}>
            Coronarse de gloria
        </button>
    );
}

function Pechear({ onDecrement }) {
    return (
        <button onClick={onDecrement} className={classes.copas}>
            Pechear otra final
        </button>
    );
}


