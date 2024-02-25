import React from 'react';
import { transactions } from './../../datas';
import './WidgetLg.css';

export default function WidgetLg() {

    const Button = ({ type }) => {
        return <button className={'widgetLgButton ' + type}>{type}</button>
    }

    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">تراکنش های اخیر</h3>
            <table className="widgetLgTable">

                <tr className="widhetLgTr">
                    <th className="widgetLgTh">مشتری</th>
                    <th className="widgetLgTh">تاریخ</th>
                    <th className="widgetLgTh">میزان تراکنش</th>
                    <th className="widgetLgTh">وضعیت</th>
                </tr>

                {transactions.map((transaction) => (
                    <tr key={transaction.id} className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src={transaction.img} className='WidgetLgImg' />
                            <span className='widgetLgName'>{transaction.customer}</span>
                        </td>
                        <td className="widgetLgDate">{transaction.date}</td>
                        <td className="widgetLgAmount">{transaction.amount}</td>
                        <td className="widgetLgStatus">
                            <Button type={transaction.status} />
                        </td>
                    </tr>
                ))}

            </table>
        </div>
    )
}
