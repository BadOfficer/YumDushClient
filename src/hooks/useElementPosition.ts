import { useEffect, useState } from 'react';

export function useElementPosition(refEl: HTMLElement | null) {
	const [position, setPosition] = useState({
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	});

	useEffect(() => {
		const updatePosition = () => {
			if (refEl) {
				const rect = refEl.getBoundingClientRect();
				setPosition({
					left: rect.left,
					bottom: rect.bottom,
					top: rect.top,
					right: rect.right,
				});
			}
		};

		updatePosition();

		window.addEventListener('resize', updatePosition);

		return () => {
			window.removeEventListener('resize', updatePosition);
		};
	}, [refEl]);

	return position;
}
