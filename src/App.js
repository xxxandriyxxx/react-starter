import React from 'react';
import {UserCard} from './components/UserCard'
import './App.css';


function App() {
    return (
        <div className={'wrapper'}>
            <UserCard
                name={'Taras'}
                age={23}
                gender={'male'}
                hobbies={'dota2'}/>

            <UserCard
                name={'Andriy'}
                age={30}
                gender={'male'}
                hobbies={'money'}/>


        </div>
    );
}

export default App;
