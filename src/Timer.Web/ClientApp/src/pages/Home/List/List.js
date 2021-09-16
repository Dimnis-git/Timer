import React, { Component } from 'react';
import Emoji from '../../../components/Emoji/Emoji';

export class List extends Component {
    
    constructor(props) {
        super(props);
        this.state = {  

        }
    }

    render() { 
        return (  
            <div className="form row-start-1 row-end-3">
                <header className="form-title flex justify-between">
                    <h1> <Emoji symbol="⏰" />Temporizadores</h1>
                </header>
                <main>

                </main>
            </div>
        );
    }
}