import { withTogglePassword } from '@/components/ui/Input/withTogglePassword';
import Button from '@components/ui/Button/Button';
import Form from '@components/ui/Form/Form';
import FormRow from '@components/ui/Form/FormRow';
import Input from '@components/ui/Input/Input';
import Message from '@components/ui/Message/Message';
import styles from './form.module.scss';

import { Lock, Mail, User } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Loader from '@/components/ui/Loader/Loader';
import { FormIf } from './sign-up.interface';

const InputWithPasswordToggle = withTogglePassword(Input);

const SignUpForm = () => {
	const {
		register,
		formState: { errors, isSubmitting },
		handleSubmit,
		getValues,
		clearErrors,
	} = useForm<FormIf>();

	const onSubmit: SubmitHandler<FormIf> = async (data) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		console.log(data);
	};

	return (
		<Form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
			<FormRow>
				<Input
					id='fullname'
					type='text'
					{...register('fullname', {
						required: {
							value: true,
							message: 'Full name is required',
						},
						maxLength: {
							value: 255,
							message: 'Full name can contain only 255 characters',
						},
					})}
					onChange={() => clearErrors('fullname')}
				>
					<User size={16} /> Full name
				</Input>
				{errors.fullname && <Message>*{errors.fullname.message}</Message>}
			</FormRow>

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
						pattern: {
							value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&#]).{8,}$/,
							message:
								'Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character (@, $, !, %, *, ?, & or #).',
						},
					})}
					onChange={() => clearErrors('password')}
				>
					<Lock size={16} /> Password
				</InputWithPasswordToggle>
				{errors.password && <Message>*{errors.password.message}</Message>}
			</FormRow>

			<FormRow>
				<InputWithPasswordToggle
					id='cofirm-password'
					type='password'
					{...register('confirm-password', {
						required: {
							value: true,
							message: 'Confirm password is required',
						},
						validate: (value) =>
							value === getValues('password') || 'Passwords must match.',
					})}
					onChange={() => clearErrors('confirm-password')}
				>
					<Lock size={16} /> Confirm Password
				</InputWithPasswordToggle>
				{errors['confirm-password'] && (
					<Message>*{errors['confirm-password'].message}</Message>
				)}
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
					'Sign up'
				)}
			</Button>
		</Form>
	);
};

export default SignUpForm;
