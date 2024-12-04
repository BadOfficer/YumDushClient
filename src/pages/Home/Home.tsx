import Button from '@/components/ui/Button/Button';
import Loader from '@/components/ui/Loader/Loader';
import { useTheme } from '@/hooks/useTheme';
import { FC } from 'react';

const Home: FC = () => {
	const { theme } = useTheme();

	return (
		<div className={theme}>
			<Button disabled intent='loading'><Loader intent="button" size="xs"/> hello</Button>
			<Loader />
		</div>
	);
};

export default Home;
