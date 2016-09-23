angular.module('blogApp')
  .controller('BlogShowController', BlogShowController);

BlogShowController.$inject=['$http', '$routeParams', '$location'];

function BlogShowController($http, $routeParams, $location) {
  var vm = this;
  var blogId = $routeParams.id;
  console.log(blogId)
  $http({
    method: 'GET',
    url: "/data/blog.json"
  }).then(onBlogShowSuccess, onError);
  function onBlogShowSuccess(response){
    console.log('here\'s the data for blog', blogId, ':', response.data);
    var blogList = response.data;
    var blogMatch = blogList.find(function(blog){
      return blog.id == blogId;
    });
    vm.blog = blogMatch;
  }
  function onError(error){
    console.log('there was an error: ', error);
  }
}