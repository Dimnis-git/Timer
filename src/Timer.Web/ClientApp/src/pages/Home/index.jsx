import React, { Component } from 'react';
import { Timer } from './Timer/Timer';
import { Notes } from './Notes/Notes';
import { TimerList } from './Timer/TimerList'


export class Home extends Component {

    render() {
        return (
            <div className="grid grid-cols-3 gap-4 xl:w-1/2 lg:w-full sm:w-full ">
                <TimerList />
                <Timer />
                <Notes />
            </div>
        );
    }
}