import Home from './pages/home/Home'
import UserList from './pages/Users/UserList'
import NewUser from './pages/Users/UserList'
import Products from './pages/Products/Products'
import Product from './pages/product/Product'

let routes = [
    { path: '/', element: <Home /> },
    { path: '/users', element: <UserList /> },
    { path: '/newUser', element: <NewUser /> },
    { path: '/products', element: <Products /> },
    { path: '/product/:productId', element: <Product /> }
]

export default routes