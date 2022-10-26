import {
  FetchDataRequest,
  FetchDataFailure,
  FetchDataSuccess,
} from '../user/userTypes';

type failureType = {
  error: string;
};
type successType = {
  data: Array<Number> | String;
};
export const fetchDataRequest = () => {
  return {
    type: FetchDataRequest,
  };
};

export const fetchDataFailure = ({error}: failureType) => {
  return {
    type: FetchDataFailure,
    payload: error,
  };
};

export const fetchDataSuccess = ({data}: successType) => {
  return {
    type: FetchDataSuccess,
    payload: data,
  };
};

export const login = () => {
  return (dispatch: Function) => {};
};
