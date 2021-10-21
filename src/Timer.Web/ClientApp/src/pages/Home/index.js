import React, { useState } from 'react';
import Emoji from '../../components/Emoji/Emoji';
import { BsStopFill } from 'react-icons/bs';
import { VscDebugRestart } from 'react-icons/vsc';

import { Notes } from './Notes/Notes';
import { TimerList } from './Timer/TimerList';

export const Home = () => {
    const [time, setTime] = useState("")
    
    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-4 xl:w-1/2 lg:w-full sm:w-full ">
            <div className="form row-start-1 row-end-4">
                <header className="form-title flex mb-3">
                    <h1 className="pl-1"> <Emoji symbol="⏰" />Temporizadores</h1>
                </header>
                <main className="my-2 py-1">
                    <TimerList updateTime={setTime} />
                </main>
            </div>
            <div className="form flex flex-col col-span-2 row-start-1">
                <main className="flex flex-grow justify-center">
                    <h1 className="self-center text-8xl font-sansLight"> { new Date(time * 1000).toISOString().substr(11, 8) }</h1>
                </main>
                <footer className="flex justify-evenly font-sansMedium">
                    <button className="button-timer bg-green-600"> <BsStopFill size={32} className="px-1"/> Iniciar</button>
                    <button className="button-timer bg-yellow-500 "> <VscDebugRestart size={28} className="px-1"/> Reiniciar</button>
                </footer>
            </div>
            <Notes />
        </div>
    )
}