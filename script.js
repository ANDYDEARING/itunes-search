let searchResults
document.addEventListener('DOMContentLoaded', function () {
    fetch('https://itunes-api-proxy.glitch.me/search?term=jack+johnson')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data.results[0])
    })
})

document.querySelector("#search-button").addEventListener('click', function () {
    let searchContent = document.querySelector("#search-field").value
    console.log(searchContent)
})