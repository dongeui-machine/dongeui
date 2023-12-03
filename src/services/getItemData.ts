// 브랜드 : 경서이엔피, 유성파우치

import axios from "axios";
import { ROOT_URL } from ".";

/*
카테고리
1. 경서이엔피 : 추출기, 포장기, 분쇄기/착즙기/교반탱크
2. 유성파우치 : 스탠딩, 스파우트, 자동롤, 알루미늄제품, 콤마제품
*/
export const itemData = {
  data: [
    {
      id: 1,
      name: "명의(스파우트)(90X150)기본수량1000매(쫄대 별도구매)",
      brand: "유성파우치",
      category: "스파우트",
      imageUrl:
        "https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/goods/23/01/01/1090/1090_main_098.jpg",
      detailImageUrl:
        "https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/editor/goods/230103/Resized_1672725523481-2_182741.jpeg",
    },
    {
      id: 2,
      name: "한약액(검정)(피이티25/씨피피80) 기본수량 6000매",
      brand: "유성파우치",
      category: "스탠딩",
      imageUrl:
        "https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/goods/23/01/04/1093/1093_main_011.jpg",
      detailImageUrl:
        "https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/editor/goods/230126/d5372dcd094d8d99d7b0700527ad5bab_155636.jpg",
    },
    {
      id: 3,
      name: "갈아만든 사과(알루미늄/자동롤)",
      brand: "유성파우치",
      category: "알루미늄제품",
      imageUrl:
        "https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/goods/20/08/31/882/882_detail_067.jpg",
      detailImageUrl:
        "https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/editor/goods/200802/44a70db6955ae1fe7f6c29471e0a52b0_210720.jpg",
    },
    {
      id: 4,
      name: "진한쌍화차 (PET25/CLP95) 기본수량 6,000매",
      brand: "유성파우치",
      category: "스탠딩",
      imageUrl:
        "https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/goods/22/03/09/1048/1048_detail_037.jpg",
      detailImageUrl:
        "https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/editor/goods/220303/1dc203a9b39cd49e2de8f91a6b175869_175554.jpg",
    },
    {
      id: 5,
      name: "신선한 배즙(스파우트)(90X150)기본수량1000매(쫄대 별도구매)",
      brand: "유성파우치",
      category: "스파우트",
      imageUrl:
        "https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/goods/22/10/43/1081/1081_detail_051.jpg",
      detailImageUrl:
        "https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/editor/goods/221024/B90150_192721.jpg",
    },
    {
      id: 6,
      name: "신선한 사과즙(스파우트)(90X150)기본수량1000매(쫄대 별도구매)",
      brand: "유성파우치",
      category: "스파우트",
      imageUrl:
        "https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/goods/22/10/43/1079/1079_detail_091.jpg",
      detailImageUrl:
        "https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/editor/goods/221024/A90150_191555.jpg",
    },
    {
      id: 7,
      name: "무병장수(무광)(피이티25/씨피피80) 기본수량 6000매 제조원 : 보성지앤피",
      brand: "유성파우치",
      category: "스탠딩",
      imageUrl:
        "https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/goods/22/08/33/1067/1067_detail_013.jpg",
      detailImageUrl:
        "https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/editor/goods/220816/KakaoTalk_20220812_174625441_01_150449.jpg",
    },
    {
      id: 8,
      name: "즐거운마음(알루미늄)(자동롤)",
      brand: "유성파우치",
      category: "알루미늄제품",
      imageUrl:
        "https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/goods//18/03/25/682/682_Detail0.jpeg",
      detailImageUrl:
        "https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/editor/goods/221215/KakaoTalk_20221215_143147974_02_143853.jpg",
    },
    {
      id: 9,
      name: "경서이엔피 홍삼추출기 KSR-200 22L",
      brand: "경서이엔피",
      category: "추출기",
      imageUrl:
        "https://kyungseo.co.kr/web/product/big/202201/4ba63fb7ed1f62719d935b5f2216cda2.jpg",
      detailImageUrl:
        "https://kyungseo.co.kr/web/product/big/202201/4ba63fb7ed1f62719d935b5f2216cda2.jpg",
    },
    {
      id: 10,
      name: "경서이엔피 COOL 초고속진동저온추출기 COSMOS-700 80L",
      brand: "경서이엔피",
      category: "추출기",
      imageUrl:
        "https://kyungseo.co.kr/web/product/big/202201/15dbcabcafc6af74887724a2b7b59561.jpg",
      detailImageUrl:
        "https://kyungseo.co.kr/web/product/big/202201/15dbcabcafc6af74887724a2b7b59561.jpg",
    },
    {
      id: 11,
      name: "스파우트 1열 액상 포장기 실린더형 TOWER-III",
      brand: "경서이엔피",
      category: "포장기",
      imageUrl:
        "https://kyungseo.co.kr/web/product/big/202201/54beebbcec5e1492f6cd6c01e881557f.jpg",
      detailImageUrl:
        "https://kyungseo.co.kr/web/product/big/202201/54beebbcec5e1492f6cd6c01e881557f.jpg",
    },
    {
      id: 12,
      name: "(유백)양파(자동롤)",
      brand: "경서이엔피",
      category: "자동롤",
      imageUrl:
        "https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/goods/22/07/29/1055/1055_detail_036.jpg",
      detailImageUrl:
        "https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/editor/goods/220718/4076767d13fb85f7e35ceda4fb857fe0_173029.jpg",
    },
    {
      id: 13,
      name: "건강한 호박콤마(자동롤)",
      brand: "유성파우치",
      category: "콤마제품",
      imageUrl:
        "https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/goods/19/05/21/830/830_detail_03.jpg",
      detailImageUrl:
        "https://cdn-pro-web-219-28.cdn-nhncommerce.com/nahyo3_godomall_com/data/editor/goods/190526/c986106d0a3fee79ecd490bfb95687a8_054339.jpg",
    },
  ],
};
//메인페이지 제품 목록 조회
export const getMainPageItemData = async () => {
  return {
    status: "success",
    data: itemData.data.slice(0, 4),
  };
};
//제품페이지 제품 목록 조회
export const getAllData = async () => {
  // try {
  //     const response = await axios.get(`${ROOT_URL}/products`);

  //     return {
  //         status: 'success',
  //         data : response.data.data,
  //     };
  // } catch (err) {
  //     return {
  //         status: 'error',
  //         data : err,
  //     };
  // }
  return itemData;
};
//제품 상세데이터 조회
export const getItemDetailData = async (productId: number) => {
  try {
    const response = await axios.get(`${ROOT_URL}/products/${productId}`);
    console.log(response.data.data);
    return {
      status: "success",
      data: response.data.data,
    };
  } catch (err) {
    return {
      status: "error",
      data: err,
    };
  }
};
