function getTodos(callback){
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
    
        if(request.readyState === 4 & request.status === 200){
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if(request.readyState === 4){
            callback('CANNOT BE FETCHED', undefined);
        }
    })
    request.open('GET', 'todos.json');
    request.send();

}

getTodos((error, data) => {
    if(error){
        console.log('CANNOT BE FETCHED')
    } else if (data){
        console.log(data, 'Fetched!')
    }
});