import { InputHTMLAttributes, ReactNode } from "react";

export interface SearchProps extends InputHTMLAttributes<HTMLInputElement>{
    icon?: ReactNode;
}