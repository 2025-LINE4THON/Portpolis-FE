import * as L from './LoginPage.styles';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import InputBox from './components/InputBox/InputBox';
import PwdIcon from '@assets/onBoarding/icon-pwd-shown.svg';
import palette from '@/styles/theme';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState(true);

  return (
    <L.LoginPage>
      <L.LoginBox>
        <Header text="로그인" />
        <L.InputContainer>
          <InputBox text="아이디" isPwd={false} placeholder="아이디를 입력해주세요." />
          <InputBox
            text="비밀번호"
            isPwd={showPwd}
            placeholder="비밀번호를 입력해주세요."
            content={
              <L.PwdBtn onClick={() => setShowPwd(!showPwd)}>
                <img src={PwdIcon} />
              </L.PwdBtn>
            }
          />
        </L.InputContainer>
        <L.ButtonContainer>
          <Button
            text="로그인"
            isFilled={true}
            onClick={() => {
              console.log('로그인');
            }}
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
  );
};

export default LoginPage;
