import React, { useState } from 'react';

const TimerInclude = () => {
    const formState = { name: '', time: '' }
    const [timer, setTimer] = useState(formState)

    const handleChange = (event) => {
        const { name, value } = event.target
        console.log(value)

        if (name === "time") {
            setTimer({ ...timer, [name]: value});
        } else {
            setTimer({ ...timer, [name]: value});
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        saveTimer();
    }

    const saveTimer = () => {
        fetch('/api/Timer/Post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(timer)
        });
    };

    const red = timer.name ? 'form-input w-full mb-3 shadow-sm border-2 border-red-700' : 'form-input w-full mb-3 shadow-sm'
    
    return (
        <>
            <form className="relative mx-4 px-1 items-center" onSubmit={handleSubmit}>
                <label className="label-input">Nome do Temporizador</label>
                <input 
                    type="text"
                    className={`form-input w-full mb-3 shadow-sm focus:outline-none ${timer.name || 'border-red-700'}`}
                    placeholder="Nome" 
                    name="name"
                    value={timer.name}
                    onChange={handleChange} />
                <label className="label-input block">Tempo</label>
                <input 
                    type="text"
                    className={`form-input w-3/5 mb-3 shadow-sm focus:outline-none ${timer.time || 'border-red-700'}`}
                    placeholder="00:00" 
                    name="time" 
                    value={timer.time}
                    onChange={handleChange} />
                <input className="button-primary ml-4 w-4/12 bg-blue-500 hover:bg-blue-600" type="submit" value="Adicionar"/>
            </form>
        </>
    )
}

export default TimerInclude;