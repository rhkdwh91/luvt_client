import GoogleOauth from "components/login/GoogleOauth";
import NaverOauth from "components/login/NaverOauth";
import KakaoOauth from "components/login/KakaoOauth";
import { useEffect, useRef } from "react";

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
  return (
    <div>
      Hello, World!
      <canvas ref={canvasRef} width="150" height="150"></canvas>
      <GoogleOauth onLoginGoogle={onLoginGoogle} />
      <NaverOauth onLoginNaver={onLoginNaver} />
      <KakaoOauth onLoginKakao={onLoginKakao} />
    </div>
  )
}

export default main;