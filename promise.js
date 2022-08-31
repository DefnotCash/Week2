let newPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(cash => {
let result = cash.map(user => `<li>${user.title}</li>`)
    document.body.innerHTML = result.join("")});
console.log(newPromise);