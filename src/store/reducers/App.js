import Immutable from 'seamless-immutable';
import {SET_FIELD_GRID, SET_STONE_COUNT} from '../types/App';

const initialState = Immutable({
    fieldGridCount : 1,
    stoneCount : 0,
    openSideBar: false,
    stoneIncriment: 10,
    mainFactoryLevel: 1,
});

export default function App(state = initialState, action={}) {
    switch (action.type) {
        case SET_FIELD_GRID :
            return {
                ...state,
                fieldGridCount : action.fieldGridCount,
            }
        case SET_STONE_COUNT : 
            return {
                ...state,
                stoneCount : action.count,
            }
        default :
            return state;
    }
}