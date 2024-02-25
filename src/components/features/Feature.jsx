import React from 'react';
import { ArrowDownward } from '@mui/icons-material';
import { ArrowUpward } from '@mui/icons-material';

import './feature.css';

export default function Feature() {
    return (
        <div className='features'>

            <div className="featureItem">
                <span className="featureTitle">درآمد</span>
                <div className="featureContainer">
                    <span className="featureMoney">۱,۳۳۹,۰۰۰,۰۰۱ ت</span>
                    <span className="featureRate">
                        <ArrowDownward className='featureIcon negative' />
                        ۱۱.۴-
                    </span>
                </div>
                <span className="featureSub">مقایسه با ماه گذشته</span>
            </div>

            <div className="featureItem">
                <span className="featureTitle">فروش</span>
                <div className="featureContainer">
                    <span className="featureMoney">۸,۵۳۸,۹۱۲,۲۳۴ت</span>
                    <span className="featureRate">
                    <ArrowDownward className='featureIcon negative' />
                    ۱۷.۳+
                    </span>
                </div>
                <span className="featureSub">مقایسه با ماه گذشته</span>
            </div>

            <div className="featureItem">
                <span className="featureTitle">هزینه</span>
                <div className="featureContainer">
                    <span className="featureMoney">۷,۱۹۹,۹۱۲,۲۳۳ت</span>
                    <span className="featureRate">
                    <ArrowUpward className='featureIcon' />
                        ۱۱.۹+
                    </span>
                </div>
                <span className="featureSub">مقایسه با ماه گذشته</span>
            </div>

        </div>
    )
}
