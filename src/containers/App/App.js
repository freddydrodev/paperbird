import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import MainRoutes from '../../routes/MainRoutes'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {MainRoutes.map(settings => (
                        <Route key={settings.title} {...settings} />
                    ))}
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
