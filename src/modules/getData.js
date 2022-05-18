const getData= () => {
    return fetch('https://test-b20ad-default-rtdb.firebaseio.com/goods.json')
    .then((response) => {
        return response.json()
    })
}

export default getData