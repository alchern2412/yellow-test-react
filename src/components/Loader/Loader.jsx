import React from 'react'
import spinner from '../../img/loader.gif'
import './Loader.scss'

export const Loader = () => (
    <img
        className="loader"
        src={ spinner }
        alt='Loading...'
    />
)

