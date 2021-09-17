import React, { Component } from 'react';
import Emoji from '../../../components/Emoji/Emoji';

export class List extends Component {
    
    constructor(props) {
        super(props);
        this.state = {  
            timers: []
        }
    }

    componentDidMount() {
        this.loadTimersList();
    }

    async loadTimersList() {
        const response = await fetch('timer');
        const data = await response.json();
        this.setState({
            timers: data
        })
    }

    render() { 
        return (  
            <div className="form row-start-1 row-end-3">
                <header className="form-title flex justify-between">
                    <h1> <Emoji symbol="⏰" />Temporizadores</h1>
                </header>
                <main>
                    <p>Teste</p>
                    {
                        this.state.timers.map(timer => (
                            <p>{timer.data}</p>
                        ))
                    }



                    {/* <table>
                        <thead>
                            <th>Nome</th>
                            <th>Tempo</th>
                        </thead>
                        <tbody>
                            <td>{timers.name}</td>
                            <td></td>
                        </tbody>
                    </table> */}
                    {/* <p>{this.state.timers.name}</p> */}
                </main>
            </div>
        );
    }
}