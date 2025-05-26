const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const categoryInput = document.querySelector("#cate");
const checkBtn = document.querySelector(".check");
const backBtn = document.querySelector(".back");

let list = [];
let count = 0;

const add = JSON.parse(localStorage.getItem("viewContent"));

if (add !== "add") {
    titleInput.value = add.title;
    categoryInput.value = add.category;
    contentInput.value = add.content;
}

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

    if (add === "add") {
        const newList = {
            id: count,
            date: new Date(),
            title: titleV,
            content: contentV,
            category: cateV
        }

        list.push(newList);
    } else {
        const newList = {
            id: add.id,
            date: new Date(),
            title: titleV,
            content: contentV,
            category: cateV
        }
        const indexNum = list.findIndex(item => item.id === add.id);

        list.splice(indexNum, 1, newList);
    }




    localStorage.setItem("lists", JSON.stringify(list));
    titleInput.value = "";
    contentInput.value = "";
    window.location.href = "index.html";

}

const clickBack = () => {
    window.location.href = "index.html";
}

checkBtn.addEventListener("click", clickCheck);
backBtn.addEventListener("click", clickBack);
