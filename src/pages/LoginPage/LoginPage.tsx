import * as L from './LoginPage.styles';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import InputBox from './components/InputBox/InputBox';
import PwdIcon from '@assets/onBoarding/icon-pwd-shown.svg?react';
import palette from '@/styles/theme';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { RequestLoginDTO } from '@/types/OnBoarding/auth';
import { Login } from '@/apis/OnBoarding/auth';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState(true);

  const [userInfo, setUserInfo] = useState({
    id: '',
    pwd: '',
  });
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    try {
      const requestData: RequestLoginDTO = {
        username: userInfo.id,
        password: userInfo.pwd,
      };

      const response = await Login(requestData);

      if (response.data) {
        navigate('/login');
      }
      localStorage.setItem('accessToken', JSON.stringify(response.data.accessToken));
      navigate('/');
    } catch (error) {
      console.error(error);
      setErrorMsg('등록된 사용자가 없거나 비밀번호가 틀립니다.');
    }
  };

  return (
    <>
      <L.Background />
      <L.LoginPage>
        <L.Header>Portpolis</L.Header>
        <L.LoginBox>
          <Header text="로그인" />
          <L.InputContainer>
            <InputBox
              text="아이디"
              isPwd={false}
              name="id"
              value={userInfo.id}
              placeholder="아이디를 입력해주세요."
              onChange={handleChange}
            />
            <InputBox
              text="비밀번호"
              isPwd={showPwd}
              name="pwd"
              value={userInfo.pwd}
              placeholder="비밀번호를 입력해주세요."
              onChange={handleChange}
              content={
                <L.PwdBtn onClick={() => setShowPwd(!showPwd)}>
                  <PwdIcon
                    style={{
                      color: showPwd ? palette.neutral.neutral950 : palette.neutral.neutral300,
                    }}
                  />
                </L.PwdBtn>
              }
            />
          </L.InputContainer>
          <L.ErrorMsg style={{ bottom: '50px' }}>{errorMsg}</L.ErrorMsg>
          <L.ButtonContainer>
            <Button
              text="로그인"
              onClick={() => {
                handleLogin();
              }}
              disabled={!userInfo.id || !userInfo.pwd}
            />
            <L.Text>
              아직 계정이 없으신가요?
              <span
                style={{ color: palette.primary.primary500, textDecoration: 'underline', cursor: 'pointer' }}
                onClick={() => {
                  navigate('/signup');
                }}>
                회원가입하기
              </span>
            </L.Text>
          </L.ButtonContainer>
        </L.LoginBox>
      </L.LoginPage>
    </>
  );
};

export default LoginPage;
