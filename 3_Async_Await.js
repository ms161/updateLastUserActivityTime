// console.log("person1:shows ticket");
// console.log("person2:shows ticket");

// const promiseWifeBringingTickets = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("ticket");
//   }, 3000);
// });

// const getPopcorn = promiseWifeBringingTickets.then((t) => {
//   console.log("wife:i have the tickets");
//   console.log(`husband:we should go in`);
//   console.log(`wife:no i am hungry`);
//   return new Promise((resolve, reject) => {
//     resolve(`${t} popcorn`);

//   });
// });
// const getButter = getPopcorn.then((t) => {
//   console.log("husband:i got some popcorn");
//   console.log(`husband:we should go in`);
//   console.log(`wife:i need butter on my popcorn`);
//   return new Promise((resolve, reject) => {
//     resolve(`${t} butter`);
//   });
// });

// // getButter.then((t) => {
// //   console.log(t);
// // });

// console.log("person4:shows ticket");
// console.log("person5:shows ticket");

// /ASYNC AWAIT///////////////
// /ASYNC AWAIT///////////////
// /ASYNC AWAIT///////////////
// /ASYNC AWAIT///////////////

// console.log("person1:shows ticket");
// console.log("person2:shows ticket");

//async always return promise

// const preMovie = async () => {
//   const promiseWifeBringingTickets = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("ticket");
//     }, 3000);
//   });
//   let getPopcorn = new Promise((resolve, reject) => {
//     resolve("popcorn");
//   });
//   let getButter = new Promise((resolve, reject) => {
//     resolve("butter");
//   });
//   let getColdDrinks = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("coldDrink");
//     }, 2000);
//   });
//   let ticket = await promiseWifeBringingTickets;
//   console.log("wife:i have the tickets");
//   console.log(`husband:we should go in`);
//   console.log(`wife:no i am hungry`);

//   let popcorn = await getPopcorn;
//   console.log(`husband:i got some ${popcorn}`);
//   console.log(`husband:we should go in`);
//   console.log(`wife:i need butter on my popcorn`);

//   let butter = await getButter;
//   console.log(`husband:i got some ${butter}`);
//   console.log(`husband:anything else`);
//   console.log(`wife:lets go we are geeting late`);

//   let ColdDrinks = await getColdDrinks;
//   console.log(ColdDrinks);

//   return ticket;
// };

// preMovie().then((m) => {
//   console.log(m);
// });

// console.log("person4:shows ticket");
// console.log("person5:shows ticket");

// const preMovie = async () => {
//     const promiseWifeBringingTickets = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("ticket");
//       }, 3000);
//     });
//     let getPopcorn = new Promise((resolve, reject) => {
//       resolve("popcorn");
//     });
//     let getButter = new Promise((resolve, reject) => {
//       resolve("butter");
//     });
//     let getColdDrinks = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("coldDrink");
//       }, 2000);
//     })

//     let [popcorn,Butter,ColdDrinks]=await Promise.all([getPopcorn,getButter,getColdDrinks])
// }

let posts=[1,2,3,4]

async function main(){



async function createPost(userPost){
    posts.push(userPost)
}

async function deletePost(){
    let z=posts.pop()
    console.log(z)
    
   
}
 
}


