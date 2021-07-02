//pesquisar texto da noticia
const titles = document.querySelectorAll('.titlepost');
const searchbar = document.getElementById('searchbar');
const articles = document.querySelectorAll('article');

searchbar.addEventListener('keyup', ()=>{
    const searchValue = searchbar.value;
    for (let i=0; i < articles.length; i++){
        let titleContent = titles[i].innerText;
        let corresponde = titleContent.toLowerCase().indexOf(searchValue) >= 0;
        articles[i].style.display = corresponde ? "" : "none";
    }
});
 //


 //curtir noticia

let likes = document.querySelectorAll('.js-like');

for (let like of likes) {
    like.addEventListener('click', () => liked(like));
}

function liked(item) {
    if (item.classList.contains('far')) {
        item.classList.remove('far');
        item.classList.add('fas')
    } else {
        item.classList.remove('fas');
        item.classList.add('far')
    }
}