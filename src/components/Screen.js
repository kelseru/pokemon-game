import React from 'react'
// import GBAon from '../img/gba-on.png';
// import GBAoff from '../img/gba-off.png'

import './Screen.css'

class Screen extends React.Component {
    state = {
        nameofstate: true
    }


    componentDidMount = async()=> {
        console.log('rendering screen.js')
        await fetch("https://pokeapi.co/api/v2/pokemon/houndoom")
            .then(response => response.json())
            .then(data => console.log(data))
    }

    render() {
        console.log('rendering screen.js RENDER')
        return (
            <div>
                {/* <img src={GBAon} alt="GBA switched on" />      */}
            </div>
        )
    }
}

export default Screen