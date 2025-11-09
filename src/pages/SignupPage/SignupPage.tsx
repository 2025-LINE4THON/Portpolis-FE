import * as L from '@pages/LoginPage/LoginPage.styles';
import * as S from './SignupPage.styles';
import Header from '@pages/LoginPage/components/Header/Header';
import InputBox from '@pages/LoginPage/components/InputBox/InputBox';
import Button from '@pages/LoginPage/components/Button/Button';
import PwdIcon from '@assets/onBoarding/icon-pwd-shown.svg?react';
import palette from '@/styles/theme';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState(true);
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [checkId, setCheckID] = useState(false);
  const [pwd, setPwd] = useState('');

  return (
    <L.LoginPage>
      <L.LoginBox style={{ maxWidth: '587px' }}>
        <Header text="회원가입" />
        <L.InputContainer>
          <InputBox
            text="이름"
            isPwd={false}
            value={name}
            placeholder="이름을 입력해주세요."
            onChange={(e) => setName(e.target.value)}
          />
          <InputBox
            text="아이디"
            isPwd={false}
            value={id}
            placeholder="아이디를 입력해주세요."
            onChange={(e) => setId(e.target.value)}
            content={
              <S.CheckIdBtn
                type="submit"
                onClick={() => {
                  setCheckID(true);
                }}
                disabled={checkId}>
                중복확인
              </S.CheckIdBtn>
            }
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
          <S.ButtonDiv>
            <S.CheckBox>
              <S.CheckInput type="checkbox" id="agreement" />
              <label htmlFor="agreement">서비스 이용약관 및 개인정보 처리 방침에 동의합니다.</label>
            </S.CheckBox>
            <Button
              text="회원가입"
              onClick={() => {
                console.log('회원가입');
              }}
              disabled={!id || !pwd || !name}
            />
          </S.ButtonDiv>
          <L.Text>
            이미 계정이 있으신가요?
            <span
              style={{ color: palette.primary.primary500, textDecoration: 'underline', cursor: 'pointer' }}
              onClick={() => {
                navigate('/login');
              }}>
              로그인하기
            </span>
          </L.Text>
        </L.ButtonContainer>
      </L.LoginBox>
    </L.LoginPage>
  );
};

export default SignupPage;
