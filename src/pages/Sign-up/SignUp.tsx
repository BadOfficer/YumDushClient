import SignUpForm from '@/components/features/sign-up/SignUpForm/SignUpForm';
import { FC } from 'react';
import styles from './SignUp.module.scss';

const SignUp: FC = () => {
	return (
		<div className={`${styles['sign-up']} container`}>
			<h2>Sign Up</h2>
			<SignUpForm />
		</div>
	);
};

export default SignUp;
