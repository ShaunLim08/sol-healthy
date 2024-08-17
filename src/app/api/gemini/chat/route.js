const { GoogleGenerativeAI } = require("@google/generative-ai");

export async function POST(req) {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
	const { histories, prompt } = await req.json();
    const chat = model.startChat(histories);
      let result = await chat.sendMessage(prompt + "Only generate the general tips with detail suggestions without any other generated text, provide in plaintext without markdown only.");
	return Response.json(result.response.text());
}
