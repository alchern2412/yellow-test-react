import React from 'react'
import PropTypes from 'prop-types'
import JogForm from '../../components/JogForm/JogForm'
import './AddJog.scss'

const AddJog = props => {
    return (
        <div className="add-jog">
            <div className="content">
                <div className="add-jog__wrapper">
                    <JogForm />
                </div>
            </div>

        </div>
    )
}

AddJog.propTypes = {

}

export default AddJog
