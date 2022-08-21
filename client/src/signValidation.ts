export function emailValdation(email: string): boolean {
	const filter =
		/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	return filter.test(email);
}
