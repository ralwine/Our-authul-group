
import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* shelfItems(action) {
    console.log("inside shelfItems")
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          };
        const items = yield axios.get('/api/shelf', config);
        console.log('get all:', items.data);
        yield put({ type: 'SET_ITEMS', payload: items.data });

    } catch(error) {
        console.log('get shelf items error', error);
    }
}


function* userShelf() {
    yield takeEvery('FETCH_ITEMS', shelfItems)
}
//Just a coment

export default userShelf;

