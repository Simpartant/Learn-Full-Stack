function a(user, pass){
  return new Promise((resolve, reject) => {
     setTimeout(() => {
         resolve('My name')
     }, 1000)
  })
}

function b(user){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('123')
        }, 1000)
    })
}

function c(token){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('sssss')
        }, 1000)
    })
}

// async function run(){
//     try{

//         var us = await a("son", "123");
//         var ab = await b(us.user);
//         var ad = await c(ab.user);
    
//         console.log(ad);

//     }catch(err){
//         console.log("Error in run");
//     }
   
// };

// run();

a('son', '123')
.then(q => b(q.user))
.then(name => c(name.user))
.then(showName => console.log(showName))
.catch(err => "loi")