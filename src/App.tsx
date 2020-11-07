import React from 'react'; 
import api from './api/Api';
import SerchFilm from './components/SerchFilm/SerchFilm';
import Main from './routes/pages/MainPage/Main';
import Header from './template/header/header'

const App:React.FC = () => {
    return (
        <>
        <Header>
            <SerchFilm />
        </Header>
        <Main/>
        </>
    )
}

export default App;
