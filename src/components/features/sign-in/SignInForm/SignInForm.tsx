import { withTogglePassword } from '@/components/ui/Input/withTogglePassword';
import Button from '@components/ui/Button/Button';
import Form from '@components/ui/Form/Form';
import FormRow from '@components/ui/Form/FormRow';
import Input from '@components/ui/Input/Input';
import Message from '@components/ui/Message/Message';
import styles from './form.module.scss';

import { Lock, Mail } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Loader from '@/components/ui/Loader/Loader';
import { FormIf } from './form.interface';

const InputWithPasswordToggle = withTogglePassword(Input);

const SignInForm = () => {
	const {
		register,
		formState: { errors, isSubmitting },
		handleSubmit,
		clearErrors,
	} = useForm<FormIf>();

	const onSubmit: SubmitHandler<FormIf> = async () => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
			<FormRow>
				<Input
					id='email'
					type='email'
					{...register('email', {
						required: {
							value: true,
							message: 'Email is required',
						},
						pattern: {
							value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
							message: 'Email must be an email',
						},
					})}
					onChange={() => clearErrors('email')}
				>
					<Mail size={16} /> Email
				</Input>
				{errors.email && <Message>*{errors.email.message}</Message>}
			</FormRow>
			<FormRow>
				<InputWithPasswordToggle
					id='password'
					type='password'
					{...register('password', {
						required: {
							value: true,
							message: 'Password is required',
						},
					})}
					onChange={() => clearErrors('password')}
				>
					<Lock size={16} /> Password
				</InputWithPasswordToggle>
				{errors.password && <Message>*{errors.password.message}</Message>}
			</FormRow>
			<Button
				intent={isSubmitting ? 'loading' : 'primary'}
				className={styles['form__btn']}
				type='submit'
				disabled={isSubmitting}
			>
				{isSubmitting ? (
					<>
						<Loader intent='button' size='xs' />
						Submitting...
					</>
				) : (
					'Sign in'
				)}
			</Button>
		</Form>
	);
};

export default SignInForm;
