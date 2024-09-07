import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import CustomerTransaction from '../pages/Customer_transaction/CustomerTransaction';
import TransactionList from '../pages/Transaction_list/TransactionList'
import AddCustomerTransaction from '../pages/Customer_transaction/AddCustomerTransaction';
import UpdateCustomerTransaction from '../pages/Customer_transaction/UpdateCustomerTransaction';
import Settings from '../pages/Settings/Settings';
import Login from '../pages/Auth/Login';

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/CustomerTransaction' element={<CustomerTransaction/>}/>
          <Route path='/AddCustomerTransaction' element={<AddCustomerTransaction/>}/>
          <Route path='/UpdateCustomerTransaction' element={<UpdateCustomerTransaction/>}/>
          <Route path='/TransactionList' element={<TransactionList/>}/>
          <Route path='/Settings' element={<Settings/>}/>
        </Routes>
      </BrowserRouter>  
    </div>
  )
}

export default Layout