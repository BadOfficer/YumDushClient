import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

export const button = cva(styles.button, {
	variants: {
		intent: {
			base: styles.base,
			primary: styles.primary,
			secondary: styles.secondary,
			loading: styles.loading,
		},
		size: {
			small: styles.small,
			medium: styles.medium,
			large: styles.large,
		},
	},
	defaultVariants: {
		intent: 'base',
		size: 'small',
	},
});

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof button> {
	children?: ReactNode;
}
