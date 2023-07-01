const apiKey = "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"

const url = "https://api.openai.com/v1/completions" 

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
        'model': 'text-davinci-003',
        'prompt': 'Sound sympathetic in five words or less.'
    })
}).then(response => response.json()).then(data => console.log(data))

//›{id: "cmpl-78r0C25HIzI0VryLgb8HXiBr3Xm8v", object: "text_completion", created: 1682344720, model: "text-davinci-003", choices: [{text: " I'm here for you.", index: 0, logprobs: null, finish_reason: "stop"}], usage: {prompt_tokens: 8, completion_tokens: 8, total_tokens: 16}}