import MainPage from '../../pages/mainPage';

type AppPageProps = {
  placesCount: number;
}

function App({placesCount}: AppPageProps): JSX.Element {
  return (
    <MainPage/>
  );
}

export default App;