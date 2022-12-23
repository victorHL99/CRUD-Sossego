import Dashboard from '../../Dashboard';
import BackgroundPage from '../../BackgroundPage';
import * as S from './styles';

export default function Signup() {
  return (
    <S.SignupContainer>
      <BackgroundPage position="left" />
      <BackgroundPage position="right" />
      <Dashboard />
    </S.SignupContainer>
  );
}
