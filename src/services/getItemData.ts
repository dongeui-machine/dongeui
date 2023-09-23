// 브랜드 : 경서이엔피, 유성파우치
/*
카테고리
1. 경서이엔피 : 추출기, 포장기, 분쇄기/착즙기/교반탱크
2. 유성파우치 : 스탠딩, 스파우트, 자동롤, 알루미늄제품, 콤마제품
*/
export const itemData = {
    data: [
        {
            id: 1, 
            name:'명의(스파우트)(90X150)기본수량1000매(쫄대 별도구매)', 
            brand: '유성파우치',
            category: '스파우트',
            imageUrl: 'https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/goods/23/01/01/1090/1090_main_098.jpg'
        },
        {
            id: 2, 
            name: '한약액(검정)(피이티25/씨피피80) 기본수량 6000매',
            brand: '유성파우치',
            category: '스탠딩',
            imageUrl: 'https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/goods/23/01/04/1093/1093_main_011.jpg'
        },
        {
            id: 3, 
            name: '갈아만든 사과(알루미늄/자동롤)',
            brand: '유성파우치',
            category: '알루미늄제품',
            imageUrl:'https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/goods/20/08/31/882/882_detail_067.jpg'
        },
        {
            id: 4, 
            name: '진한쌍화차 (PET25/CLP95) 기본수량 6,000매',
            brand: '유성파우치',
            category: '스탠딩',
            imageUrl: 'https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/goods/22/03/09/1048/1048_detail_037.jpg',
        },
        {
            id: 5,
            name: '신선한 배즙(스파우트)(90X150)기본수량1000매(쫄대 별도구매)',
            brand: '유성파우치',
            category: '스파우트',
            imageUrl: 'https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/goods/22/10/43/1081/1081_detail_051.jpg'
        },
        {
            id:6,
            name:'신선한 사과즙(스파우트)(90X150)기본수량1000매(쫄대 별도구매)',
            brand: '유성파우치',
            category: '스파우트',
            imageUrl: 'https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/goods/22/10/43/1079/1079_detail_091.jpg',
        },
        {
            id: 7,
            name:'무병장수(무광)(피이티25/씨피피80) 기본수량 6000매 제조원 : 보성지앤피',
            brand: '유성파우치',
            category: '스탠딩',
            imageUrl: 'https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/goods/22/08/33/1067/1067_detail_013.jpg',
        },
        {
            id:8,
            name:'즐거운마음(알루미늄)(자동롤)',
            brand: '유성파우치',
            category: '알루미늄제품',
            imageUrl: 'https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/goods//18/03/25/682/682_Detail0.jpeg',
        },
        {
            id:9,
            name:'경서이엔피 홍삼추출기 KSR-200 22L',
            brand: '경서이엔피',
            category: '추출기',
            imageUrl: 'https://kyungseo.co.kr/web/product/big/202201/4ba63fb7ed1f62719d935b5f2216cda2.jpg',
        },
        {
            id:10,
            name:'경서이엔피 COOL 초고속진동저온추출기 COSMOS-700 80L',
            brand: '경서이엔피',
            category: '추출기',
            imageUrl: 'https://kyungseo.co.kr/web/product/big/202201/15dbcabcafc6af74887724a2b7b59561.jpg',
        },
        {
            id:11,
            name: '스파우트 1열 액상 포장기 실린더형 TOWER-III',
            brand: '경서이엔피',
            category: '포장기',
            imageUrl: 'https://kyungseo.co.kr/web/product/big/202201/54beebbcec5e1492f6cd6c01e881557f.jpg',
        },
        {
            id:12, 
            name: '(유백)양파(자동롤)',
            brand: '경서이엔피',
            category: '자동롤',
            imageUrl: 'https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/goods/22/07/29/1055/1055_detail_036.jpg'
        },
        {
            id:13, 
            name: '건강한 호박콤마(자동롤)',
            brand: '유성파우치',
            category: '콤마제품',
            imageUrl: 'https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/goods/19/05/21/830/830_detail_03.jpg'
        }
    ]
}

export const getMainPageItemData = async () => {
    return itemData.data.slice(0,4);
}

export const getAllData = async () => {
    return itemData.data;
}
