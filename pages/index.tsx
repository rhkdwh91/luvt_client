import GoogleOauth from "components/login/GoogleOauth";
import NaverOauth from "components/login/NaverOauth";
import KakaoOauth from "components/login/KakaoOauth";

const main = () => {
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
  return (
    <div>
      Hello, World!
      <GoogleOauth onLoginGoogle={onLoginGoogle} />
      <NaverOauth onLoginNaver={onLoginNaver} />
      <KakaoOauth onLoginKakao={onLoginKakao} />
    </div>
  )
}

export default main;