import React, { Component } from 'react';
import { FiHelpCircle, FiLogOut} from 'react-icons/fi';
// import { Link } from 'react-router-dom';

import userNotFound from '../../../assets/images/userImage404.png';
import logoBradesco from '../../../assets/images/logoBrad.png';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <header className="flex justify-between text-white text-4xl bg-gradient-to-r lg:justify-evenly">
        <section className="flex items-center">
          <img className="w-24" src={ logoBradesco }/>
          <h1 className="mb-2 text-5xl font-sansLight px-2 flex"> 
            <p className="font-sansMedium">aoc</p> 
            <p className="px-2">|</p> 
            timer
          </h1>
        </section>
        <section className="flex items-center">
          <div className="mr-4">
            <button title="Ajuda"> <FiHelpCircle size={26} className="mx-4"/> </button>
            <button title="Sair"> <FiLogOut size={26} /> </button>
          </div>
          <div className="font-sansMedium text-right px-1 text-xl">
            <p>Renan de Oliveira Pereira</p>
            <p>Operador</p>
          </div>
          <div className="m-2 w-16 h-16 overflow-hidden rounded-full">
            <img className="w-20 h-20 inline" src={ userNotFound }/>
          </div>
        </section>
      </header>
    );
  }
}
