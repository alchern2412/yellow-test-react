import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import JogForm from '../../components/JogForm/JogForm'
import './AddJog.scss'
import { addJog } from '../../actions/jog'

const AddJog = ({
    addJog,
    history
}) => {
    const onSubmit = (formData) => {
        addJog(formData, history)
    }
    return (
        <div className="add-jog">
            <div className="content">
                <div className="add-jog__wrapper">
                    <JogForm onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    )
}

AddJog.propTypes = {
    addJog: PropTypes.func.isRequired,
}

export default connect(null, { addJog })(AddJog)
