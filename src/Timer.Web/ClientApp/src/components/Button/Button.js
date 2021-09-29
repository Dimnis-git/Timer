import React from 'react';

 export const Button = (props) => {

    return (
        <input 
        type="submit"
        value={props.name}
        className={"font-sansBold text-lg ml-4 w-4/12 px-2 py-1 rounded-lg" + this.props.className}
        />
    )
}