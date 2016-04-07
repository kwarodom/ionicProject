'use strict';

app.controller('LoginCtrl', function($scope, $state, $ionicPopup, Auth) {

  $scope.emailLogin = function(){
    console.log("button was clicked on login");

    // Triggered on a button click, or some other target
      $scope.user = {};

      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        templateUrl: 'templates/partials/login.html',
        title: 'Signin',
        subTitle: "Use less energy is awesome, Let's do it!",
        scope: $scope,
        buttons: [
          {
            text: '<b>Login</b>',
            type: 'button-energized',
            onTap: function(user) {
              user = $scope.user;
              console.log("the user is", user); //TODO don't forget to comment this out for production
              //log user in
              Auth.login(user).then(function(){
                console.log('user was logged in successfully');
                //send to the dashboard
                $state.go('tab.dash')
              },function(err){
                console.log('Error...', err);
              });
            }
          },


          {
            text: '<b>Register</b>',
            type: 'button-calm',
            onTap: function(user) {
              user = $scope.user;
              console.log("the user is", user); //TODO don't forget to comment this out for production
              //log user in
              Auth.register(user).then(function(){
                console.log('user was registered successfully');
                //send to the dashboard
                $state.go('tab.dash')
              }, function(err){
                console.log('Error...', err);
              });
            }
          }
        ]
      });

    };


});
