export async function POST(req) {
    const { wallet_address } = await req.json();

	try {
		
		const res = await fetch(
			`${process.env.MASCHAIN_API_URL}/api/token/get-audit-transaction`,
			{
				method: "GET",
				headers: {
					client_id: process.env.MASCHAIN_CLIENT_KEY,
					client_secret: process.env.MASCHAIN_SECRET_KEY,
					"content-type": "application/json",
				},
                body: JSON.stringify({
                    wallet_address: wallet_address, // user wallet address
                    contract_address: process.env.MASCHAIN_AUDIT_CONTRACT,
                }),
			}
		);
	
		const data = await res.json();
	
		return Response.json(data);
	} catch (error) {
		return Response.json({
			"status": "Error"
		})
	}
}
