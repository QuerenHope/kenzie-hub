import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import Register from '../pages/registers';
import {Route,Routes, Navigate} from 'react-router-dom'


function RoutesMain () {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Navigate replace to={'/login'} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default RoutesMain;
