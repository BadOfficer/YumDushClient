import { FC } from "react"
import { PageHeadingProps } from "./page-heading";
import styles from './page-heading.module.scss';
import Search from "@/components/ui/Search/Search";
import { SearchIcon } from "lucide-react";

const PageHeading: FC<PageHeadingProps> = ({ title, withSearch = false }) => {
    return <section className={styles['page-heading']}>
        <h2>{title}</h2>
        {withSearch && <Search placeholder="Search..." icon={<SearchIcon size={18}/>} />}
    </section>
}

export default PageHeading;