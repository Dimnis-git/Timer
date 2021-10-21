import React, { useState, useEffect } from 'react'
import { BsClockHistory } from 'react-icons/bs';

export const TimerList = (props) => {
    const [timer, setTimer] = useState([])
    const { updateTime } = props;

    // On Component Mount
    useEffect(() => {
        loadTimers()
    }, [])

    async function loadTimers() {
        const response = await fetch('/api/Timer/Get');
        const data = await response.json();
        setTimer(data);
    }

    return (
        <ul>
            { timer.map((timer, index) => 
                <li key={index} onClick={ () => updateTime(timer.time)}> 
                    <div className="font-sansRegular flex items-center p-1 mb-3 duration-75 hover:bg-gray-300 hover:bg-opacity-50 rounded-xl cursor-pointer">
                        <BsClockHistory size={32} />
                        <div className="pl-2 text-lg">
                            <p className="inline-block">{timer.name}</p>
                            <p> { new Date(timer.time * 1000).toISOString().substr(11, 8) } </p>
                        </div>
                    </div>
                </li> ) 
            }
        </ul>
    )
}