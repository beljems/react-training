import { put, call } from 'redux-saga/effects';
import { queries } from './commentQueries';
import useMutation from './../../../hooks/useMutation';

import { ADD_COMMENT } from './commentTypes';

function* addCommentReq(data = {}) {
  return yield call(useMutation, queries.COMMENT, data)
}

export function* addComment(action) {
  try {
    const { data: comment } = yield addCommentReq(action.payload)
    yield put({ type: `${ADD_COMMENT}_SUCCESS`, payload: comment })
  } catch(error) {
    yield put({ type: `${ADD_COMMENT}_FAIL`, payload: error })
  }

}
