const h2 = document.querySelector(".title");
const cate = document.querySelector(".category");
const p = document.querySelector(".content");
const deleteBtn = document.querySelector(".delete");
const backBtn = document.querySelector(".back");

const viewContent = JSON.parse(localStorage.getItem("viewContent"));
let lists = JSON.parse(localStorage.getItem("lists"));

h2.textContent = viewContent.title;
h2.classList = "title";
cate.textContent = viewContent.category;
cate.classList = viewContent.category
p.textContent = viewContent.content;


const deleteList = () => {
    lists = lists.filter(list => viewContent.id !== list.id);
    localStorage.setItem("lists", JSON.stringify(lists));
}

deleteBtn.addEventListener("click", deleteList);

const clickBack = () => {
    window.location.href = "index.html";
}

backBtn.addEventListener("click", clickBack);
