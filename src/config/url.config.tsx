import Cart from '@/pages/Cart/Cart';
import Dashboard from '@/pages/Dashboard/Dashboard';
import Home from '@/pages/Home/Home';
import Menu from '@/pages/Menu/Menu';
import Orders from '@/pages/Orders/Orders';
import Settings from '@/pages/Settings/Settings';
import SignIn from '@/pages/Sign-in/SignIn';
import SignUp from '@/pages/Sign-up/SignUp';
import { ReactNode } from 'react';


export interface RouteProps {
	path: string;
	element: ReactNode;
}

export const ROUTES = {
	home: {
		path: '/',
		element: <Home />
	},
	menu: {
		path: '/menu',
		element: <Menu />
	},
	cart: {
		path: '/cart',
		element: <Cart />
	},
	signIn: {
		path: '/sign-in',
		element: <SignIn />
	},
	signUp: {
		path: '/sign-up',
		element: <SignUp />
	},
	settings: {
		path: '/settings',
		element: <Settings />
	},
	dashboard: {
		path: '/dashboard',
		element: <Dashboard />
	},
	orders: {
		path: '/orders',
		element: <Orders />
	}
}