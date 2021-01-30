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
    case EActionTypes.SET_ARRAY_SORTING_IN_PROGRESS: {
      return { ...state, sortingInProgress: true };
    }
    case EActionTypes.SET_ARRAY_SORTING_COMPLETED: {
      return { ...state, sortingInProgress: false };
    }
    default: {
      return state;
    }
  }
};
