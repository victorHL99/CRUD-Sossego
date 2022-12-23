import { Routes, Route } from 'react-router-dom';
import Signup from '../components/pages/Signup';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
    </Routes>
  );
}
