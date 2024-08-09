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
			contract_address: "0xE7749981B2D6250371142C9A2076033B8aF4fbFb",
		}),
	});

	const data = await res.json();

	return Response.json(data);
}
