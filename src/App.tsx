import React from 'react'
import { Provider } from 'react-redux'
import './App.css'

import { CounterClassWithFixedText, CounterClassWithTitle } from './components/CounterClass'
import { CounterHook } from './components/CounterHook'
import { CounterRedux } from './components/CounterRedux'
import { CustomImage } from './components/CustomImage'
import logo from './logo.svg'
import { store } from './store'

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <CustomImage source={logo} />
                    <CounterClassWithFixedText />
                    <CounterClassWithTitle text="Current class with title counter" title="Counter" />
                    <CounterHook text="Current hook counter" />
                    <CounterRedux text="Current redux counter" />
                </header>
            </div>
        </Provider>
    )
}

export default App
