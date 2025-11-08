import * as L from './LoginPage.styles';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import InputBox from './components/InputBox/InputBox';
import PwdIcon from '@assets/onBoarding/icon-pwd-shown.svg?react';
import palette from '@/styles/theme';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState(true);
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  return (
    <L.LoginPage>
      <L.LoginBox>
        <Header text="로그인" />
        <L.InputContainer>
          <InputBox
            text="아이디"
            isPwd={false}
            value={id}
            placeholder="아이디를 입력해주세요."
            onChange={(e) => setId(e.target.value)}
          />
          <InputBox
            text="비밀번호"
            isPwd={showPwd}
            value={pwd}
            placeholder="비밀번호를 입력해주세요."
            onChange={(e) => setPwd(e.target.value)}
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
        <L.ButtonContainer>
          <Button
            text="로그인"
            onClick={() => {
              console.log('로그인');
            }}
            disabled={!id || !pwd}
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
