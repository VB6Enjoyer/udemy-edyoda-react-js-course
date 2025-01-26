import React, { Component } from 'react'
import classes from "./Rocanrol.module.css"

class Rocanrol extends Component {
    state = {
        mostrar: true,
        hellYeah: 0
    }

    bandsArr = [
        {
            id: 10,
            name: "Eisidisi",
            genre: "Rocanrol"
        },
        {
            id: 11,
            name: "Metalica",
            genre: "Metal pesado"
        },
        {
            id: 12,
            name: "Lo ramone",
            genre: "Pank"
        }
    ]

    bandsArr = this.bandsArr.map((item, pos) => {
        return (
            <p key={pos} title={item.name} id={item.id}>{item.name} tocan {item.genre}</p>
        )
    })

    onHideBtnClick = () => {
        let updateState = !this.state.mostrar
        this.setState({ mostrar: updateState })
    }

    hellYeah = () => {
        this.setState((prevState, prevProp) => {
            return {
                hellYeah: prevState.hellYeah + 1
            }
        })
    }

    render() {
        return (
            <div className={classes.rocanrolContainer}>
                <button onClick={this.onHideBtnClick}>{this.state.mostrar ? 'Muestrar' : 'Escuender'}</button>
                <br />
                {this.state.mostrar ? this.bandsArr : null}

                <p>Hell yeah count: {this.state.hellYeah}</p>
                <button onClick={this.hellYeah}>Hell Yeah!</button>
            </div>
        )
    }
}

export default Rocanrol;