export function createSlug(text: string) {
	return text.toLowerCase().split(' ').join('-');
}
