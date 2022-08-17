import React from 'react'; // React
import ReactDOM from 'react-dom/client'; // React DOM
import './index.css'; // Index CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.min.js'; // Bootstrap JS
import App from './App'; // App Component

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
