



function CacheImg({imgs,setStart}){
    console.log(imgs)
    
    const allPromise = imgs.map((src)=>{
        return new Promise((resolve,reject) => {
            const img = new Image()
            img.src = src
            img.onload = function(){
                resolve('1')
                console.log('ok')
            }
            img.onerror = function(){
                reject('0')
                console.log('error')
            }
        })
    })
    console.log(allPromise)
    const all = Promise.all(allPromise)
    all.then((value)=>{
        setTimeout(()=>{setStart(true)},1000)
        console.log(666)
    })

  
}

export default CacheImg
