import GoogleAouth from "components/login/GoogleAouth";

const main = () => {
  const onLoginGoogle = (result:any) => {
    console.log('Login Success!');
    console.log(result);
  }
  return (
    <div>
      Hello, World!
      <GoogleAouth onLoginGoogle={onLoginGoogle} />
    </div>
  )
}

export default main;