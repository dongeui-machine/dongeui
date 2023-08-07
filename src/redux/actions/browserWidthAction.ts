//1. action type 선언
export const READ_BROWSER_WIDTH = 'READ_BROWSER_WIDTH' as const;

//2. action 생성 함수 선언
export const readBrowserWidth = () => {
    return {
        type: READ_BROWSER_WIDTH,
    }
}