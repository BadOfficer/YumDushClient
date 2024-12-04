import { FC } from "react";
import { MessageProps } from "./message.interface";
import styles from './message.module.scss';

const Message: FC<MessageProps> = ({messageText, type = "error"}) => {
    return <p className={styles[type]}>{messageText}</p>
}

export default Message;