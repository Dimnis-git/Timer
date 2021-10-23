import React, { useState } from 'react';
import { TimerEdit } from '../../../pages/Home/Timer/TimerEdit';

// React Icons
import { FiHelpCircle, FiLogOut } from 'react-icons/fi';
import { BiAlarmAdd } from 'react-icons/bi';
import { Link } from 'react-router-dom';

// Images
import userNotFound from '../../../assets/images/userImage404.png';
import logoBradesco from '../../../assets/images/logoBrad.png';

export const NavMenu = () => {
  const [toggle, setToggle] = useState(false);

  return(
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
            <button onClick={() => setToggle(!toggle)} className="hover:text-blue-300 focus:outline-none"> 
              <BiAlarmAdd size={26}/> 
            </button>
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
      { toggle ? <TimerEdit hide={setToggle}/>:  null}
    </header>
  )
}




// export class NavMenu extends Component {
//   constructor (props) {
//     super(props);
//     this.state = { toggle: true }
//   }

//   toggleTimerEdit() {
//     this.setState({
//       toggle:!this.state.toggle
//     })
//   }

//   render () {
//     return (
      
//         {
//           this.state.toggle && (
//             <TimerEdit/>
//           )
//         }

//     );
//   }
// }
