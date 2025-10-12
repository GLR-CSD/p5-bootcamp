
const selectPage = () => {
    const currentPage = localStorage.getItem("currentPage")
    document.querySelectorAll("iframe[name=content]").forEach(iframe => {
        iframe.src=currentPage
    })
    
    document.querySelectorAll(".sidebar ul a").forEach(anchor => {
        if (anchor.href == currentPage) {
            anchor.classList.add("__isActive")
        } else {
            anchor.classList.remove("__isActive")
        }
    })

}

// Voeg event listeners toe aan alle links in de sidebar om de huidige pagina op te slaan in localStorage
document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", event => {
        const href = event.target.href
        localStorage.setItem("currentPage", href)
        selectPage()
    })
})

// Laadt de laatst geopende pagina in de iframe wanneer de pagina geladen wordt
if (localStorage.getItem("currentPage")) {
    selectPage()
}
