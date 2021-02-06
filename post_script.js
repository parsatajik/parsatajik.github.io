let theme = localStorage.getItem('theme'); 
console.log('got theme' + theme);
let ref = theme + '.css';
document.getElementById('post-style').href = ref;