//App.js is like a table of contents
import React from "react"

import Loading from "./components/Loading"
// import GameStart from "./components/GameStart"
// import GameMenu from "./components/GameMenu"

class App extends React.Component {
    render() {
        return(
            <div>
                <Loading />
            </div>
        )
    }   
}

export default App;