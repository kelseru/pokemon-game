// key imports
import React from 'react'
import './App.css'
import axios from 'axios'

// components
import GBAon from './img/gba-on.png'
import Spinner from './img/pokeball.png'
import SystemBoot from "./components/SystemBoot.js"

class App extends React.Component {
    state = {
        loading: true,
        pokemon: null
    }
    
    async fetchPokemonAsync() {
        try {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=500");
            this.setState({ pokemon: response.data, loading: false });
        } catch (e) {
            console.log(e);
        }
    };

    componentDidMount() {
        setTimeout(() => {
            this.fetchPokemonAsync()
        }, 2000)}

    render(){
        return(
            <div>
                {this.state.loading && !this.state.pokemon ? (
                    <section className="Loading">
                        <div id="pokeball"><img src={Spinner}alt="Pokeball Spinner" /></div>
                        <p>LOADING<span></span></p>
                    </section>    
                ) : (
                    <section className="consoleOn">
                        <img src={GBAon} alt="GBA" />
                        <SystemBoot />
                    </section>
                )}
            </div>
        );
    }
}

export default App