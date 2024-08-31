import React from 'react'
import { Pagination } from 'antd';


const PaginationBtn = () => {
  return (
    <>
    <div className='p-2 border'>
     <Pagination align="center" defaultCurrent={1} total={50} />
    </div>
    </>
  )
}

export default PaginationBtn;