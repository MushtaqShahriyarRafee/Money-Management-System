import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'

function App() {
    return ( <
        BrowserRouter > <
        div className = "container" >

        <
        Switch >
        <
        Route path = '/'
        exact component = { Home }
        /> <
        Route path = '/login'
        component = { Login }
        /> <
        Route path = '/register'
        component = { Register }
        />  <
        Route path = '/dashboard'
        component = { Dashboard }
        />< /
        Switch >

        <
        /div> < /
        BrowserRouter >
    );
}

export default App;




// import './App.css';

// function App() {
//     return ( <
//         div className = "App" >
//         <
//         h1 > Hello word < /h1> <
//         /div>
//     );
// }

// export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//     return ( <
//         div className = "App" >
//         <
//         header className = "App-header" >
//         <
//         img src = { logo }
//         className = "App-logo"
//         alt = "logo" / >
//         <
//         p >
//         Edit < code > src / App.js < /code> and save to reload. < /
//         p > <
//         a className = "App-link"
//         href = "https://reactjs.org"
//         target = "_blank"
//         rel = "noopener noreferrer" >
//         Learn React <
//         /a> < /
//         header > <
//         /div>
//     );
// }

// export default App;