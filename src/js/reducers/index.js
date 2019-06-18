import { 
    ADD_ARTICLE, 
    DATA_LOADED, 
    FETCHING_DATA,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_ERROR
 } from '../constants/action-types';

const initialState = {
    articles: [],
    remoteArticles: {
        list: [],
        loading: false,
        error: false
    }
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return Object.assign({}, state, 
                {
                    articles: state.articles.concat(action.payload)
                }
            )
            // with ES6 syntax
            // return {
            //     ...state,
            //     articles: [...state.articles, action.payload]
            // };
        case DATA_LOADED:
            return Object.assign({}, state, {
                remoteArticles: state.remoteArticles.list.concat(action.payload)
            });

        case FETCHING_DATA:
            return {
                ...state,
                remoteArticles: {
                    ...state.remoteArticles,
                    loading: true
                }
            }
            //return Object.assign({}, state, Object.assign({}, state.remoteArticles, { loading: true }));
        
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                remoteArticles: {
                    ...state.remoteArticles,
                    list: action.payload,
                    loading: false
                }
            }
            // return Object.assign({}, state, Object.assign({}, state.remoteArticles, {
            //     list: action.payload,
            //     loading: false
            // }));
        
        case FETCH_DATA_ERROR:
                return Object.assign({}, state, Object.assign({}, state.remoteArticles, {
                    loading: false,
                    error: action.payload.error
                }));

        default:
            return state;
    }
};

export default rootReducer;