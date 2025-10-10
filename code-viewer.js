const scriptTags = document.querySelectorAll("script")

const appendScript = (src) => {
    console.log("Append", src)
    const contentContainer = document.querySelector("body")
    const scriptContainer = document.createElement("pre")
    scriptContainer.classList.add("code-container")

    fetch(src)
        .then(response => response.text())
        .then(code => {
            console.log(code)
            scriptContainer.innerHTML = code
            hljs.highlightElement(scriptContainer);
        })

    contentContainer.appendChild(scriptContainer)
}
   


scriptTags.forEach(tag => {
    if (tag.src.includes("/pages")) {
        appendScript(tag.src)
    }
})
