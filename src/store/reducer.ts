import { offersReducer } from './offer/offer-reducer';
import { anotherReducer } from './another/another-reducer';
import { userReducer } from './user/user-reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  offersReducer,
  anotherReducer,
  userReducer,
});
