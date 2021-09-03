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
                <footer className="flex justify-evenly font-sansBold">
                    <button className="w-1/3 text-white bg-yellow-400 flex justify-center items-center rounded-lg border-none "> <BsStopFill size={32} className="px-1"/> Pausar</button>
                    <button className="w-1/3 text-white bg-gray-500 flex justify-center items-center rounded-lg"> <VscDebugRestart size={28} className="px-1"/> Reiniciar</button>
                </footer>
            </div>
        );
    }
}