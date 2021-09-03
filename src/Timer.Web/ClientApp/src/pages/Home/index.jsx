import React, { Component } from 'react';
import { List } from './List/List';
import { Timer } from './Timer/Timer';
import { Notes } from './Notes/Notes';


export class Home extends Component {

    render() {
        return (
            <div className="grid grid-cols-2 gap-4 xl:w-1/2 lg:w-full sm:w-full ">
                <List />
                <Timer />
                <Notes />
            </div>
        );
    }
}