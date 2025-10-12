const scriptTags = document.querySelectorAll("script")

const appendCodeContainer = () => {
    const body = document.querySelector("body")
    const codeContainer = document.createElement("div")
    codeContainer.classList.add("code-container")
    body.appendChild(codeContainer)
    
    // Header
    const codeContainerHeader = document.createElement("h3")
    codeContainerHeader.innerText = "Broncode"
    
    // Content
    const codeContainerContent = document.createElement("section")
    codeContainerContent.classList.add("code-content")

    // Footer
    const codeContainerFooter = document.createElement("p")
    codeContainerFooter.classList.add("code-container-footer")
    codeContainerFooter.innerHTML = `Vergeet niet dat je altijd terug kunt naar de originele code door een <kbd>git checkout</kbd> uit te voeren in de <span title="sneltoets control + shift + \` in Visual Studio Code">terminal</span>. Dit verwijdert al je wijzigingen en zet de code terug naar de originele staat.`


    codeContainer.appendChild(codeContainerHeader)
    codeContainer.appendChild(codeContainerContent)
    codeContainer.appendChild(codeContainerFooter)   
}

const appendScript = (src) => {
    // Container waar alles in komt te staan
    const contentContainer = document.querySelector(".code-content")

    // Aanmaken van HTML elementen
    const scriptContainer = document.createElement("div")
    scriptContainer.classList.add("code-content")
    
    // const scriptContainerHeader = document.createElement("div")
    // scriptContainerHeader.classList.add("code-content-header")
    
    // Content header
    const contentHeader = document.createElement("p")
    contentHeader.classList.add("code-content-subheader")
    const path = src.split("/")
    let fileName = ""
    for (let i = 3; i < path.length; i++) {
        fileName += "/" + path[i]
    }
    contentHeader.innerHTML = `Pas zelf de code aan door <kbd title='${fileName}'>${fileName}</kbd> te openen in Visual Studio Code en de onderstaande code aan te passen.`
    
    
    const codeContainer = document.createElement("pre")
    fetch(src)
    .then(response => response.text())
    .then(code => {
        codeContainer.innerHTML = code
        hljs.highlightElement(codeContainer);
    })
    
    // HTML elementen toevoegen aan de DOM
    scriptContainer.appendChild(codeContainer)
    
    contentContainer.appendChild(contentHeader)
    contentContainer.appendChild(scriptContainer)
}
   
appendCodeContainer()

scriptTags.forEach(tag => {
    if (tag.src.includes("/pages")) {
        appendScript(tag.src)
    }
})
