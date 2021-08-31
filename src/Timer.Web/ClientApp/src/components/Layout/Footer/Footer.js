import React, { Component } from 'react';

export class Footer extends Component {

    constructor (props) {
        super(props);
        
    }

    render() {
        return (
            <foooter>
                Desenvolvido por AOC - PSPB © { new Date().getFullYear() } 
            </foooter>
        )
    }
}