import Immutable from 'seamless-immutable';
import {SWITCH_OPEN_MODAL} from '../types/Sidebar';

const innitialState = Immutable({
   open: false, 
});

export default function Sidebar(state={...innitialState}, action={}) {
    switch (action.type) {

        case SWITCH_OPEN_MODAL: 
        console.log(action);
            return {
                ...state,
                open: action.mode,
            }

        default :
            return state;
    }
};