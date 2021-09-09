import React, { Component } from 'react';

export class Footer extends Component {

    constructor (props) {
        super(props);
        
    }

    render() {
        return (
            <foooter className="w-full text-center text-white p-2">
                Desenvolvido por 
                <a href="https://aplicativos.dcd.net.br/SSOL_Net" target="_blank"> AOC - PSPB © </a> 
                { new Date().getFullYear() } 
            </foooter>
        )
    }
}