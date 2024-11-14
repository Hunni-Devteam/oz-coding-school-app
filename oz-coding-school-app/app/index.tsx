import React, { Component } from "react";
import { render } from "react-dom";
import LoginForm from './LoginForm';
import './style.css';

interface AppProps {}
interface AppState {
    name: string;
}

const App = () => {
    const onSubmitUsername = (id, password) =>
        alert(`you entered: ${id} and Password ${password}`);

    return (
        <>
            <div>
                <LoginForm onSubmit={onSubmitUsername} />
            </div>
        </>
    )
}

export default App