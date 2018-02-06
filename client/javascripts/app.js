angular.module('nodeTodo', []).controller('mainController', ($scope, $http) => {
  $scope.formData = {};
  $scope.todoData = {};
  // Get all todos
  $http.get('/api/v1/inuheats')
  .success((data) => {
    $scope.todoData = data;
    console.log(data);
  })
  .error((error) => {
    console.log('Error: ' + error);
  });
});

// Create a new todo
$scope.createTodo = () => {
  $http.post('/api/v1/inuheats', $scope.formData)
  .success((data) => {
    $scope.formData = {};
    $scope.todoData = data;
    console.log(data);
  })
  .error((error) => {
    console.log('Error: ' + error);
  });
};

// Delete a todo
$scope.deleteTODO = (todoID) => {
  $http.delete('/api/v1/inuheats/' + todoID)
  .success((data) => {
    $scope.todoData = data;
    console.log(data);
  })
  .error((data) => {
    console.log('Error: ' + data);
  });
};
