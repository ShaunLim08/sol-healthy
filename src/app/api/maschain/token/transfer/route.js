// Transfer tokens from one wallet to another
export async function POST(req) {
	const { amount, walletAddress } = await req.json();

	const res = await fetch(`${process.env.MASCHAIN_API_URL}/api/token/token-transfer`, {
		method: "POST",
		headers: {
			client_id: process.env.MASCHAIN_CLIENT_KEY,
			client_secret: process.env.MASCHAIN_SECRET_KEY,
			"content-type": "application/json",
		},
		body: JSON.stringify({
			wallet_address: walletAddress, // user's wallet address (you'll need to get this from the authenticated user)
			to: process.env.MASCHAIN_VENDOR_ADDRESS,
			amount: amount,
			contract_address: process.env.MASCHAIN_TOKEN_CONTRACT,
			callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/maschain/callback/fund-project`,
		}),
	});

	const data = await res.json();
	return Response.json(data);
}
