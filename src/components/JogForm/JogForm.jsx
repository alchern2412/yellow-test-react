import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './JogForm.scss'
import { useState } from 'react'

const JogForm = ({
    initialData = {
        distance: 0,
        time: 0,
        date: new Date().toISOString().substr(0, 10)
    },
    onSubmit,
}) => {
    const [formData, setFormData] = useState(initialData)

    const onSubmitForm = e => {
        e.preventDefault()
        console.log('submit', formData)
        onSubmit(formData)
    }

    const onChange = e => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    useEffect(() => {
        console.log('formData', formData);
    }, [formData])

    return (
        <div className="jog-form">
            <Link to="/jogs">
                <div className="jog-form__cancel"></div>
            </Link>
            <div className="jog-form__wrapper">
                <div className="jog-form__fields">
                    <div className="jog-form-field">
                        <div className="jog-form-field__label">Distance</div>
                        <div className="jog-form-field__input">
                            <input
                                className="input jog-form__input"
                                type="number"
                                value={ formData.distance }
                                name="distance"
                                onChange={ e => onChange(e) }
                            />
                        </div>
                    </div>
                    <div className="jog-form-field">
                        <div className="jog-form-field__label">Time</div>
                        <div className="jog-form-field__input">
                            <input
                                className="input jog-form__input"
                                type="number"
                                value={ formData.time }
                                name="time"
                                onChange={ e => onChange(e) }
                            />
                        </div>
                    </div>
                    <div className="jog-form-field">
                        <div className="jog-form-field__label">Date</div>
                        <div className="jog-form-field__input">
                            <input
                                className="input jog-form__input"
                                value={ formData.date }
                                name="date"
                                onChange={ e => onChange(e) }
                                type="date"
                            />
                        </div>
                    </div>

                </div>
                <input onClick={ onSubmitForm } className="btn jog-form__btn" type="submit" value="Let me in"></input>
            </div>
        </div>
    )
}

JogForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialData: PropTypes.object,
}

export default JogForm
