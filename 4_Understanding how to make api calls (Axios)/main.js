//AXIOS GLOBALS
axios.defaults.headers.common["X-Auth-Token"] = "some";
// GET REQUEST
function getTodos() {
  //  axios({
  //     method:'get',
  //     url:'https://jsonplaceholder.typicode.com/todos',
  //     params:{
  //         _limit:5
  //     }
  //  })
  //  .then(res=>showOutput(res))
  //  .catch(err=>console.log(err))

  axios
    .get("https://jsonplaceholder.typicode.com/todos", { timeout: 5000 })
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// POST REQUEST
function addTodo() {
  //      axios({
  //     method:'post',
  //     url:'https://jsonplaceholder.typicode.com/todos',
  //    data:{
  //        title:'new todo',
  //        completed:false
  //     }
  //  })
  //  .then(res=>showOutput(res))
  //  .catch(err=>console.log(err))

  ///short method

  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      title: "Updated Todo",
      completed: true,
    })
    .then((res) => showOutput(res))
    .catch((err) => showOutput(err));
}

// PUT/PATCH REQUEST
//put is usually meant to replace the entire resource put removes userId
//patch just add id to it. it will not remove user id
function updateTodo() {
  // axios.put('https://jsonplaceholder.typicode.com/todos/1',{ //we updated the id /1
  //     title:'new todo',
  //     completed:true
  //   })
  //   .then(res=>showOutput(res))
  //   .catch(err=>showOutput(err))
  axios
    .patch("https://jsonplaceholder.typicode.com/todos/2", {
      //we updated the id with /2 in the end
      title: "new todo",
      completed: true,
    })
    .then((res) => showOutput(res))
    .catch((err) => showOutput(err));
}

// DELETE REQUEST
//it will just delete data
function removeTodo() {
  axios
    .delete("https://jsonplaceholder.typicode.com/todos/2")

    .then((res) => showOutput(res))
    .catch((err) => showOutput(err));
}

// SIMULTANEOUS DATA
function getData() {
  axios
    .all([
      axios.get("https://jsonplaceholder.typicode.com/todos", {
        params: { limit: 5 },
      }),
      axios.get("https://jsonplaceholder.typicode.com/posts", {
        params: { limit: 5 },
      }),
    ])
    .then(axios.spread((todos, posts) => showOutput(todos)))
    .catch((err) => {
      console.log(err);
    });
}

// CUSTOM HEADERS
//we use headers to send common things
// if we dont have headers we have to send common things again and again  
//headers solve this problem 
//so with the help of headers we dont have to send them again and again
function customHeaders() {
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: "sometoken",
    },
  };

  axios
    .post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        //we updated the id /1
        title: "new todo",
        completed: true,
      },
      config
    )
    .then((res) => showOutput(res))
    .catch((err) => showOutput(err));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  const options = {
    method: "post",
    url: "https://jsonplaceholder.typicode.com/todos",
    data: {
      title: "hello world",
    },
    transformResponse: axios.defaults.transformResponse.concat((data) => {
      data.title = data.title.toUpperCase();
      return data;
    }),
  };
  axios(options).then((res) => {
    showOutput(res);
  });
}

// ERROR HANDLING
function errorHandling() {
  axios
    .get("https://jsonplaceholder.typicode.com/todoss", {
      //  validateStatus:function(status){
      //     return status<500//reject only if status is greater or equal to 500
      //  }
    })
    .then((res) => showOutput(res))
    .catch((err) => {
      if (err.response) {
        //server responded with a status other than 200 range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);

        if (err.response.status === 404) {
          alert("error:page not found");
        }
      } else if (err.request) {
        //Request was made but no response
        console.log(err.request);
      } else {
        console.error(err.message);
      }
    });
}

// CANCEL TOKEN
function cancelToken() {
  const source = axios.CancelToken.source();

  axios
    .get("https://jsonplaceholder.typicode.com/todos", {
      CancelToken: source.token,
    })
    .then((res) => showOutput(res))
    .catch((thrown) => {
      if (axios.isCancel(thrown)) {
        console.log("request canceld", thrown.message);
      }
    });
  if (true) {
    source.cancel("Reqeust canceled!");
  }
}

// INTERCEPTING REQUESTS & RESPONSES

axios.interceptors.request.use(
  (config) => {
    console.log(`${config.method.toUpperCase()} request sent to ${
      config.url
    } at 
    ${new Date().getTime()}`);
    return config;
  },
  (error) => Promise.reject(error)
);

// AXIOS INSTANCES
const axiosInstance = axios.create({
  //other custom setting
  baseURL: "https://jsonplaceholder.typicode.com",
});
axiosInstance.get("/comments").then((res) => showOutput(res));

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("headers").addEventListener("click", customHeaders);
document
  .getElementById("transform")
  .addEventListener("click", transformResponse);
document.getElementById("error").addEventListener("click", errorHandling);
document.getElementById("cancel").addEventListener("click", cancelToken);
