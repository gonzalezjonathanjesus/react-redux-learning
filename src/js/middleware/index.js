import { ADD_ARTICLE, FOUND_BAD_WORD, FETCH_DATA, FETCHING_DATA } from "./../constants/action-types";
import { fetchDataSuccess, fetchDataError } from "./../actions/index";

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
    return function(next) {
        return function(action){
            if (action.type === ADD_ARTICLE) {
                const foundWord = forbiddenWords.filter(word => (
                    action.payload.title.includes(word)
                ));

                if(foundWord.length) {
                    return dispatch({type: FOUND_BAD_WORD});
                }
            }
            return next(action);
        };
    };
}

export const fetchDataFromApi = ({dispatch, getState}) => {
    return (next) => {
        return (action) => {
            console.log("Entró a middleware fetchDataFromApi");
            if(action.type === FETCH_DATA) {
                console.log("FETCH_DATA === true");
                dispatch({type: FETCHING_DATA});
                console.log("State before fetch data", getState());
                console.log("fetching data...");
                return fetch("https://jsonplaceholder.typicode.com/posts")
                    .then(response => response.json())
                    .then(json => {
                        console.log("Fetched articles before dispatch", fetchDataSuccess(json))
                        dispatch(fetchDataSuccess(json));
                        console.log("State after fetch data", getState());
                    })
                    .catch(error => {
                        dispatch(fetchDataError(error));
                    });
            }

            console.log("FETCH_DATA === false\n");

            return next(action);
        }
    }
}