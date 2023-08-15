//1. action type 선언
export const SET_IS_HAMBURGER_CLICK = 'SET_IS_HAMBURGER_CLICK'

//2. action 생성 함수 선언
export const setIsHamburgerClick = (value:boolean) => {
    return {
        type: SET_IS_HAMBURGER_CLICK,
        payload: value,
    }
}

//3. types/ActionReturn.ts에 액션 생성자의 리턴 타입 명시 (Reducer 전달인자로 필요함)