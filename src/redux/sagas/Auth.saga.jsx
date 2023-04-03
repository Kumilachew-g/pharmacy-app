import { put, call, takeLatest, all } from "redux-saga/effects";
import { AuthTypes } from "../types";
import { AuthService } from "../../services";

const authService = new AuthService();
export function* login(action) {
  console.log("in here");
  try {
    const res = yield call(authService.login, action.payload);
    if (res.error) {
      yield put({
        type: AuthTypes.LOGIN_ERROR,
        error: res.message,
      });
    } else {
      yield put({ type: AuthTypes.LOGIN_SUCCESS, data: res });
    }
  } catch (error) {
    yield put({ type: AuthTypes.LOGIN_ERROR, error });
  }
}

export default function* allSaga() {
  yield all([takeLatest(AuthTypes.LOGIN_REQUEST, login)]);
}
