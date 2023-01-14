import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './views/Home';
import Detail from './views/Detail';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/character/:id" children={<Detail />} />
			</Switch>
		</Router>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
