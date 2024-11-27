import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import { PUBLIC_ROUTES, SPECIAL_ROUTES } from './config/url.config';

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: PUBLIC_ROUTES.concat(SPECIAL_ROUTES).map((route) => {
			return {
				path: route.path,
				element: route.element,
			};
		}),
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
