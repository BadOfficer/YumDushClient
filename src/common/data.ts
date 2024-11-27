import { OrderStatus, Role } from './enums';
import { CategoryIf, ListItemsIf, OrderIf, ProductIf, UserIf } from './types';

export const user: UserIf = {
	id: 1,
	fullName: 'Taras Bondarenko',
	role: Role.CUSTOMER,
	email: 'tarasbondarenko2005@example.com',
	address: '',
	avatar: 'avatar.jpg',
};

export const categories: CategoryIf[] = [
	{
		id: '0',
		title: 'All',
	},
	{
		id: '1',
		title: 'Beverages',
	},
	{
		id: '2',
		title: 'Desserts',
	},
	{
		id: '3',
		title: 'Main Dishes',
	},
	{
		id: '4',
		title: 'Snacks',
	},
	{
		id: '5',
		title: 'Breakfast',
	},
];

export const products: ProductIf[] = [
	{
		id: 'p1',
		title: 'Cappuccino',
		description: 'A rich and creamy cappuccino topped with frothy milk.',
		price: 3.5,
		sizes: ['Small', 'Medium', 'Large'],
		image: 'cappuccino.png',
		rating: 4.5,
		discount: 3.0,
	},
	{
		id: 'p2',
		title: 'Chocolate Cake',
		description: 'A decadent slice of chocolate cake with creamy frosting.',
		price: 4.0,
		sizes: ['Single', 'Family'],
		image: 'chocolate-cake.jpg',
		rating: 4.8,
	},
	{
		id: 'p3',
		title: 'Pepperoni Pizza',
		description:
			'A classic pizza topped with spicy pepperoni and melted cheese.',
		price: 8.5,
		sizes: ['Medium', 'Large'],
		image: 'pepperoni-pizza.jpg',
		rating: 4.6,
	},
	{
		id: 'p4',
		title: 'French Fries',
		description: 'Golden and crispy French fries, perfect for a quick snack.',
		price: 2.5,
		sizes: ['Small', 'Medium', 'Large'],
		image: 'french-fries.jpg',
		rating: 4.2,
	},
	{
		id: 'p5',
		title: 'Pancakes',
		description: 'Fluffy pancakes served with syrup and butter.',
		price: 5.0,
		sizes: ['Short Stack', 'Full Stack'],
		image: 'pancakes.jpg',
		rating: 4.7,
	},
	{
		id: 'p6',
		title: 'Berry Smoothie',
		description: 'A refreshing smoothie made with fresh berries and yogurt.',
		price: 4.5,
		sizes: ['Regular', 'Large'],
		image: 'berry-smoothie.jpg',
		rating: 4.4,
	},
	{
		id: 'p7',
		title: 'Chicken Wrap',
		description: 'Grilled chicken wrapped with fresh veggies and sauce.',
		price: 6.0,
		sizes: ['Regular', 'Large'],
		image: 'chicken-wrap.jpg',
		rating: 4.5,
	},
	{
		id: 'p8',
		title: 'Ice Cream Sundae',
		description: 'Vanilla ice cream topped with hot fudge and sprinkles.',
		price: 3.0,
		sizes: ['Small', 'Regular'],
		image: 'ice-cream-sundae.jpg',
		rating: 4.9,
	},
	{
		id: 'p9',
		title: 'Veggie Salad',
		description:
			'A fresh salad with lettuce, tomatoes, cucumbers, and dressing.',
		price: 4.0,
		sizes: ['Small', 'Regular', 'Large'],
		image: 'veggie-salad.jpg',
		rating: 4.3,
	},
	{
		id: 'p10',
		title: 'BBQ Burger',
		description: 'Juicy burger with BBQ sauce, cheddar, and crispy onions.',
		price: 7.5,
		sizes: ['Single', 'Double'],
		image: 'bbq-burger.jpg',
		rating: 4.6,
	},
];

export const paginatedProducts: ListItemsIf = {
	limit: 10,
	totalItems: products.length,
	items: products,
};

export const orders: OrderIf[] = [
	{
		id: '7a87vlr4',
		avatar: 'avatar-3.jpg',
		fullName: 'Alice Johnson',
		status: OrderStatus.ACTIVE,
		total: 54.99,
		created: '2024-11-22T10:30:00Z',
		address: '123 Elm Street, Springfield',
	},
	{
		id: '9k45tcq2',
		avatar: '',
		fullName: 'Bob Smith',
		status: OrderStatus.CONFIRMED,
		total: 89.75,
		created: '2024-11-21T14:15:00Z',
		address: '456 Maple Avenue, Rivertown',
	},
	{
		id: '1q2w3e4r',
		avatar: '',
		fullName: 'Catherine Lee',
		status: OrderStatus.DELIVERED,
		total: 0,
		created: '2024-11-20T16:45:00Z',
		address: '789 Pine Lane, Oakwood',
	},
	{
		id: 'zxcvbnm8',
		avatar: 'avatar-2.jpg',
		fullName: 'David Brown',
		status: OrderStatus.ACTIVE,
		total: 120.49,
		created: '2024-11-22T08:00:00Z',
		address: '321 Birch Street, Maple City',
	},
	{
		id: 'asdfghj7',
		avatar: 'avatar-4.jpg',
		fullName: 'Evelyn Martinez',
		status: OrderStatus.ACTIVE,
		total: 67.99,
		created: '2024-11-22T12:20:00Z',
		address: '654 Oak Drive, Pineville',
	},
];
