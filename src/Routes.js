import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path='/signin'>
                <SignIn />
            </Route>
            <Route exact path='/signup'>
                <SignUp />
            </Route>
            <Route exact path='/ad/:id'>
                <AdPage />
            </Route>
            <Route path='*' exact={true} component={NotFound} />
        </Switch>
    );
}

export default Routes;