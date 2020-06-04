import React from "react"

class Name extends React.Component {
        this.state = {
            answer: "Bex"
        }
    }
    
    render() {
        return (
            <div>
                <p>Is your name {this.state.answer}?</p>
            </div>
        )
    }
}

export default App