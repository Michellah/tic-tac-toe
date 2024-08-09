import React, { useState } from 'react';
import '../styles/square.css';

export default function Square({value, onSquareClick}) {
    return (
        <button className='square' onClick={onSquareClick} >
            {value}
        </button>
    )
}
