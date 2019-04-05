import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './store/Index';
import {STORY_ARCHIVE} from './constants/Actiontypes';

ReactDOM.render(<App stories={store.getState().storyState}
                     onArchive={id => store.dispatch({type: STORY_ARCHIVE, id})}  />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

export default store;