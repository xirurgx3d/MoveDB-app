import React from 'react'; 
import api from './api/Api';
import Main from './routes/pages/MainPage/Main';



const App:React.FC = () => {
    //api.getFilms().then(val => console.log(val))
    return (
        <Main/>
    )
}

export default App;
