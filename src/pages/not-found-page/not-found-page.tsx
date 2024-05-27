import {Link} from 'react-router-dom';
import Header from '../../components/header';
import { AppRoute } from '../../components/constants/all-constants';

function NotFoundPage(): JSX.Element {
  return (
    <section className="page page--gray page--main">
      <Header />
      <section>
        <h1>404. Page not found</h1>
        <Link to={AppRoute.Main}>На главную</Link>
      </section>
    </section>
  );
}

export default NotFoundPage;
