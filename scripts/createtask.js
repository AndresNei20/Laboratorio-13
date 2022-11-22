const postInput = document.getElementById('postInput');
const submitBtn = document.getElementById('submitBtn');
const localStorage = window.localStorage;



let savedPost = localStorage.getItem('posts');
let posts = [];
if(savedPost != null){
    posts = JSON.parse(savedPost);//Servira para cargar la información del localStorage
}
console.log(savedPost);
console.log(posts);


function doPost(){
    let post = new Post("Andres", postInput.value, posts.length, "toDo");
    posts.push(post);
    let json = JSON.stringify(posts);
    localStorage.setItem('posts', json);
    window.location.href = "index.html";
}

submitBtn.addEventListener('click', doPost);