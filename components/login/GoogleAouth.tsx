import GoogleLogin from 'react-google-login';

const GoogleAouth = (props:any) => {
  const { onLoginGoogle } = props;
  return (
      <GoogleLogin
         clientId='170163842931-jsnume3goqa2338g85g06c8cu7qsdejv.apps.googleusercontent.com'
         render={(props: any) => (
           <div onClick={props.onClick}>버튼</div>
         )}
         onSuccess={result => onLoginGoogle(result)}
         onFailure={result => console.log(result)}
         cookiePolicy={'single_host_origin'}
      />
  );
};

export default GoogleAouth;