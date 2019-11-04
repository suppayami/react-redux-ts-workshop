import React from 'react'

interface CounterClassProps {
    text: string
}

interface CounterClassState {
    counter: number
}

export class CounterClass extends React.Component<CounterClassProps, CounterClassState> {
    public state: CounterClassState = {
        counter: 0
    }

    public increaseCounter = () => {
        this.setState((prev) => ({
            counter: prev.counter + 1
        }))
    }

    public render() {
        return <div>
            <p>{this.props.text}: {this.state.counter}</p>
            <button onClick={this.increaseCounter}>Increase Counter</button>
        </div>
    }
}