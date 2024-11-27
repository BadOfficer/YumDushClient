import { cva, VariantProps } from 'class-variance-authority';
import { BaseHTMLAttributes } from 'react';
import styles from './loader.module.scss';

export const loader = cva(styles.loader, {
	variants: {
		size: {
			xs: styles.xs,
			m: styles.m,
			xl: styles.xl,
		},
		intent: {
			base: styles.base,
			button: styles.button,
		},
	},
	defaultVariants: {
		size: 'm',
		intent: 'base',
	},
});

export interface LoaderProps
	extends BaseHTMLAttributes<HTMLDivElement>,
		VariantProps<typeof loader> {}
