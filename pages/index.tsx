import GoogleOauth from "components/login/GoogleOauth";
import NaverOauth from "components/login/NaverOauth";

const main = () => {
  const onLoginGoogle = (result:any) => {
    console.log('Login Success!');
    console.log(result);
  }
  const onLoginNaver = (result:any) => {
    console.log('Login Success!');
    console.log(result);
  }
  return (
    <div>
      Hello, World!
      <GoogleOauth onLoginGoogle={onLoginGoogle} />
      <NaverOauth onLoginNaver={onLoginNaver} />
    </div>
  )
}

export default main;