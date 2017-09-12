'use strict';

var app = angular.module('timerApp', []);

app.controller('timerCtrl', ['$scope', '$interval',
    function($scope, $interval) {
        var days, hours, minutes, seconds, currentDateTime, difference;
        var targetDateTime = new Date("Dec 31, 2017 00:00:00").getTime();
        var interval = 1000;
        $scope.countdown = {};

        function refreshTime(d,h,m,s){
            $scope.countdown.days = d;
            $scope.countdown.hours = h;
            $scope.countdown.minutes = m;
            $scope.countdown.seconds = s;
        }

        $interval(function(){
            currentDateTime = new Date().getTime();
            difference = targetDateTime - currentDateTime;
            if(difference > 0) {
                days = Math.floor(difference / (1000 * 60 * 60 * 24));
                hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                seconds = Math.floor((difference % (1000 * 60)) / 1000);

                refreshTime(days, hours, minutes, seconds);
            } else {
                alert("Time's up buddy");
            }

        }, interval);
    }]);

app.directive('timeUnit', function(){

});