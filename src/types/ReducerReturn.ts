import rootReducer from "../redux/reducers";

//Reducer 함수의 Return Type, useSelector를 사용할 때 필요함
export type RootState = ReturnType<typeof rootReducer>;