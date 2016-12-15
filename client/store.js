import { createStore } from 'redux';  
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import the root reducer
import rootReducer from './reducers/index';

//import our fake data
import comments from './data/comments';
import posts from './data/posts';

//create an object for default data
const defaultStore = {
    posts,
    comments
};



//create redux store
const store = createStore(rootReducer,defaultStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const history = syncHistoryWithStore(browserHistory,store);

export default store;