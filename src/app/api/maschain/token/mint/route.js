export async function POST(req) {
	const { amount, walletAddress } = await req.json();

	const res = await fetch(`${process.env.MASCHAIN_API_URL}/api/token/mint`, {
		method: "POST",
		headers: {
			client_id: process.env.MASCHAIN_CLIENT_KEY,
			client_secret: process.env.MASCHAIN_SECRET_KEY,
			"content-type": "application/json",
		},
		body: JSON.stringify({
			wallet_address: process.env.MASCHAIN_OWNER_ADDRESS, // This should be the admin wallet that mints tokens
			to: walletAddress, // The user's wallet address
			amount: amount,
			contract_address: process.env.MASCHAIN_TOKEN_CONTRACT,
			callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/maschain/callback/top-up`,
		}),
	});

	const data = await res.json();

	return Response.json(data);
}
