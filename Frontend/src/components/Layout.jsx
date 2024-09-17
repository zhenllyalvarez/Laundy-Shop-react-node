import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import CustomerTransaction from '../pages/Customer_transaction/CustomerTransaction';
import TransactionList from '../pages/Transaction_list/TransactionList'
import AddCustomerTransaction from '../pages/Customer_transaction/AddCustomerTransaction';
import UpdateCustomerTransaction from '../pages/Customer_transaction/UpdateCustomerTransaction';
import Settings from '../pages/Settings/Settings';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PublicRoute><Login/></PublicRoute>}></Route>
          <Route path='/Register' element={<PublicRoute><Register/></PublicRoute>}></Route>
          <Route path='/Dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
          <Route path='/CustomerTransaction' element={<PrivateRoute><CustomerTransaction/></PrivateRoute>}/>
          <Route path='/AddCustomerTransaction' element={<PrivateRoute><AddCustomerTransaction/></PrivateRoute>}/>
          <Route path='/UpdateCustomerTransaction' element={<PrivateRoute><UpdateCustomerTransaction/></PrivateRoute>}/>
          <Route path='/TransactionList' element={<PrivateRoute><TransactionList/></PrivateRoute>}/>
          <Route path='/Settings' element={<PrivateRoute><Settings/></PrivateRoute>}/>
        </Routes>
      </BrowserRouter>  
    </div>
  )
}

export default Layout