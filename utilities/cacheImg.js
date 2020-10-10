



function CacheImg({imgs,startNav,router}){
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
        setTimeout(()=>{startNav(router)},2000)
        // console.log(666)
    })

  
}

export default CacheImg
