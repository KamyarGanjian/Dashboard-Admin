import React from 'react';
import { useState } from 'react';
import { products } from '../../datas';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@mui/icons-material';

import './Products.css';

export default function UserList() {

  const [productsData, setProductsData] = useState(products)

  const productDelete = productId => {
    setProductsData(productsData.filter(product => product.id != productId))
  }

  const columns = [
    {
      field: 'id',
      headerName: 'کد',
      width: 70
    },
    {
      field: 'title',
      headerName: 'نام محصول',
      width: 220,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`} className='link'>
            <div className="userListUser">
              <img src={params.row.avatar} className='userListImg' />
              {params.row.title}
            </div>
          </Link>
        )
      }
    },
    {
      field: 'price',
      headerName: 'قیمت',
      width: 140
    },
    {
      field: 'action',
      headerName: 'دسترسی ادمین',
      width: 170,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`} className='link'>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className='userListDelete'
              onClick={() => productDelete(params.row.id)}
            />
          </>
        )
      }
    }
  ]

  return (
    <div className='userList'>
      <DataGrid
        rows={productsData}
        columns={columns}
        disableSelectionOnClick
        initialState={{
          pagination: { paginationModel: { pageSize: 3 } },
        }}
        checkboxSelection
      />
    </div>
  )
}