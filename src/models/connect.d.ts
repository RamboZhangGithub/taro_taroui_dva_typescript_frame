import { AnyAction, Dispatch } from 'redux';
import { CommonModelState } from './common';

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
}

export interface ConnectProps {
  dispatch: Dispatch<AnyAction>;
}

export interface ConnectState {
  common: CommonModelState;
  loading: Loading;
}

export { CommonModelState };
