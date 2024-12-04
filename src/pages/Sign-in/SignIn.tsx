import SignInForm from '@/components/features/Sign-in/SignInForm/SignInForm';
import { FC } from 'react';
import styles from './SignIn.module.scss';

const SignIn: FC = () => {
	return (
		<div className={`${styles['sign-in']} container`}>
			<h2>Sign In</h2>
			<SignInForm />
		</div>
	);
};

export default SignIn;
