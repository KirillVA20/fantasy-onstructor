import {SWITCH_OPEN_MODAL} from '../types/Sidebar';

export const switchOpenModal = (mode) => ({
    type: SWITCH_OPEN_MODAL,
    mode: mode,
});
