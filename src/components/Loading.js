import React from 'react'
import Spinner from '../img/pokeball.png'
import './styling/Loading.css'
import { Redirect } from "react-router-dom";
import { ReactComponent } from '*.svg';

class Loading extends React.Component {
   render() {


      return (
         <section className="loading">
            <img src={Spinner}alt="Spinner" />
            <p>Loading<span></span></p>
         </section>
      )   
   }  
}

// loaded = false then stay on loading, once true then redirect to gamestart component

export default Loading