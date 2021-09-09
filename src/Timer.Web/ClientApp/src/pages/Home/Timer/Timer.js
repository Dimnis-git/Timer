import React, { Component } from 'react';
import Emoji from '../../../components/Emoji/Emoji';
import { BsStopFill } from 'react-icons/bs';
import { VscDebugRestart } from 'react-icons/vsc';

export class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="form flex flex-col">
                <header className="form-title">
                    <h1> <Emoji symbol="⏰" />Timer</h1>
                </header>
                <main className="flex flex-grow justify-center">
                    
                </main>
                <footer className="flex justify-evenly font-sansMedium">
                    <button className="w-1/3 bg-yellow-400 flex justify-center items-center rounded-lg border-none hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500"> <BsStopFill size={32} className="px-1"/> Pausar</button>
                    <button className="w-1/3 bg-gray-300 flex justify-center items-center rounded-lg hover:bg-gray-400 text focus:outline-none focus:bg-gray-400"> <VscDebugRestart size={28} className="px-1"/> Reiniciar</button>
                </footer>
            </div>
        );
    }
}