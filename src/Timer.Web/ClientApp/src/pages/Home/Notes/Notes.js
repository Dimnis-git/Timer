import React, { Component } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import Emoji from '../../../components/Emoji/Emoji';

export class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div className="form">
                <header className="form-title flex justify-between items-center">
                    <h1> <Emoji symbol="📔" />Notas</h1>
                    <button className="duration-300 rounded-3xl hover:bg-blue-300 focus:outline-none"><IoMdAddCircleOutline size={32} /></button>
                </header>
            </div>
        );
    }
}