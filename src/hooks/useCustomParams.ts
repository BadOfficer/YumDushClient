import { useNavigate, useSearchParams } from 'react-router-dom';

export function useCustomParams(key: string) {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const item = searchParams.get(key);

	const handleSetItem = (value: any) => {
		const newParams = new URLSearchParams(searchParams);
		newParams.set(key, value.toString());
		setSearchParams(newParams);
	};

	const handleDeleteItem = () => {
		const newParams = new URLSearchParams(searchParams);
		newParams.delete('search');
		setSearchParams(newParams);
	};

	return { item, handleSetItem, handleDeleteItem, navigate };
}
