import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import CustomerTransaction from '../pages/Customer_transaction/CustomerTransaction';
import CompletedTransaction from '../pages/Completed_transaction/CompletedTransaction'
import AddCustomerTransaction from '../pages/Customer_transaction/AddCustomerTransaction';
import Settings from '../pages/Settings/Settings';

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/CustomerTransaction' element={<CustomerTransaction/>}/>
          <Route path='/AddCustomerTransaction' element={<AddCustomerTransaction/>}/>
          <Route path='/CompletedTransaction' element={<CompletedTransaction/>}/>
          <Route path='/Settings' element={<Settings/>}/>
        </Routes>
      </BrowserRouter>  
    </div>
  )
}

export default Layout