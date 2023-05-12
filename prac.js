let posts = [{title:'post1'}];
function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {});
}

function createPost(userPost) {
  return new Promise((resolve, rejct) => {
setTimeout(() => {
    posts.push(userPost)
   
    resolve();
}, 1000);
  });
}

function lastActivity() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      let createdAt = new Date().getHours();
      let createdAt2 = new Date().getMinutes();
      let createdAt3 = new Date().getSeconds();

      resolve(
        "Last seen at: " + createdAt + ":" + createdAt2 + ":" + createdAt3
      );

    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    posts.pop();
    resolve();
  });
}

Promise.all([createPost({title:'post2'}),lastActivity()]).then(() => {
   
      console.log(posts);
  
    lastActivity()
      .then((time) => {
        console.log(time);
      })
      .then(deletePost)
      .then(() => {
      
          console.log(posts);
        
        lastActivity().then((time) => {
          console.log(time);
        });
      });
  });

/////////////////////////////////////////////////////////////
// createPost()
