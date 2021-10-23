import React, { useState, useEffect} from 'react'
import TimerInclude from './TimerInclude'

// React Icons
import { BiEditAlt, BiTrash } from 'react-icons/bi';
import { MdClose } from 'react-icons/md'

export const TimerEdit = (props) => {
  const [timers, setTimers] = useState([])
  const [show, setShow] = useState(true)
  const {hide} = props;

  // OnComponentMount
  useEffect(() => {
      loadTimers();
  }, [])

  async function loadTimers() {
      const response = await fetch('/api/Timer/Get');
      const data = await response.json();
      setTimers(data);
  }

  return (
    <>
          <div className="text-black flex justify-center items-center absolute z-10 w-full h-full bg-gray-400 bg-opacity-60">
            <section className="relative 2xl:w-3/12 h-4/6 bg-white rounded-2xl md:w-6/12">
              <header className="m-3 px-1 flex justify-between">
                <h1 className="font-sansLight">Temporizadores</h1>
                <button onClick={() => hide(false)} className="outline-none focus:outline-none" > <MdClose className="focus:outline-none" size={36}/> </button>
              </header>
              <TimerInclude />
              <hr className="my-4"/>
              <main className="text-base mx-4 px-1 overflow-auto h-80 no-scrollbar">
                {
                  timers.map((timer) => 
                    <div className="flex justify-between mb-4">
                      <section key={timer.id}>
                        <p className="font-sansSemiBold">{timer.name}</p>
                        <p className="font-sansRegular"> <p className="inline-block font-sansMedium">Tempo:</p> {timer.time}</p>
                      </section>
                      <section className="self-center">
                        <button className="bg-yellow-400 p-1.5 rounded-lg"> <BiEditAlt size={26}/> </button>
                        <button className="bg-red-600 p-1.5 rounded-lg ml-3"> <BiTrash size={26}/> </button>
                      </section>
                    </div>
                  )
                }
              </main>
            </section>
          </div>
    </>
  )
}


