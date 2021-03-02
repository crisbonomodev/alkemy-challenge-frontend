import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { useDispatch, useSelector } from 'react-redux';
import {PrivateRoute} from './PrivateRoute';
import {PublicRoute} from './PublicRoute';
import { MainScreen } from '../components/main/MainScreen';
import { startChecking } from '../actions/auth';
import { useEffect } from 'react';
import { WaitingComponent } from '../components/auth/components/WaitingComponent';
import { transactionStartLoading } from '../actions/transaction';
import { balanceStartLoading } from '../actions/balance';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const {checking,uid} = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch])


    if(uid !== undefined && !checking)
    {
        dispatch(balanceStartLoading(uid))
        .then(dispatch( transactionStartLoading(uid)));
        
    }

    if (checking)
    {
        return (<WaitingComponent />);
    }

    return (
        <Router>
            <div>
                <Switch>

                <PublicRoute path="/auth"
                isAuthenticated={!!uid}
                component={ AuthRouter} />

                <PrivateRoute path="/"
                isAuthenticated={!!uid}
                component={MainScreen} />


                <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
