import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productInfos } from './ProductPage';

export default function ProductDetailPage() {
  const parameter = useParams();
  // console.log(parameter); // {productId: '1'}

  // useParams()을 사용한 경우,
  //   1. 객체로 감싸져서 넘어온다.
  //   2. 모두 string으로 넘어온다.
  // console.log(productInfos);

  const navigate = useNavigate();

  // #################################################
  // 1) filter 사용
  // const product = productInfos.filter((_, idx) => {
  //   return idx+1 === Number(parameter.productId);
  // });

  // const { id, name, email, body } = product[0];
  // console.log(product);

  // return (
  //   <div>
  //     <h1>Product DetailPage</h1>
  //     <ul>
  //       <li>상품번호: {id}</li>
  //       <li>상품명: {name}</li>
  //       <li>판매자: {email}</li>
  //       <li>상세설명: {body}</li>
  //     </ul>
  //   </div>
  // );
  // #################################################

  // 2-1) id-1 = idx를 이용
  // const id = Number(parameter.productId);

  // return (
  //   <div>
  //     <h1>Product DetailPage</h1>
  //     <ul>
  //       <li>상품번호: {productInfos[id-1].id}</li>
  //       <li>상품명: {productInfos[id-1].name}</li>
  //       <li>판매자: {productInfos[id-1].email}</li>
  //       <li>상세설명: {productInfos[id-1].body}</li>
  //     </ul>
  //   </div>
  // );

  // 2-2) 구조분해할당
  const {id, name, email, body} = productInfos[Number(parameter.productId) - 1];

  return (
    <div>
      <h1>Product DetailPage</h1>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
      <button onClick={() => navigate('/')}>홈으로 이동하기</button>
      <ul>
        <li>상품번호: {id}</li>
        <li>상품명: {name}</li>
        <li>판매자: {email}</li>
        <li>상세설명: {body}</li>
      </ul>
    </div>
  );
}
