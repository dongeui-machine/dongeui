//4. 상태의 타입과 상태의 초기값 선언하기
export type BrowserWidthState = {
    width: number;
}

export const browserWidthInitialState = {
    width: window.innerWidth,
};