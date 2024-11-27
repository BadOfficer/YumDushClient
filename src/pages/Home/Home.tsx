import Button from '@/components/ui/Button/Button';
import { useTheme } from '@/hooks/useTheme';
import { FC } from 'react';

const Home: FC = () => {
	const { theme } = useTheme();

	return (
		<div className={theme}>
			<Button>hello</Button>
		</div>
	);
};

export default Home;
