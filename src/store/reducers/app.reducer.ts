import EActionTypes from 'store/action-types/app.action-types';
import { TAppAction } from '../actions/app.actions';
import { IAppState, appInitState } from '../init-states/app';

export default (state: IAppState = appInitState, action: TAppAction): IAppState => {
  switch (action.type) {
    case EActionTypes.SET_ARRAY: {
      return { ...state, array: action.array };
    }
    case EActionTypes.SET_SORTING_TICK_INTERVAL: {
      return { ...state, sortingTickInterval: action.sortingTickInterval };
    }
    default: {
      return state;
    }
  }
};
