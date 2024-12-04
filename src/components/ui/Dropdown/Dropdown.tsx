import { createContext, FC, ReactNode, useContext, useRef, useState } from "react";
import styles from './dropdown.module.scss';
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { cva, VariantProps } from "class-variance-authority";

interface DrodpownContextIf {
    toggle: (name: string) => void,
    close: () => void,
    openName: string
}

const DropdownContext = createContext<DrodpownContextIf>({
    toggle: () => {},
    close: () => {},
    openName: ""
});

const useDropdownContext = () => useContext(DropdownContext);

const dropdown = cva(styles['dropdown__body'], {
    variants: {
        type: {
            left: styles.left,
            center: styles.center,
            right: styles.right
        }
    },
    defaultVariants: {
        type: "left"
    }
})

interface DropdownProps {
    children: ReactNode;
}

interface DropdonwTriggerProps {
    children: ReactNode;
    elementFor: string;
}

interface DropdownBodyProps extends VariantProps<typeof dropdown>{
    children: ReactNode;
    name: string;
    margin?: number;
}

const Dropdown: FC<DropdownProps> = ({children}) => {
    const [openName, setOpenName] = useState("");
    const ref = useRef(null);

    const toggle = (name: string) => {
        setOpenName(curOpenName => name === curOpenName ? "" : name)
    }

    const close = () => {
        setOpenName("");
    }

    useOutsideClick(ref, close);

    return <DropdownContext.Provider value={{ toggle, close, openName }}>
        <div className={styles['dropdown']} ref={ref}>
            {children}
        </div>
    </DropdownContext.Provider>
}

const DropdownTrigger: FC<DropdonwTriggerProps> = ({children, elementFor}) => {
    const { toggle } = useDropdownContext();

    return <button onClick={() => toggle(elementFor)} className={styles['dropdown__trigger']}>{children}</button>
}

const DropdownBody: FC<DropdownBodyProps> = ({children, name, type, margin}) => {
    const {openName} = useDropdownContext();

    if(openName !== name) return

    return <div className={dropdown({ type })} style={{marginTop: margin !== undefined ? `${margin}px` : "1rem"}}>{children}</div>
}

const DropdownItem: FC<{children: ReactNode}> = ({children}) => {
    const {close} = useDropdownContext();

    return <button onClick={close} className={styles['dropdown__item']}>{children}</button>
}

export default {
    Wrapper: Dropdown,
    Trigger: DropdownTrigger,
    Body: DropdownBody,
    Item: DropdownItem
}