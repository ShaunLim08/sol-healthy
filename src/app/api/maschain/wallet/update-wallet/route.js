// Update wallet user name
export async function PUT() {
	const res = await fetch(
		`${process.env.MASCHAIN_API_URL}/api/wallet/wallet/0xd001570e75b31f6764cca245874a2fb13da24eab`,
		{
			method: "PUT",
			headers: {
				client_id: process.env.MASCHAIN_CLIENT_KEY,
				client_secret: process.env.MASCHAIN_SECRET_KEY,
				"content-type": "application/json",
			},
			body: JSON.stringify({
				name: "vandyck",
			}),
		}
	);

	const data = await res.json();

	return Response.json(data);
}
