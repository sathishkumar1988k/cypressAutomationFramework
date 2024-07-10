const apiMocks = {
    validGetSingleUser: {
      statusCode: 201,
      body: {
        "data": {
            "id": 2,
            "email": "sathish.kumar@reqres.in",
            "first_name": "Sathish",
            "last_name": "Kumar",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
        "support": {
            "url": "https://reqres.in/#support-heading",
            "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
        }
    }
    },
    createTodo: {
      statusCode: 201,
      body: {
        userId: 1,
        id: 201,
        title: "new todo",
        completed: false
      }
    }
  };
  
  export default apiMocks;