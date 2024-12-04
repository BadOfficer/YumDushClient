import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import { ROUTES } from './config/url.config';
import './index.scss';

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				path: ROUTES.home.path,
				element: ROUTES.home.element
			},
			{
				path: ROUTES.menu.path,
				element: ROUTES.menu.element
			},
			{
				path: ROUTES.cart.path,
				element: ROUTES.cart.element
			},
			{
				path: ROUTES.orders.path,
				element: ROUTES.orders.element
			}, 
			{
				path: ROUTES.settings.path,
				element: ROUTES.settings.element
			},
			{
				path: ROUTES.signIn.path,
				element: ROUTES.signIn.element
			},
			{
				path: ROUTES.signUp.path,
				element: ROUTES.signUp.element
			},
		],
	},
	{
		path: ROUTES.dashboard.path,
		element: ROUTES.dashboard.element
	},
]);

function App() {
	return (
		<RouterProvider
			router={router}
			future={{
				v7_fetcherPersist: true,
				v7_normalizeFormMethod: true,
				v7_partialHydration: true,
				v7_relativeSplatPath: true,
				v7_skipActionErrorRevalidation: true,
				v7_startTransition: true,
			}}
		/>
	);
}

export default App;
