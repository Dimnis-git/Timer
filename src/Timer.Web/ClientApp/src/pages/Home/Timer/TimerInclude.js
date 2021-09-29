import React, { useState } from 'react';

const TimerInclude = () => {
    const formState = { id: null, name: '', time: '' }
    const [timer, setTimer] = useState(formState)

    const handleChange = (event) => {
        const { name, value } = event.target
        setTimer({ ...timer, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefautl();
        saveTimer();
    }

    let data = {
        name: timer.name,
        time: timer.time
    }

    const saveTimer = () => {
        fetch('/api/Timer/IncludeTimer', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(json => console.log(json))
    };
    
    return (
        <>
            <form className="relative mx-4 px-1 items-center" onSubmit={handleSubmit}>
                <label className="label-input">Nome do Temporizador</label>
                <input 
                    type="text"
                    className="form-input w-full mb-3 shadow-sm" 
                    placeholder="Nome" 
                    name="name"
                    value={timer.name}
                    onChange={handleChange} />
                <label className="label-input block">Tempo</label>
                <input 
                    type="text"
                    className="form-input w-3/5 shadow-sm"  
                    placeholder="00:00" 
                    name="time"
                    value={timer.time}
                    onChange={handleChange} />
                <input className="button-primary ml-4 w-4/12" type="submit" value="Adicionar"/>
            </form>
        </>
    )
}

export default TimerInclude;