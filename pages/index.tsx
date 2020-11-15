import GoogleOauth from "components/login/GoogleOauth";

const main = () => {
  const onLoginGoogle = (result:any) => {
    console.log('Login Success!');
    console.log(result);
  }
  return (
    <div>
      Hello, World!
      <GoogleOauth onLoginGoogle={onLoginGoogle} />
    </div>
  )
}

export default main;