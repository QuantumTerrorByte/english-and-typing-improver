import React from "react";
import {combineReducers} from "redux";
import {CoreReducer} from "./CoreReducer";

export const rootReducer = combineReducers({
    core: CoreReducer,
})