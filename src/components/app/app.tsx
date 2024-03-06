import MainPage from '../../pages/main';

type AppPageProps = {
  placesCount: number;
}

function App({placesCount}: AppPageProps): JSX.Element {
  return (
    <MainPage placesCount={placesCount} />
  );
}

export default App;