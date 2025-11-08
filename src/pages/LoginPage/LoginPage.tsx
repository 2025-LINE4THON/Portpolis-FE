import * as L from './LoginPage.styles';
import Button from './components/Button/Button';
import InputBox from './components/InputBox/InputBox';
import PwdIcon from '@assets/onBoarding/icon-pwd-shown.svg';
import { useState } from 'react';

const LoginPage = () => {
  const [showPwd, setShowPwd] = useState(true);

  return (
    <L.LoginPage>
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
      <Button
        text="로그인"
        isFilled={true}
        onClick={() => {
          console.log('로그인');
        }}
      />
    </L.LoginPage>
  );
};

export default LoginPage;
