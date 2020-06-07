//App.js is like a table of contents
import React from 'react'
import Loading from './components/Loading.js'
// import GameStart from './components/GameStart.js'
import GBA from './components/GBA.js'


// will mount this component for 2000ms before if statement checks state as false, changing to gba.js component
class App extends React.Component {
    state = {
        isLoading: true
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 2000)
    }
    
    
    render() {
        return(
            <div>
                {this.state.isLoading ? <Loading /> : <GBA />}
            </div>
        )
    }   
}

export default App;