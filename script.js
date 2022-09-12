console.log('hello')
const dogImageDiv = document.getElementById('dogImage')
console.log(dogImageDiv)

const getImage = () => {
 fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(json => {
    dogImageDiv.innerHTML = `<img src='${json.message}'
    height=300 width=300 />`
  }) 
}

const newdogdiv = document.getElementById('dogButton')

newdogdiv.onclick = () => getImage()

