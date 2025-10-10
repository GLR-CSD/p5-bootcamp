
// Voeg event listeners toe aan alle links in de sidebar om de huidige pagina op te slaan in localStorage
document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", event => {
        const href = event.target.href
        localStorage.setItem("currentPage", href)
    })
})

// Laadt de laatst geopende pagina in de iframe wanneer de pagina geladen wordt
if (localStorage.getItem("currentPage")) {
    const currentPage = localStorage.getItem("currentPage")
    document.querySelectorAll("iframe[name=content]").forEach(iframe => {
        iframe.src=currentPage
    })
}