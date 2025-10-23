if('serviceWorker' in navigator){
    window.addEventListener('load', function(){
        this.navigator.serviceWorker.register('sw.js')
        .then(function(registration){
            console.log('ServiceWorker registration successful')    
        })
        .catch(function(err){
            console.log('ServiceWorker registration failed')
        })
    })
}

