async function f(){
    console.log('before function');
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
    console.log('after function');
    document.getElementById('posts').innerHTML = data.body
}

async function ax(){
    console.log('before function');
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(response.data);
    console.log('after function');
    document.getElementById('posts').innerHTML = response.data.body
}

ax();




