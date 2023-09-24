const testUrl = 'https://jsonplaceholder.typicode.com/posts'
const db = 'db.json'


const xhr = (method, url, body = null) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.responseType = 'json'
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response)
      } else {
        resolve(xhr.response)
      }
    }

    xhr.onerror = () => {
      reject(xhr.response)
    }

    if (body) {
      const fileXhr = new XMLHttpRequest()
      fileXhr.open('GET', body)
      fileXhr.responseType = 'json'
      
      fileXhr.onload = () => {
        if (fileXhr.status === 200) {
          xhr.send(JSON.stringify(fileXhr.response))
        } else {
          reject(fileXhr.response)
        }
      }

      fileXhr.onerror = () => {
        reject(fileXhr.response)
      }

      fileXhr.send()
    } else {
      xhr.send()
    }
  })

}

const getData = () => {
  fetch('db.json')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      sendData(data)
    })
    .catch(error => {
      console.log(error + ' user не найден');
    })
}

const sendData = (data) => {
  fetch(testUrl, {
    method: 'POST',
    body: JSON.stringify({ data }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch(error => {
      console.log(error + ' user не найден');
    })
}

getData()

xhr('GET',db)
.then(data => console.log(data))
.catch(error => console.log(error))

xhr('POST',testUrl, db)
.then(response => console.log(response))
.catch(error => console.log(error))



