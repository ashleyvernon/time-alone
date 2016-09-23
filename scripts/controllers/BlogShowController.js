angular.module('blogApp')
  .controller('BlogShowController', BlogShowController);

BlogShowController.$inject=['$http', '$routeParams', '$location'];
function BlogShowController($http, $routeParams, $location) {
  var vm = this;
  var blogId = $routeParams.id;
  console.log(blogId)
  $http({
    method: 'GET',
    url: "data/blog.json/"+blogId
  }).then(onBlogShowSuccess, onError);


  function onBlogShowSuccess(response){
    console.log('here\'s the data for blog', blogId, ':', response.data);
    vm.blog = response.data;
  }

  function onError(error){
    console.log('there was an error: ', error);
  }
}