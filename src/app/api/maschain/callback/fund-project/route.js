import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const callbackData = await req.json();

		console.log("Received fund-project callback:", callbackData);

		if (callbackData.status === 200 && callbackData.result.status === "success") {
			const { transactionHash, nonce, from } = callbackData.result;

			// Here you should:
			// 1. Update your database with the transaction details
			// 2. Update the project's funding status
			// 3. Notify the user that their funding was successful
			// 4. Perform any other necessary actions

			// For now, we'll just log the success
			console.log(`Project funded successfully. Transaction hash: ${transactionHash}`);
		} else {
			console.error("Project funding was not successful:", callbackData);
			// Handle the error, possibly by notifying the user or retrying the operation
		}

		return NextResponse.json({ message: "Callback received successfully" }, { status: 200 });
	} catch (error) {
		console.error("Error processing fund-project callback:", error);
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
	}
}
