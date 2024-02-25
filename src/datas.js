let xAxisData = [
    {
        name: 'فروردین',
        sale: 112_000
    },
    {
        name: 'اردیبهشت',
        sale: 99_000
    },
    {
        name: 'خرداد',
        sale: 12_090
    },
    {
        name: 'تیر',
        sale: 99_000
    },
    {
        name: 'مرداد',
        sale: 54_000
    },
    {
        name: 'شهریور',
        sale: 85_000
    },
    {
        name: 'مهر',
        sale: 34_000
    },
    {
        name: 'آبان',
        sale: 18_598
    },
    {
        name: 'آذر',
        sale: 0
    },
    {
        name: 'دی',
        sale: 73_078
    },
    {
        name: 'بهمن',
        sale: 12_900
    },
    {
        name: 'اسفند',
        sale: 97_000
    },

]

const newMembers = [
    {
        id: 1,
        username: 'نورالدین خان زاده',
        title: 'مسئول صادرات',
        img: 'images/noori.jpg'
    },
    {
        id: 2,
        username: 'داوود بیزاکودیل',
        title: 'واردات دارو',
        img: 'images/davood.jpeg'
    },
    {
        id: 3,
        username: 'نقی معمولی',
        title: 'حراست',
        img: 'images/naqi.webp'
    },
    {
        id: 4,
        username: 'ارسطو عامل',
        title: 'مسئول حمل و نقل',
        img: 'images/amel.jpg'
    },
]

const transactions = [
    {
        id: 1,
        customer: 'داوود بیزاکودیل',
        date: '۱۴۰۲/۱۲/۰۵',
        amount: '۱۲۶,۷۵۸ت',
        status: 'Declined',
        img: 'images/davood.jpeg'
    },
    {
        id: 2,
        customer: 'نقی معمولی',
        date: '۱۴۰۲/۱۲/۱۳',
        amount: '۴۲,۸۰۰ت',
        status: 'Approved',
        img: 'images/naqi.webp'
    },
    {
        id: 3,
        customer: 'نورالدین خان زاده',
        date: '۱۴۰۲/۱۲/۱۸',
        amount: '۱۸۱,۲۰۰,۰۰۰ت',
        status: 'Pending',
        img: 'images/noori.jpg'
    },
]

let userRows = [
    {
        id: 1,
        username: 'ارسطو عامل',
        avatar: 'images/amel.jpg',
        status: 'فعال',
        transaction: '۴۲,۸۰۰ت',
        email: 'arastoo@gmail.com'
    },
    {
        id: 2,
        username: 'نورالدین خان زاده',
        avatar: 'images/noori.jpg',
        status: 'غیرفعال',
        transaction: '۱۸,۱۲۰ت',
        email: 'noori@gmail.com'
    },
    {
        id: 3,
        username: 'داوود بیزاکودیل',
        avatar: 'images/davood.jpeg',
        status: 'غیرفعال',
        transaction: '۱۲۶,۷۵۸ت',
        email: 'bizakodil@gmail.com'
    },
    {
        id: 4,
        username: 'نقی معمولی',
        avatar: 'images/naqi.webp',
        status: 'فعال',
        transaction: '۰ت',
        email: 'mamoli@gmail.com'
    },
    {
        id: 5,
        username: 'بهتاش فریبا',
        avatar: 'images/behtash.jpg',
        status: 'غیرفعال',
        transaction: '۴۲,۸۰۰ت',
        email: 'fariba@gmail.com'
    }
]

let products = [
    {
        id: 1,
        title: 'ونتیلاتور',
        avatar: 'images/ventilator.jpg',
        price: '۸۳۰,۰۰۰,۰۰۰ت'
    },
    {
        id: 2,
        title: 'دستگاه مانیتورینگ',
        avatar: 'images/monitor.webp',
        price: '۴۲۸,۰۰۰,۰۰۰ت'
    },
    {
        id: 3,
        title: 'گوشی پزشکی',
        avatar: 'images/headphone.webp',
        price: '۴۲۸,۰۰۰ت'
    },
    {
        id: 4,
        title: 'دستگاه الکتروشوک',
        avatar: 'images/shock.jpg',
        price: '۸,۳۰۰,۰۰۰ت'
    }
]

const productsData = [
    {
        name: 'فروردین',
        sale: 4000
    },
    {
        name: 'شهریور',
        sale: 3000
    },
    {
        name: 'دی',
        sale: 5000
    }
]

export { xAxisData, newMembers, transactions, userRows, products, productsData }