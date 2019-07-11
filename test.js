// used for demonstration

document.querySelector('#search-button').addEventListener('click', function () {
    // console.log("Made it here")
    userInput = document.querySelector('#search-field').value
    urlBase = "https://itunes-api-proxy.glitch.me/search?term="
    urlBase += encodeURIComponent(userInput)
    fetch(urlBase)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {

        console.log(data.results)
        let songDiv = document.createElement('div')
        songDiv.innerHTML = `<p>${data.results[0].trackName}</p>`
        console.log(document.querySelector('#results'))
        document.querySelector('#results').appendChild(songDiv)
        // function planetNode (planet) {
        //     const planetDiv = document.createElement('div')
        //     planetDiv.classList.add('planet', 'ba', 'bw2', 'purple')
            planetDiv.innerHTML = `
              <h3 class="f1 pink">${planet.name}</h3>
              <p>Population: ${planet.population}</p>
              <p>Climate: ${planet.climate}</p>
              <button class="get-planet-data" data-url="${planet.url}">Find out more about ${planet.name}</button>
            `
        //     return planetDiv
        //   }
    })
})
