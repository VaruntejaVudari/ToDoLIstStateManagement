import { TodoActionType } from "../shared/enum/Todo-action-types.enum";
import { ActionParent } from "../actions/Todo.actions";
import { Todo } from "../models/Todo";
import { Action } from "rxjs/internal/scheduler/Action";

const initialState: Todo[]=[
    {title : "Title Demo 1"},
    {title : "Title Demo 2"},
    {title : "Title Demo 3"},
    
];

export function TodoReducer(state = initialState,action : ActionParent){
    switch (action.type){
        default:
            return state;
    }

}