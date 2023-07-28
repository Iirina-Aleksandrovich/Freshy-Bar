const API_URL = "https://verbose-zigzag-noodle.glitch.me/";

const getData = () => {
    const response = fetch(API_URL + "/api/goods")
}

const init = () => {
    const goodsListElem = document.querySelector(".goods__list");
    /* '=' знак присвоить, querySelector ищит по селектору, '.' означает класс */
    getData();
}

init();