// Check token balance of user's wallet
export async function POST(req) {
	const { wallet_address, name, data, entity_id, content } = await req.json();
    const metadata = {
        name: name,
        data: data,
        entity_id: entity_id,
        content: content
    }

	const res = await fetch(`${process.env.MASCHAIN_API_URL}/api/audit/audit`, {
		method: "POST",
		headers: {
			client_id: process.env.MASCHAIN_CLIENT_KEY,
			client_secret: process.env.MASCHAIN_SECRET_KEY,
			"content-type": "application/json",
		},
		body: JSON.stringify({
			wallet_address: wallet_address, // user wallet address
			contract_address: process.env.MASCHAIN_AUDIT_CONTRACT,
            metadata: metadata,
            callback_url: "https://postman-echo.com/post?"
		}),
	});

	const result = await res.json();

	return Response.json(result);
}
