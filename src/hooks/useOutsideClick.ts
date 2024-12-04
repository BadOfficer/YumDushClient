import { MutableRefObject, useEffect } from 'react';

export function useOutsideClick(
	ref: MutableRefObject<HTMLElement | null>,
	handler: () => void,
	listenCapturing: boolean = true
) {
	useEffect(() => {
		function handleClick(e: MouseEvent) {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				handler();
			}
		}

		document.addEventListener('click', handleClick, listenCapturing);

		return () => {
			document.removeEventListener('click', handleClick, listenCapturing);
		};
	}, [handler, listenCapturing]);

	return ref;
}
