const scriptTags = document.querySelectorAll("script")

const appendScript = (src) => {
    
    // Container waar alles in komt te staan
    const contentContainer = document.querySelector("body")

    // Aanmaken van HTML elementen
    const scriptContainer = document.createElement("div")
    scriptContainer.classList.add("code-container")
    
    const scriptContainerHeader = document.createElement("div")
    scriptContainerHeader.classList.add("code-container-header")
    
    const scriptHeader = document.createElement("h3")
    scriptHeader.innerText = "Broncode"
    
    const scriptSubHeader = document.createElement("p")
    scriptSubHeader.classList.add("code-container-subheader")
    const path = src.split("/")
    let fileName = ""
    for (let i = 3; i < path.length; i++) {
        fileName += "/" + path[i]
    }
    scriptSubHeader.innerHTML = `Pas zelf de code aan door <kbd title='${fileName}'>${fileName}</kbd> te openen in Visual Studio Code en de code aan te passen.`
    
    const scriptFooter = document.createElement("p")
    scriptFooter.classList.add("code-container-footer")
    scriptFooter.innerHTML = `Vergeet niet dat je altijd terug kunt naar de originele code door een <kbd>git checkout</kbd> uit te voeren in de terminal. Dit verwijdert al je wijzigingen en zet de code terug naar de originele staat.`
    
    const codeContainer = document.createElement("pre")
    fetch(src)
    .then(response => response.text())
    .then(code => {
        codeContainer.innerHTML = code
        hljs.highlightElement(codeContainer);
    })
    
    // HTML elementen toevoegen aan de DOM
    scriptContainerHeader.appendChild(scriptHeader)
    scriptContainerHeader.appendChild(scriptSubHeader)
    scriptContainer.appendChild(codeContainer)
    scriptContainer.appendChild(scriptFooter)
    
    contentContainer.appendChild(scriptContainerHeader)
    contentContainer.appendChild(scriptContainer)
}
   


scriptTags.forEach(tag => {
    if (tag.src.includes("/pages")) {
        appendScript(tag.src)
    }
})
