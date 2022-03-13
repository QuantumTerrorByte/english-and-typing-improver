import React from "react";
import {InitialState} from "../InitialState";


export function CoreReducer(state = InitialState().core, action = {type: "init"}) {
    switch (action.type) {

        default:
            return {...state};
    }
}