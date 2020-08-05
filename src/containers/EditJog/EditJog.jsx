import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import JogForm from '../../components/JogForm/JogForm'
import './EditJog.scss'
import { getJog, editJog, setJog } from '../../actions/jog'
import { Loader } from '../../components/Loader/Loader'

const EditJog = ({
    jog,
    editJog,
    getJog,
    setJog,
    match,
    history
}) => {
    const onSubmit = (formData) => {
        const newJog = {
            date: new Date(formData.date).toISOString().substr(0, 10),
            time: formData.time,
            distance: formData.distance,
            jog_id: jog.id,
            user_id: jog.user_id
        }
        editJog(newJog, history)
    }
    useEffect(() => {
        getJog(match.params.jogId)
        return () => setJog(null)
    }, [getJog, match.params.jogId, setJog])

    return (
        <div className="edit-jog">
            <div className="content">
                <div className="edit-jog__wrapper">
                    {
                        jog
                            ? <JogForm onSubmit={ onSubmit } initialData={ jog } />
                            : <Loader />
                    }

                </div>
            </div>
        </div>
    )
}

EditJog.propTypes = {
    editJog: PropTypes.func.isRequired,
    getJog: PropTypes.func.isRequired,
    setJog: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    jog: state.jog.jog
})

export default connect(mapStateToProps, { editJog, getJog, setJog })(EditJog)
