import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import Login from '../views/login';


class App extends React.Component {
    render() {
        return (
            <div>
                <Login />
            </div>
        );
    }
}

export default App;