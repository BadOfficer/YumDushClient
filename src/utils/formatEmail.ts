export function formatEmail(email: string, maxChars: number) {
	const [localPart, domain] = email.split('@');

	if (email.length < maxChars || domain.length >= maxChars) {
		return email;
	}

	const availableChars = maxChars - domain.length - 1;

	if (availableChars <= 3) {
		return email.substring(0, maxChars - 3) + '...';
	}

	const startChars = Math.ceil(availableChars / 2);
	const endChars = Math.floor(availableChars / 2);

	return `${localPart.substring(0, startChars)}...${localPart.substring(
		localPart.length - endChars
	)}@${domain}`;
}
