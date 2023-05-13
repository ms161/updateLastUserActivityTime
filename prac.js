

let posts = [{ title: "this is first post" }];

async function main() {
  function updateLastUserActivityTime(newPost) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(newPost);
        resolve(posts);
      }, 2000);
    });
  }
  function lastActivity() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let hrs = new Date().getHours();
        let minutes = new Date().getMinutes();
        resolve([`${hrs}:${minutes}:${new Date().getSeconds()}`]);
      }, 1000);
    });
  }
  let deletePost = new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.pop();
      resolve();
    }, 7000);
  });

  await updateLastUserActivityTime({ title2: "posts2" });
  let time = await lastActivity();
  console.log(posts);

  console.log(time[0]);

  await deletePost;
  let time2 = await lastActivity();
  console.log(posts);
  console.log(time2[0]);

  ///PROMISE.ALL////////////////
  ///PROMISE.ALL////////////////
  ///PROMISE.ALL////////////////

  let [post, time4] = await Promise.all([
    updateLastUserActivityTime({ title3: "this is 3rd post" }),
    lastActivity(),
  ]);
  console.log(posts);
}

main();

