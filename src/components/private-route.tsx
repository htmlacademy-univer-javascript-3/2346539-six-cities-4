import {Navigate} from 'react-router-dom';
import { AuthStatus } from './constants/all-constants';
import { AppRoute } from './constants/all-constants';

type PrivateRouteProps = {
  authStatus: AuthStatus;
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authStatus, children} = props;

  return (
    authStatus === AuthStatus.Auth
      ? children : <Navigate to={AppRoute.Login}/>
  );
}

export default PrivateRoute;
