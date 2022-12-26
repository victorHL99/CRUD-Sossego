import { useContext } from 'react';
import Dashboard from '../../Dashboard';
import BackgroundPage from '../../BackgroundPage';
import * as S from './styles';
import StageContext from '../../../contexts/StageContext';
import FinishDashboard from '../../FinishDashboard';

export default function Signup() {
  const { stage } = useContext(StageContext);
  return (
    <S.SignupContainer>
      <BackgroundPage position="left" />
      <BackgroundPage position="right" />
      {stage !== 4 ? <Dashboard /> : <FinishDashboard />}
    </S.SignupContainer>
  );
}
