import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

// prefix class name to avoid conflict with other microfrontend apps
// conflict is called name collision
const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
});

export default ({ history, onSignIn }) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route path="/auth/signin" >
                        <SignIn onSignIn={onSignIn} />
                    </Route>
                    <Route path="/auth/signup" >
                        <SignUp onSignIn={onSignIn} />
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}