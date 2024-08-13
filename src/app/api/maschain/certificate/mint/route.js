export async function POST(req) {
    const { wallet_address, to, file, attributes, name, description } = await req.json();
    const formData = new FormData();
    formData.append("wallet_address", wallet_address);
    formData.append("to", to);
    formData.append("contract_address", process.env.MASCHAIN_CERTIFICATE_CONTRACT);
    formData.append("file", file);
    formData.append("attributes", attributes);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("callback_url", "https://healthifyy.vercel.app/");

	try {
		
		const res = await fetch(
			`${process.env.MASCHAIN_API_URL}/api/certificate/mint-certificate-10mb`,
			{
				method: "POST",
				headers: {
					client_id: process.env.MASCHAIN_CLIENT_KEY,
					client_secret: process.env.MASCHAIN_SECRET_KEY,
					"content-type": "multipart/form-data",
				},
                body: formData,
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
