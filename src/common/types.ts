import { OrderStatus, Role } from './enums';

export interface UserIf {
	id: number;
	fullName: string;
	email: string;
	address: string;
	role: Role;
	avatar: string;
}

export interface CategoryIf {
	id: string;
	title: string;
}

export interface ProductIf {
	id: string;
	title: string;
	description: string;
	price: number;
	sizes: string[];
	image: string;
	rating: number;
	discount?: number;
}

export interface ListItemsIf {
	limit: number;
	totalItems: number;
	items: any[];
}

export interface OrderIf {
	id: string;
	avatar: string;
	fullName: string;
	status: OrderStatus;
	total: number;
	created: string;
	address: string;
}
