import * as L from '@pages/LoginPage/LoginPage.styles';
import * as S from './SignupPage.styles';
import Header from '@pages/LoginPage/components/Header/Header';
import InputBox from '@pages/LoginPage/components/InputBox/InputBox';
import Button from '@pages/LoginPage/components/Button/Button';
import PwdIcon from '@assets/onBoarding/icon-pwd-shown.svg?react';
import palette from '@/styles/theme';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { RequestCheckIdDTO, RequestSignupDTO } from '@/types/OnBoarding/auth';
import { CheckId, Signup } from '@/apis/OnBoarding/auth';

const SignupPage = () => {
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState(true);
  const [checkId, setCheckID] = useState(false);
  const [idMessage, setIdMessage] = useState('');
  const [pwdMessage, setPwdMessage] = useState('');

  const [userInfo, setUserInfo] = useState({
    name: '',
    id: '',
    pwd: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));

    if (name == 'id') {
      setIdMessage('중복 확인을 해주세요.');
      setCheckID(false);
    }
  };

  const handleCheckId = async () => {
    try {
      const requestData: RequestCheckIdDTO = {
        username: userInfo.id,
      };

      const response = await CheckId(requestData);

      if (response.statusCode == 200) {
        setCheckID(true);
        setIdMessage('사용 가능한 아이디입니다.');
      }
    } catch (error) {
      console.error(error);
      setIdMessage('중복된 아이디입니다.');
    }
  };

  const handleSignup = async () => {
    try {
      const requestData: RequestSignupDTO = {
        username: userInfo.id,
        password: userInfo.pwd,
        name: userInfo.name,
      };

      const response = await Signup(requestData);

      if (response.data) {
        navigate('/login');
      }
      console.log(response);
    } catch (error) {
      console.error(error);
      setPwdMessage('영문, 숫자, 특수문자를 조합해 8자 이상 입력하세요.');
    }
  };

  return (
    <>
      <L.Background />
      <L.LoginPage>
        <L.Header>Portpolis</L.Header>
        <L.LoginBox style={{ maxWidth: '587px' }}>
          <Header text="회원가입" />
          <L.InputContainer>
            <InputBox
              text="이름"
              isPwd={false}
              name="name"
              value={userInfo.name}
              placeholder="이름을 입력해주세요."
              onChange={handleChange}
            />
            <InputBox
              text="아이디"
              isPwd={false}
              name="id"
              value={userInfo.id}
              placeholder="아이디를 입력해주세요."
              onChange={handleChange}
              content={
                <S.CheckIdBtn
                  type="button"
                  onClick={() => {
                    handleCheckId();
                  }}
                  disabled={checkId}>
                  중복확인
                </S.CheckIdBtn>
              }
            />
            <L.ErrorMsg style={{ color: checkId ? palette.primary.primary500 : palette.danger.default }}>
              {idMessage}
            </L.ErrorMsg>
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
            <L.ErrorMsg>{pwdMessage}</L.ErrorMsg>
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
                  handleSignup();
                }}
                disabled={!userInfo.id || !userInfo.pwd || !userInfo.name || !checkId}
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
    </>
  );
};

export default SignupPage;
