
const update = () => {
    const text = document.querySelector("#text");

    const view = document.querySelector("#view");

    view.srcdoc = text.value;

    console.log(text.value)
}