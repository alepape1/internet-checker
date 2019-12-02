const https = require('https');

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
  let data = '';

  // Un fragmento de datos ha sido recibido.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // Toda la respuesta ha sido recibida. Imprimir el resultado.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
