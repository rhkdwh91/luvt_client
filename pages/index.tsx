import { useEffect, useRef } from "react";
//import axios from "axios";
import GoogleOauth from "components/login/GoogleOauth";
import NaverOauth from "components/login/NaverOauth";
import KakaoOauth from "components/login/KakaoOauth";
console.log(process.env.NEXT_PUBLIC_API_URL);
const main = () => {
  useEffect(()=>{
    draw();
  }, []);
  const canvasRef = useRef(null);
  const onLoginGoogle = (result:object) => {
    console.log('Login Success!');
    console.log(result);
  }
  const onLoginNaver = (result:object) => {
    console.log('Login Success!');
    console.log(result);
  }
  const onLoginKakao = (result:object) => {
    console.log('Login Success!');
    console.log(result);
  }
  const draw: Function = () => {
    const canvas:any = canvasRef.current;
    const context = canvas.getContext("2d");

    context.fillStyle = "rgb(200,0,0)";
    context.fillRect (10, 10, 50, 50);

    context.fillStyle = "rgba(0, 0, 200, 0.5)";
    context.fillRect (30, 30, 50, 50);
  }
  /*  한국 관광공사 데이터
  지역 데이터 const api_url = "http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaCode?ServiceKey=mQyJA%2BiJkQ4Dn98VFlEauoB2TccF6gspC2oSwZUN65Dx3ECqpJZf0Uap%2BFXK22%2BNkoBJd6I5J0YGPSWbGjOglw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=TestApp&_type=json";
  categoryCode
  서비스 분류코드 조회
  areaBasedList
  지역기반 관광정보 조회
  locationBasedList
  위치기반 관광정보 조회
  searchKeyword
  키워드 검색 조회
  searchFestival
  행사정보 조회
  searchStay
  숙박정보 조회
  detailCommon
  공통정보 조회 (상세정보1)
  detailIntro
  소개정보 조회 (상세정보2)
  detailInfo
  반복정보 조회 (상세정보3)
  detailImage
  이미지정보 조회 (상세정보4)

  const res = axios.get(api_url)
  .then(function (res) {
    console.log(res)
  });
  console.log(res);
  */
  return (
    <div>
      LUVT
      <canvas ref={canvasRef} width="150" height="150"></canvas>
      <GoogleOauth onLoginGoogle={onLoginGoogle} />
      <NaverOauth onLoginNaver={onLoginNaver} />
      <KakaoOauth onLoginKakao={onLoginKakao} />
    </div>
  )
}

export default main;