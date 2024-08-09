import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		// Parse the incoming request body
		const userData = await req.json();

		// Validate the incoming data
		if (!userData.name || !userData.email) {
			return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
		}

		// Make the API call to create a user
		const res = await fetch(`${process.env.MASCHAIN_API_URL}/api/wallet/create-user`, {
			method: "POST",
			headers: {
				client_id: process.env.MASCHAIN_CLIENT_KEY,
				client_secret: process.env.MASCHAIN_SECRET_KEY,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: userData.name,
				email: userData.email,
			}),
		});

		// Check if the request was successful
		if (!res.ok) {
			throw new Error(`API call failed with status: ${res.status}`);
		}

		// Parse the response data
		const data = await res.json();

		// Return the response data
		return NextResponse.json(data);
	} catch (error) {
		console.error("Error creating user:", error);
		return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
	}
}
