import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App2 from "./App2.test";
import NotificationList from "./mounts/NotificationList";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*  jsx 문법에서 화면을 랜더링 하기 위한 태그의 이름은 반드시 첫 글자가 대문자이어야 함*/}
        {/* 대문자*/}
        <App2/>
        <NotificationList/>
        <br/><hr/><br/>
        <App/>
    </React.StrictMode>
);

