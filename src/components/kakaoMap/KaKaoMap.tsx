import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { styled } from 'styled-components';
import { KakaoMapProps } from '../../types/KakaoMapProps';

export const KaKaoMapContainer = styled.section`
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: -1;
`
const KaKaoMap = ({lat, lng}:KakaoMapProps) => {
    return (
        <KaKaoMapContainer>
            <Map
                center={{ lat:lat, lng:lng }}
                style={{ width: "100%", height: "360px" }}>
                <MapMarker position={{lat:37.521754,lng:126.832335}}/>
            </Map>
        </KaKaoMapContainer>
    );
};


export default KaKaoMap;