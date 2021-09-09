import React, { Component } from 'react';

import Link237 from '../../assets/images/link237.png';

export class Help extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="flex text-white items-center justify-center">
                <img className="w-80 m-10" src={ Link237 } />
                <section className="w-96 text-center">
                    <h1 className="font-sansSemiBold text-3xl">Olá eu sou o Link237, estou aqui para ajudar</h1>
                    <br/>
                    <h2 className="font-sansLight text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac fringilla felis. Integer et nisl id dui dictum malesuada nec a quam. Nulla nisi justo, faucibus id diam a, mattis dignissim turpis. Donec auctor a quam maximus volutpat. Aenean hendrerit, dui eu vestibulum malesuada, ligula nibh blandit lacus, id faucibus odio purus in lorem.</h2>
                </section>
            </div>
        );
    }
}