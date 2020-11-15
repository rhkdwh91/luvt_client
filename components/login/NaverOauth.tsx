import NaverLogin from "react-login-by-naver";

const NaverOauth = (props:any) => {
    const { onLoginNaver } = props;
    return (
        <NaverLogin
          clientId="V1CuHZepCaTiIFIs9FE9"
          callbackUrl="http://localhost:3000"
          render={(props:any) => (
            <div onClick={props.onClick}>네이버 로그인</div>
          )}
          onSuccess={result => onLoginNaver(result)}
          onFailure={() => console.log('naver login fail')}
        />
    );
  };
  
export default NaverOauth;