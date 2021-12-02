import React, { useState } from 'react';

import { IoIosAdd } from 'react-icons/io';
import { TiCancel } from 'react-icons/ti'

export const NotesEdit = (props) => {
    const formState = { title: '', annotation: ''}
    const [note, setNote] = useState(formState)
    const { cancel } = props;

    const dbName = "myNoteDb";
    const storeName = "notes"
    let db;

    const handleChange = (event) => {
        const { name, value} = event.target;
        setNote({...note, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        saveNote();
    }

    const saveNote = (event) =>  {
        const transaction = db.transaction([storeName], "readwrite")
    }

    const createDB = () => {
        if (!window.indexedDB) {
            console.log("The Browser dont support IndexedDB");
        } else {
            const request = window.indexedDB.open(dbName, 1);

            request.onupgradeneeded = (event) => {
                let db = event.target.result;

                let objectStore = db.createObjectStore(storeName, {
                    keyPath: 'id',
                    autoIncrement: true
                });

                objectStore.createIndex("userCod", "userCod", { 
                    unique: false
                });
            }
        }
    }

    return(
        <form>
            <input 
            value={note.title}
            onChange={handleChange}
            name="title"
            type="text" 
            placeholder="Título da Nota" 
            className="block mt-1 p-2 bg-transparent border-b border-black font-sansSemiBold text-xl text-center w-full placeholder-black placeholder-opacity-40 focus:outline-none "
            />
            <textarea
            value={note.annotation}
            onChange={handleChange}
            name="annotation"
            rows="12"
            placeholder="Faça aqui suas anotações..."
            className="resize-none font-sansRegular p-2 rounded-2xl w-full my-3.5 note-input text-black placeholder-gray-800 text-lg focus:outline-none" 
            />
            <footer className="flex justify-evenly pt-1">
                <button onClick={() => cancel(true)} className="button-timer bg-red-500 hover:bg-red-600">
                    <TiCancel size={28} />Cancelar
                </button>
                <button onSubmit={handleSubmit} className="button-timer bg-blue-500 hover:bg-blue-600">
                    <IoIosAdd size={28} />Adicionar
                </button>
            </footer>
        </form>
    )
}