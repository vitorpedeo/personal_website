'use client';

import Error from 'next/error';

export default function NotFound() {
	return (
		<html lang="en">
			<body className="font-sans">
				<Error statusCode={404} />
			</body>
		</html>
	);
}
