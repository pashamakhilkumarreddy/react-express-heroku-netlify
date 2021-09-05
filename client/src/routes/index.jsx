import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';

const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));

const Routes = () => (
  <Suspense fallback="">
    <ErrorBoundary fallback="">
      <Switch>
        <Route path="*" component={PageNotFound} />
      </Switch>
    </ErrorBoundary>
  </Suspense>
);

export default Routes;
