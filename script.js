const URLStart = "https://itunes-api-proxy.glitch.me/search?"

document.querySelector("#search-button").addEventListener('click', function () {
    let searchContent = document.querySelector("#search-field").value
    let searchURL = URLStart + "term=" + encodeURIComponent(searchContent)
    fetch(searchURL)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        makeSearchResults(data.results)
        console.log(data.results[0])
    })
})

document.querySelector("#search-field").addEventListener("keydown", function(event){
    if (event.key === 'Enter') {
        document.querySelector("#search-button").click()
    }
})

function makeSearchResults(resultsArray){
    document.querySelector('#results').innerHTML = ""
    for (result of resultsArray){
        const resultDiv = document.createElement('div')
        const resultPicImg = document.createElement('img')
        resultPicImg.src = result.artworkUrl100
        resultPicImg.alt = 'cover art'
        resultDiv.appendChild(resultPicImg)
        const resultTitle = document.createElement('p')
        resultTitle.innerText = result.trackName
        resultDiv.appendChild(resultTitle)
        const resultArtist = document.createElement('p')
        resultArtist.innerText = result.artistName
        resultDiv.appendChild(resultArtist)
        resultDiv.classList.add('result-item')
        document.querySelector('#results').appendChild(resultDiv)

        // const listItem = document.createElement('li')
        // listItem.innerText = newLikeForm.querySelector('input').value
        // newLikeForm.querySelector('input').value = ''
        // document.querySelector('#likes').appendChild(listItem)
    }
}
