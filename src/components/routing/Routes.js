import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../../containers/Login/Login'
import Jogs from '../../containers/Jogs/Jogs'
import PrivateRoute from './PrivateRoute'
import Info from '../Info/Info'
import AddJog from '../../containers/AddJog/AddJog'
import EditJog from '../../containers/EditJog/EditJog'

export const Routes = () => {
    return (
        <section className="container">
            <Switch>
                {/* login, jogs, addJog, editJog, info */}
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/jogs" component={Jogs} />
                <PrivateRoute exact path="/add-jog" component={AddJog} />
                <PrivateRoute exact path="/edit-jog/:jogId" component={EditJog} />
                <PrivateRoute exact path="/info" component={Info} />
            </Switch>
        </section>

    )
}
