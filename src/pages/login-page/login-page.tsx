import { Link, Navigate } from 'react-router-dom';
import { AppRoute, LoadingStatus } from '../../components/constants/all-constants';
import { AuthStatus } from '../../components/constants/all-constants';
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../components/hooks';
import { login } from '../../store/api-actions';
import { Cities } from '../../components/constants/cities';
import { setCity, setRandomCity } from '../../store/another/another-actions';

function LoginPage(): JSX.Element {
  const authStatus = useAppSelector((state) => state.userReducer.authStatus);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const loadingStatus = useAppSelector((state) => state.offersReducer.loadingStatus);
  const submitHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({email, password}));
  }, [dispatch, email, password]);

  useEffect(() => {
    dispatch(setRandomCity(Cities[Math.floor(Math.random() * Cities.length)]));
  }, [dispatch]);

  const randomCity = useAppSelector((state) => state.anotherReducer.randomCity);
  return authStatus !== AuthStatus.Auth ? (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            {loadingStatus === LoadingStatus.Error && <div><span>Something went wrong,<br/>check the requirements and try again later.</span></div>}
            <form className="login__form form" onSubmit={submitHandler}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={onEmailChange}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={onPasswordChange}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main} onClick={() => dispatch(setCity(randomCity))}>
                <span>{randomCity.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  ) : <Navigate to={AppRoute.Main}/>;
}

export default LoginPage;
