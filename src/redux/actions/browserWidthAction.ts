//1. action type 선언
export const READ_BROWSER_WIDTH = 'READ_BROWSER_WIDTH' as const;

//3. 액션 객체에 대한 type, 리듀서 작성할 때 action 파라미터의 타입을 설정하기 위해 작성
export type ReadBrowserWidthAction = 
    ReturnType<typeof readBrowserWidth>;

//2. action 생성 함수 선언
export const readBrowserWidth = () => {
    return {
        type: READ_BROWSER_WIDTH,
    }
}