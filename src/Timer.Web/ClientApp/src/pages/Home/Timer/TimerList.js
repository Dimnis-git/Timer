import React, { Component } from 'react';
import Emoji from '../../../components/Emoji/Emoji';
import { MdTimer } from 'react-icons/md';

export class TimerList extends Component {
    
    constructor(props) {
        super(props);
        this.state = { timers: [] }
    }

    componentDidMount() {
        this.loadTimersList();
    }

    async loadTimersList() {
        const response = await fetch('timer');
        const data = await response.json();
        // this.setState({
        //     timers: data
        // })
    }

    render() { 
        return (  
            <div className="form row-start-1 row-end-3">
                <header className="form-title flex">
                    <h1 className="pl-1"> <Emoji symbol="⏰" />Temporizadores</h1>
                </header>
                <main className="my-2 py-1">
                    {/* {
                        this.state.timers.map((timer) =>
                            <section key={timer.id} className="py-2 my-3 h-1/6 flex items-center rounded-xl pl-1 cursor-pointer blur-xl hover:bg-gray-300 hover:bg-opacity-40 duration-100">
                                <div className="items-center flex">
                                    <MdTimer className="inline-block" size={32}/>
                                    <div className="inline-block">
                                        <h1 className="font-bold px-2 text-lg">{timer.name}</h1>
                                        <h2 className="font-sansMedium px-2 text-lg"> <p className="font-semibold inline-block">Tempo:</p>  {timer.time}</h2>
                                    </div>
                                </div>
                            </section>
                        )
                    } */}
                </main>
            </div>
        );
    }
}