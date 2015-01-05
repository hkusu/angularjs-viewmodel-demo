'use strict';

angular.module('angularViewmodelDemo')
  .controller('MainCtrl', function ($scope) {

    var userViewModel = function(name, age){

      var _master = {}; //commitされたViewModelを保持するオブジェクト

      return {
        name: name,
        age: age,
        message: "",
        hello : function(){
          this.message = "こんにちは！ " + this.name + " さん。";
        },
        rollback: function(){ //元に戻す
          $scope.vm = angular.copy(_master);
        },
        commit: function(){ //保存する
          _master = angular.copy(this);
        }
      }
    };

    $scope.vm = userViewModel("山田", 34); //ViewModelを$scopeへバインド
    $scope.vm.commit(); //まずは初期データを保存する
  });
