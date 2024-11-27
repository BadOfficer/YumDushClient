import Cart from '@/pages/Cart/Cart';
import Dashboard from '@/pages/Dashboard/Dashboard';
import Home from '@/pages/Home/Home';
import Menu from '@/pages/Menu/Menu';
import Orders from '@/pages/Orders/Orders';
import Settings from '@/pages/Settings/Settings';
import SignIn from '@/pages/Sign-in/SignIn';
import SignUp from '@/pages/Sign-up/SignUp';
import { ReactNode } from 'react';

export interface RouteIf {
	path: string;
	element: ReactNode;
	displayName: string;
	requiredAuth: boolean;
}

export const PUBLIC_ROUTES: RouteIf[] = [
	{
		path: '/',
		element: <Home />,
		displayName: 'Home',
		requiredAuth: true,
	},
	{
		path: '/menu',
		element: <Menu />,
		displayName: 'Menu',
		requiredAuth: true,
	},
	{
		path: '/cart',
		element: <Cart />,
		displayName: 'Cart',
		requiredAuth: true,
	},
	{
		path: '/sign-in',
		element: <SignIn />,
		displayName: 'Sign in',
		requiredAuth: false,
	},
	{
		path: '/sign-up',
		element: <SignUp />,
		displayName: 'Sign up',
		requiredAuth: false,
	},
	{
		path: '/dashboard',
		element: <Dashboard />,
		displayName: 'Dashboard',
		requiredAuth: true,
	},
	{
		path: '/orders',
		element: <Orders />,
		displayName: 'Orders',
		requiredAuth: true,
	},
];

export const SPECIAL_ROUTES: RouteIf[] = [
	{
		path: '/settings',
		element: <Settings />,
		displayName: 'Settings',
		requiredAuth: true,
	},
];
