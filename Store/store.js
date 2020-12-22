import {createStore,applyMiddleware} from "redux";
import allReducer from "../Reducers/CombinedReducers";
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "../SagasCalls/rootSaga";

//creating the store  and the saga middleware
const sagaMiddleware = createSagaMiddleware()

export const store=createStore(allReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);