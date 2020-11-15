import KakaoLogin from 'react-kakao-login';

const KakaoOauth = (props:any) => {
  const { onLoginKakao } = props;
  return (
    <KakaoLogin
        token={'afe189096b1997be6661a62fff43e457'}
        render={({ onClick }) => {
            return (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  onClick();
                }}
              >
                카카오로 로그인하기
              </div>
            );
        }}
        onSuccess={result => onLoginKakao(result)}
        onFail={result => console.log(result)}
            />
  );
};

export default KakaoOauth;