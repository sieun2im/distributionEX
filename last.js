const div = document.querySelector(".list");
const T1 = document.querySelector("#T1");
const GEN = document.querySelector("#GEN");
const HLE = document.querySelector("#HLE");
const button = document.querySelector("button");

const lists = JSON.parse(localStorage.getItem("lists"));

const viewContent = (event) => {
    let viewId = event.target.parentElement.id;
    if (event.target.parentElement.id === "") {
        console.log(event.target.id)
        viewId = event.target.id;
    }
    console.log(event.target.parentElement.id)
    const viewContent = lists.find(list => String(viewId) === String(list.id));
    localStorage.setItem("viewContent", JSON.stringify(viewContent));
    window.location.href = "viewContent.html";
}

const clickCategory = (team) => {
    T1.removeAttribute("class");
    GEN.removeAttribute("class");
    HLE.removeAttribute("class");
    eval(team).classList = team;
    const teamList = lists.filter(list => team === list.category);
    div.innerHTML = ""
    teamList.forEach(element => {
        const mainDiv = document.createElement("div");
        const upDiv = document.createElement("div");
        const titleDiv = document.createElement("div");
        const contentDiv = document.createElement("div");
        const dateDiv = document.createElement("div");

        mainDiv.classList = "mainDiv";
        mainDiv.setAttribute("id", element.id);

        titleDiv.classList = "titleDiv";
        titleDiv.textContent = `${element.title}`;

        contentDiv.classList = "contentDiv";
        contentDiv.textContent = `${element.content}`;

        dateDiv.classList = "dateDiv";
        dateDiv.textContent = `${element.date.substr(0, 10)}`;

        upDiv.classList = "upDiv";
        upDiv.setAttribute("id", element.id);

        mainDiv.addEventListener("click", viewContent);

        upDiv.appendChild(titleDiv);
        upDiv.appendChild(dateDiv);
        mainDiv.appendChild(upDiv);
        mainDiv.appendChild(contentDiv);
        div.appendChild(mainDiv);
    });
}

clickCategory("T1");

button.addEventListener("click", () => window.location.href = "addContent.html");

T1.addEventListener("click", () => { clickCategory("T1") });
GEN.addEventListener("click", () => { clickCategory("GEN") });
HLE.addEventListener("click", () => { clickCategory("HLE") });



