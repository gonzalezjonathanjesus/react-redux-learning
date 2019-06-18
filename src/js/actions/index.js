import { 
    ADD_ARTICLE, 
    FETCHING_DATA, 
    FETCH_DATA, 
    FETCH_DATA_SUCCESS, 
    FETCH_DATA_ERROR 
} from '../constants/action-types';

export const addArticle = (payload) => {
    return {
        type: ADD_ARTICLE,
        payload
    };
};

// export function getData() {
//     return function(dispatch) {
//         return fetch("https://jsonplaceholder.typicode.com/posts")
//             .then(response => response.json())
//             .then(json => {
//                 dispatch({ type: "DATA_LOADED", payload: json});
//             });
//     };
// }

export const fetchData = () => {
    return {
        type: FETCH_DATA
    }
}

export const fetchingData = () => {
    return {
        type: FETCHING_DATA
    }
}

export const fetchDataSuccess = (payload) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload
    }
}

export const fetchDataError = (payload) => {
    return {
        type: FETCH_DATA_ERROR,
        payload
    }
}