import { cva, VariantProps } from 'class-variance-authority';
import { BaseHTMLAttributes, ReactNode } from 'react';
import styles from './message.module.scss';

export const message = cva(styles.message, {
	variants: {
		intent: {
			error: styles.error,
			success: styles.success,
		},
	},
	defaultVariants: {
		intent: 'error',
	},
});

export interface MessageProps
	extends BaseHTMLAttributes<HTMLBaseElement>,
		VariantProps<typeof message> {
	children: ReactNode;
	className?: string;
}
