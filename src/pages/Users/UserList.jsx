import React from 'react';
import { useState } from 'react';
import { userRows } from '../../datas';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@mui/icons-material';

import './UserList.css';

export default function UserList() {

  const [userDatas, setUserDatas] = useState(userRows)

  const userDelete = userId => {
    setUserDatas(userDatas.filter(user => user.id != userId))
  }

  const columns = [
    {
      field: 'id',
      headerName: 'کد',
      width: 60
    },
    {
      field: 'user',
      headerName: 'کاربر',
      width: 210,
      renderCell: (params) => {
        return (
          <Link to="" className='link'>
            <div className="userListUser">
              <img src={params.row.avatar} className='userListImg' />
              {params.row.username}
            </div>
          </Link>
        )
      }
    },
    {
      field: 'email',
      headerName: 'نشان الکترونیکی',
      width: 220
    },
    {
      field: 'status',
      headerName: 'وضعیت',
      width: 140
    },
    {
      field: 'transaction',
      headerName: 'تراکنش',
      width: 150
    },
    {
      field: 'action',
      headerName: 'دسترسی ادمین',
      width: 170,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`} className='link'>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className='userListDelete'
              onClick={() => userDelete(params.row.id)}
            />
          </>
        )
      }
    }
  ]

  return (
    <div className='userList'>
      <DataGrid
        rows={userDatas}
        columns={columns}
        disableSelectionOnClick
        initialState={{
          pagination: { paginationModel: { pageSize: 4 } },
        }}
      />
    </div>
  )
}