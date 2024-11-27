import { FC } from 'react';
import { message, MessageProps } from '.';

const Message: FC<MessageProps> = ({ className, intent, children }) => {
	return <p className={message({ intent, className })}>{children}</p>;
};

export default Message;
