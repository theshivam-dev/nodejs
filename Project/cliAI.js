const input = process.argv.slice(2).join(" ");
const key = process.env.API_KEY
const URL = 'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2'

const headers = {
    'Content-Type': 'application/json',
    "Authorization": `Bearer ${key}`
}
const chatGpt = async (prompt) => {
    const body = {
        inputs: prompt,
        parameters: { temperature: 0.7 }
    };

    const method = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    }

    try {
        const response = await fetch(URL, method)
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
chatGpt(input)
