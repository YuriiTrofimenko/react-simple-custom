import React from 'react'

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
  render() {
        const counterView = <span>{this.state.count}</span>
        console.log('About is rendering...')
        return (
            <>
                <div>
                    <h1>About</h1>
                    <button onClick={() => {this.setState({count: this.state.count + 1})}}>Add</button>
                    {counterView}
                </div>
                <div>
                    {this.props.messagePart1}
                </div>
                <div>
                    {this.props.messagePart2}
                </div>
            </>
        )
    }
}

export default About;
