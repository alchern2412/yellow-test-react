import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../Login/Login'
import Jogs from '../Jogs/Jogs'
import PrivateRoute from './PrivateRoute'
import Info from '../../components/Info/Info'
import AddJog from '../AddJog/AddJog'
import EditJog from '../EditJog/EditJog'

export const Routes = () => {
    return (
        <section className="container">
            <Switch>
                <Route exact path="/login" component={ Login } />
                <PrivateRoute exact path="/jogs" component={ Jogs } />
                <PrivateRoute exact path="/add-jog" component={ AddJog } />
                <PrivateRoute exact path="/edit-jog/:jogId" component={ EditJog } />
                <PrivateRoute exact path="/info" component={ Info } />
            </Switch>
        </section>

    )
}
