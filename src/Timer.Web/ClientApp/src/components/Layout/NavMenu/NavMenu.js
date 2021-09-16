import React, { Component } from 'react';
import { FiHelpCircle, FiLogOut } from 'react-icons/fi';
import { BiAlarmAdd } from 'react-icons/bi';
import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom';

import userNotFound from '../../../assets/images/userImage404.png';
import logoBradesco from '../../../assets/images/logoBrad.png';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);
    this.state = {
      showIncludeForm: true
    }
    this.toggleIncludeForm = this.toggleIncludeForm.bind(this)
  }

  toggleIncludeForm() {
    this.setState({
      showIncludeForm: !this.state.showIncludeForm
  })
  }

  render () {
    return (
      <header className="flex justify-between text-white text-4xl bg-gradient-to-r lg:justify-between xl:justify-evenly ">
        <section className="flex items-center">
          <img className="w-24" src={ logoBradesco }/>
          <Link to="/" className="mb-2 text-5xl font-sansLight px-2 flex hover:text-white hover:no-underline"> 
            <p className="font-sansMedium">aoc</p> 
            <p className="px-2">|</p> 
            timer
          </Link>
        </section>
        <section className="flex items-center">
          <div className="mr-4 flex">
            <button onClick={this.toggleIncludeForm}className="hover:text-blue-300 focus:outline-none"> <BiAlarmAdd size={26}/> </button>
            <Link to="/help" title="Ajuda" className="mx-4 hover:text-blue-300"> <FiHelpCircle size={26} /> </Link>
            <Link title="Sair" className="hover:text-blue-300"> <FiLogOut size={26} /> </Link>
          </div>
          <div className="font-sansMedium text-right px-1 text-xl">
            <p>Renan de Oliveira Pereira</p>
            <p>Operador</p>
          </div>
          <div className="m-2 w-16 h-16 overflow-hidden rounded-full">
            <img className="w-20 h-20 inline" src={ userNotFound }/>
          </div>
        </section>
        {
          this.state.showIncludeForm &&
          (
            <div className="flex justify-center items-center absolute z-10 w-full h-full bg-gray-400 bg-opacity-60">
              <form className="w-2/6 h-4/6 bg-white rounded-2xl">
                <header className="text-black p-4 flex justify-between">
                  <h1 className="font-sansLight">Novo temporizador</h1>
                  <button onClick={this.toggleIncludeForm} className="outline-none focus:outline-none" > <MdClose className="focus:outline-none" size={36}/> </button>
                </header>
              </form>
            </div>
          )
        }
      </header>
    );
  }
}
