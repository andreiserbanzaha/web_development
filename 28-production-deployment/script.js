
const app = require('http').createServer((req, res) => res.send('hello'));

const PORT = process.env.PORT;
app.listen(PORT, () => { console.log(`Server listening to port ${PORT}`); });

console.log(PORT);
