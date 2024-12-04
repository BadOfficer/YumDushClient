import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { SearchProps } from "./search.interface";
import styles from './search.module.scss';
import { X } from "lucide-react";

const Search: FC<SearchProps> = ({icon, ...props}) => {
    const [value, setValue] = useState("");
    const ref = useRef<null | HTMLInputElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleClear = () => {
        setValue("");
    }

    const handleClickKey = (e: KeyboardEvent) => {
        if(e.ctrlKey && e.key === "k" && ref.current) {
            ref.current.focus();
            e.preventDefault();
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleClickKey);

        return () => document.removeEventListener("keydown", handleClickKey);
    }, [handleClickKey])

    return <div className={styles['search']}>
        <input {...props} style={icon ? {paddingLeft: "3rem"} : {}} value={value} onChange={handleChange} ref={ref} />
        <span className={styles['search__icon']}>{icon}</span>
        {value !== '' 
            ? 
                <button className={styles['search__clear']} onClick={handleClear}><X size={18}/></button> 
            : 
                <div className={styles['search__tip']}>Ctrl + K</div>
        }
    </div>
}

export default Search;