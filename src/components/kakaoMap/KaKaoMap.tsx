import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { styled } from 'styled-components';

export const KaKaoMapContainer = styled.section`
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const KaKaoMap = () => {
    return (
        <KaKaoMapContainer>
            <Map
                center={{lat:37.521754,lng:126.832335}}
                style={{ width: "100%", height: "360px" }}>
                <MapMarker position={{lat:37.521754,lng:126.832335}}/>
            </Map>
        </KaKaoMapContainer>
    );
};


export default KaKaoMap;