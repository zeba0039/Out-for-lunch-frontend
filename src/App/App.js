import './App.css';
import React from 'react';
// noinspection ES6CheckImport
import {
    Routes,
    Route,
    BrowserRouter
} from 'react-router-dom';
import Main from "../pages/Main/Main";
import Login from '../pages/Login/Login';
import Profile from "../pages/Profile/Profile";
import AppBar from "../components/AppBar/AppBar";
import Register from "../pages/Register/Register";
import {HuldBanner} from "../components/HuldBanner/HuldBanner";
import {
    Authenticator,
    Authenticate,
} from "../utils/Authentication/Authenticate";
import NoPermission from "../pages/NoPermission/NoPermission";



/*
    The root app functionality and browser routing system.
    Contains always on display AppBar
    TODO: And handles page authentication checks
    -AK
 */
const App = () => {
    /*
    TODO: Token handling

     */
        return (
            <div className="wrapper">
                <Authenticator>
                    <BrowserRouter>

                        <header className="App-header">
                            <AppBar/>
                        </header>

                                <Routes>
                                    <Route path="/nopermission" element={<NoPermission/>}/>

                                    <Route path="*" element={<Login/>}/>
                                    <Route path="/login" element={<Login />} />
                                    <Route path="/register" element={<Register/>}/>

                                    <Route element={<Authenticate/>}>
                                        <Route path="/main" element={<Main />} />
                                        <Route path="/profile" element={<Profile />} />
                                    </Route>
                                </Routes>

                        <footer>
                            <HuldBanner/>
                        </footer>

                    </BrowserRouter>
                </Authenticator>
            </div>
        );

}

export default App;