import {SET_FIELD_GRID, SET_STONE_COUNT} from '../types/App';

export const SetFieldGridCount = (count) => ({
    type: SET_FIELD_GRID,
    fieldGridCount: count,
});

export const SetStoneCount = (count) => ({
    type: SET_STONE_COUNT,
    count: count,
});