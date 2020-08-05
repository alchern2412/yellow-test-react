import React from 'react'
import spinner from '../../img/loader.gif'

export const Loader = () => (
    <img
        src={ spinner }
        style={ { width: '200px', margin: '0 auto', display: 'block' } }
        alt='Loading...'
    />
)

