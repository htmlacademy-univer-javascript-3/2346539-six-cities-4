import {Navigate} from 'react-router-dom';
import AuthorizationPage from './Authorization';
import AppLink from './links';


type PrivateRouteProps = {
  authorizationStatus: AuthorizationPage;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationPage.Auth
      ? children
      : <Navigate to={AppLink.loginPage} />
  );
}

export default PrivateRoute;
