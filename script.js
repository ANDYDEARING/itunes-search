const URLStart = "https://itunes-api-proxy.glitch.me/search?term="

document.querySelector("#search-button").addEventListener('click', function () {
    let searchContent = document.querySelector("#search-field").value
    let searchModButtons = document.querySelectorAll(".search-type")
    let searchMod = getCheckedRadioValue(searchModButtons)
    let searchURL = URLStart + encodeURIComponent(searchContent) + "&entity=song" + searchMod
    fetch(searchURL)
    .then(function (response) {
        console.log(response)
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        makeSearchResults(data.results)
    })
})

function getCheckedRadioValue (radioSet) {
    for (button of radioSet){
        if (button.checked){
            return button.value
        }
    }
}

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

        const resultButton = document.createElement('button')
        resultButton.innerText = '▶︎'
        resultButton.value = result.previewUrl
        resultButton.name = `${result.artistName} - ${result.trackName}`
        resultDiv.appendChild(resultButton)

        resultButton.addEventListener('click', function() {
            document.querySelector('#music-player').src = resultButton.value
            document.querySelector('#music-caption').innerText = resultButton.name
            document.querySelector('#music-player').autoplay = 'true'
        })
        resultDiv.classList.add('result-item')
        
        document.querySelector('#results').appendChild(resultDiv)
    }
}
