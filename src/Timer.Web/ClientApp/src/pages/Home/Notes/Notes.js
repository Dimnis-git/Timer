import React, { useState } from 'react';
import Emoji from '../../../components/Emoji/Emoji';

import { IoMdAddCircleOutline, IoMdCloseCircleOutline } from 'react-icons/io';
import { NotesEdit } from './NotesEdit';

export const Notes = () => {
    const [toggle, setToggle] = useState(true);

    return (
        <div className="form col-span-2 row-span-2">
            <header className="form-title flex justify-between items-center">
                <h1> <Emoji symbol="📔" />Notas</h1>
                <button onClick={() =>setToggle(!toggle)} className="duration-300 rounded-3xl hover:bg-blue-300 focus:outline-none">
                    { toggle ? <IoMdAddCircleOutline size={32} /> : <IoMdCloseCircleOutline size={32} /> }
                </button>
            </header>
            <main>
                { toggle ? <NotesList show={setToggle}/> : <NotesEdit cancel={setToggle}/> }
            </main>
        </div> 
    )
}



const NotesList = (props) => {
    const { show } = props;
    
    return(
        <>

        </>
    )
}