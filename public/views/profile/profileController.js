angular.module('tonight')

.controller('ProfileCtrl', ['$scope', 'User', '$rootScope', function($scope, User, $rootScope) {

// open modal when picture box is clicked on
  $scope.changePicture = function(position) {
    // if a picture is already there
    if ($rootScope.user['picture' + position]){
     $scope.photoCloseButton = 'Delete Photo';
     $('#closeButton').addClass('btn-warning');
     $('#closeButton').removeClass('btn-default');
     // $('#closeButton').toggleClass('btn-default btn-warning');
    } else {  // if no picture
      $scope.photoCloseButton = 'Close';
      $('#closeButton').addClass('btn-default');
     $('#closeButton').removeClass('btn-warning');
      // $('#closeButton').toggleClass('btn-default btn-warning');
    }
    $('#addPictureModal').modal();
    $scope.picturePosition = position;
    $('#addPictureModal').on('shown.bs.modal', function () {
      $('#pictureUrl').focus();
    });
  };

// save picture
  $scope.savePicture = function() {
    if ($scope.pictureUrl) {
      var pictureKey = 'picture' + $scope.picturePosition;
      var picture = {};
      picture[pictureKey] = $scope.pictureUrl;
      console.log(picture);
      User.update(picture).then(function(data) {
        console.log(data.data.user);
        $rootScope.user = data.data.user;
      });
      $scope.pictureUrl = '';
      $scope.picturePosition = '';
    }
  };

// if there'ss a picture where click happened, delete it.
  $scope.deletePicture = function() {
    if($rootScope.user['picture' + $scope.picturePosition]) {
      var pictureKey = 'picture' + $scope.picturePosition;
      var picture = {};
      picture[pictureKey] = '';
      User.update(picture).then(function(data) {
        console.log(data.data.user);
        $rootScope.user = data.data.user;
      });
    }
  };

}]);