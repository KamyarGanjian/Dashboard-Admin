import React from 'react'
import { Link } from 'react-router-dom'
import Chart from '../../components/Chart/Chart'
import { productsData } from '../../datas'
import { ColorLens, Publish } from '@mui/icons-material'

import './Product.css'

export default function Product() {
    return (
        <div className='product '>
            <div className="productTitleContainer">
                <h1 className="productTitle">محصول</h1>
                <Link to="/newProduct">
                    <button className='productAddButton'>ایجاد کن</button>
                </Link>
            </div>

            <div className="productTop">

                <div className="productTopLeft">
                    <Chart title="This Month's Sale" data={productsData} dataKey="sale" />
                </div>

                <div className="productTopRight">

                    <div className="productInfoTop">
                        <img src="/images/shock.jpg" alt="img" className='productInfoImg' />
                        <span className="productName">دستگاه الکتروشوک</span>
                    </div>

                    <div className="productInfoBottom">

                        <div className="productInfoItem">
                            <div className="productInfoKey">کد محصول:</div>
                            <div className="productInfoValue">۴</div>
                        </div>

                        <div className="productInfoItem">
                            <div className="productInfoKey">نام محصول:</div>
                            <div className="productInfoValue">دستگاه الکتروشوک</div>
                        </div>

                        <div className="productInfoItem">
                            <div className="productInfoKey">میزان فروش:</div>
                            <div className="productInfoValue">۸,۳۰۰,۰۰۰ت</div>
                        </div>

                        <div className="productInfoItem">
                            <div className="productInfoKey">موجود در انبار:</div>
                            <div className="productInfoValue">ناموجود</div>
                        </div>

                    </div>

                </div>

            </div>

            <div className="productBottom">
                <form action="" className="productForm">

                    <div className="productFormLeft">
                        <label htmlFor="">نام محصول</label>
                        <input type="text" placeholder='دستگاه الکتروشوک' />

                        <label htmlFor="">موجود در انبار</label>
                        <select name="" id="inStock">
                            <option value="yes">موجود</option>
                            <option value="no">ناموجود</option>
                        </select>

                        <label htmlFor="">فعال</label>
                        <select name="" id="inStock">
                            <option value="yes">بله</option>
                            <option value="no">خیر</option>
                        </select>

                    </div>

                    <div className="productFormRight">
                        <div className="productUploader">
                            <img src="/images/shock.jpg" alt="profile photo" className='productUploaderImg' />
                            <label htmlFor="">
                                <Publish />
                            </label>
                            <input type="file" style={{ display: 'none' }} />
                        </div>

                        <button className='productButton'>ایجاد کن</button>

                    </div>

                </form>
            </div>

        </div>
    )
}
