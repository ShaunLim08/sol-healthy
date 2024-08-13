// Check token balance of user's wallet
export async function POST(req) {
	const { wallet_address } = await req.json();

	const res = await fetch(`${process.env.MASCHAIN_API_URL}/api/token/balance`, {
		method: "POST",
		headers: {
			client_id: process.env.MASCHAIN_CLIENT_KEY,
			client_secret: process.env.MASCHAIN_SECRET_KEY,
			"content-type": "application/json",
		},
		body: JSON.stringify({
			wallet_address: wallet_address, // user wallet address
			contract_address: process.env.MASCHAIN_TOKEN_CONTRACT,
		}),
	});

	const data = await res.json();

	return Response.json(data);
}
