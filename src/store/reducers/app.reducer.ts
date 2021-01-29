import EActionTypes from 'store/action-types/app.action-types';
import { TAppAction } from '../actions/app.actions';
import { IAppState, appInitState } from '../init-states/app';

export default (state: IAppState = appInitState, action: TAppAction): IAppState => {
  switch (action.type) {
    case EActionTypes.SET_ARRAY: {
      return { ...state, array: action.array };
    }
    default: {
      return state;
    }
  }
};
