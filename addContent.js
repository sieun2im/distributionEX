const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const categoryInput = document.querySelector("#cate");
const checkBtn = document.querySelector(".check");
const backBtn = document.querySelector(".back");

let list = [];
let count = 0;

const clickCheck = (event) => {
    event.preventDefault();
    if (JSON.parse(localStorage.getItem("lists")) !== null) {
        list = JSON.parse(localStorage.getItem("lists"));
        count = list[list.length - 1].id;
        count = count + 1;
    }

    const titleV = titleInput.value;
    const contentV = contentInput.value;
    const cateV = categoryInput.value;


    const newList = {
        id: count,
        date: new Date(),
        title: titleV,
        content: contentV,
        category: cateV
    }

    list.push(newList);

    localStorage.setItem("lists", JSON.stringify(list));
    titleInput.value = "";
    contentInput.value = "";
    window.location.href = "last.html";

}

const clickBack = () => {
    window.location.href = "last.html";
}

checkBtn.addEventListener("click", clickCheck);
backBtn.addEventListener("click", clickBack);
