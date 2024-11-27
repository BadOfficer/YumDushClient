import { FC } from 'react';
import { HeadingProps } from './header.interface';

import Search from '@/components/ui/Search/Search';
import { useTheme } from '@/hooks/useTheme';
import { SearchIcon } from 'lucide-react';
import styles from './heading.module.scss';

const Heading: FC<HeadingProps> = ({ children }) => {
	const { theme } = useTheme();

	return (
		<section className={`${styles.header} ${styles[theme]}`}>
			<h1>{children}</h1>
			<Search
				type='text'
				placeholder='Search something...'
				icon={<SearchIcon size={16} />}
			/>
		</section>
	);
};

export default Heading;
