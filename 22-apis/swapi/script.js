
let urls = [];
for (let i = 1; i < 5; ++i) {
  urls.push(fetch('https://swapi.co/api/people/' + i));
}

Promise.all(urls)
  .then(response => { return Promise.all(response.map(r => r.json())); })
  .then(people => { people.map(person => console.log(person.name)); });
