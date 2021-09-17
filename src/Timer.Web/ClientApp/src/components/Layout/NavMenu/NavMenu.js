import React, { Component } from 'react';
import { FiHelpCircle, FiLogOut } from 'react-icons/fi';
import { BiAlarmAdd } from 'react-icons/bi';
import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { TimeInput } from '../../../hooks/TimeInput'

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
            <div className="text-black flex justify-center items-center absolute z-10 w-full h-full bg-gray-400 bg-opacity-60">
              <section className=" w-3/12 h-4/6 bg-white rounded-2xl">
                <header className=" p-4 flex justify-between">
                  <h1 className="font-sansLight">Temporizadores</h1>
                  <button onClick={this.toggleIncludeForm} className="outline-none focus:outline-none" > <MdClose className="focus:outline-none" size={36}/> </button>
                </header>
                <form className="relative mx-4 px-1 items-center ">
                  <label className="text-lg font-sansSemiBold p-1 mb-1">Nome do Temporizador</label>
                  <input className="border border-gray-300 text-lg block rounded-lg px-2 py-1 w-full mb-2 font-sansMedium" type="text" placeholder="Nome"></input>
                  <label className="text-lg font-sansSemiBold px-1 mb-0 block">Tempo</label>
                  <TimeInput className="border border-gray-300 text-lg rounded-lg px-2 py-1 w-3/5 font-sansMedium"/>
                  <input className="font-sansBold text-lg ml-4 w-4/12 px-2 py-1 rounded-lg bg-blue-500 text-white" type="submit" value="Adicionar"/>
                </form>
                <hr className="my-4"/>
                <main>

                </main>
              </section>
            </div>
          )
        }
      </header>
    );
  }
}
