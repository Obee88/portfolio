import { handleActions } from 'redux-actions';
import { SET_DETAILS_LEVEL } from './actions';

const reducer = handleActions({
  [SET_DETAILS_LEVEL]: (state, { detailsLvl }) => ({ ...state, detailsLvl }),
}, { detailsLvl: 3 });

export default reducer;