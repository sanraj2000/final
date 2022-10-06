// Create a request variable and assign a new XMLHttpRequest object to it.
console.log("started");
//https://api.github.com/orgs/softwareag/repos"
//search : /search/repositories  https://api.github.com/search/repositories?q=


	var app = angular.module('cetApp', []);
	app.controller('cetCtrl', function($scope,$http,$window, $location, $anchorScroll, $timeout,$filter) {
		
		
		
		$scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
		
		
		
		
		$scope.color = {
    'background-color': 'green'
  };
		$scope.chngcolor = function() {
    $scope.color = {'background-color': 'red'};
  };
		
		
		var timedate = {
              method: 'GET',
             url: "./output/date.json",
              headers: {"Content-Type": "application/json"}
           }
          $http(timedate).then(function(response2){
            $scope.showtime =new Date(response2.data);
	    var actualDate = new Date(response2.data)	

          $scope.timeda= actualDate.substring(0, 10) + " " + actualDate.substring(11,19) ;	  
        
         
           },);
		
	
		var status = {
              method: 'GET',
             url: "./output/status.json",
              headers: {"Content-Type": "application/json"}
           }
          $http(status).then(function(response2){
            $scope.showstatus =response2.data;
	   
         
           },);
		
		var build = {
              method: 'GET',
             url: "./output/build.json",
              headers: {"Content-Type": "application/json"}
           }
          $http(build).then(function(response2){
            $scope.showbuild =response2.data;
	    	  
        
         
           },);
		
		

 
            // DEV
            var reposinfo2 = {
              method: 'GET',
             url: "./output/dev.json",
              headers: {"Content-Type": "application/json"}
           }
          $http(reposinfo2).then(function(response2){
            $scope.allrows_cconns2 =response2.data;
        
          $scope.totalCount_cc2=$scope.allrows_cconns2.length;
           }, function(){alert("failed in loading file for DEV");});
    

        

  
     // STAGE
            var reposinfo1 = {
              method: 'GET',
            url: "./output/dev.json",
              headers: {"Content-Type": "application/json"}
          }
          $http(reposinfo1).then(function(response){
            $scope.allrows_cconns =response.data;

          $scope.totalCount_cc=$scope.allrows_cconns.length;
          }, function(){alert("failed in loading file for STAGE");});



          




    // INT
                  var aws_au_1012 = {
                    method: 'GET',
                  url: "./output/int.json",
                    headers: {"Content-Type": "application/json"}
                }
                $http(aws_au_1012).then(function(response){
                  $scope.allrows_cconns3 =response.data;

                $scope.totalCount_cc3=$scope.allrows_cconns3.length;
                }, function(){alert("failed in loading file for INT");});







 
       //substring
  $scope.getData1 = $scope.allrows_cconns2;
  
 //substring
         $scope.getData2 = $scope.allrows_cconns;
//substring
  $scope.getData3 = $scope.allrows_cconns3;

// END of rading files----------------------------------
  //function (updatedDate) {
    //      return updatedDate.substr(0, 10);;

    //  }

      //pagination starts
      $scope.currentPage1 = 0; 
      $scope.pageSize1 = 30;
      $scope.data1 = [];
      $scope.q1 = '';


      $scope.getData1 = function () {
        // needed for the pagination calc
        // https://docs.angularjs.org/api/ng/filter/filter
        return $filter('filter')($scope.data1, $scope.q1)
  
      }


      $scope.numberOfPages1=function(){
        return Math.ceil($scope.getData1().length/$scope.pageSize1);                
    }
    
    for (var i=0; i< 1500; i++) {
        $scope.data1.push("Item "+i);
    }
      //pagination ends

    //part 2 ends


    //substring
  $scope.getData = function (updatedDate) {
          return updatedDate.substr(0, 10);;

      };


        //count Increase
  $scope.count = 0;

  $scope.myFunc = function() {
    $scope.count++;
  };

 
 

  $scope.callAll = function(demoName) {
   // console.log("--------------"+demoName);
    $scope.currentDateString();
   
   /* $scope.callWorkflow ("OnPrem");
    $scope.callWorkflow ("WMIO Dev");
    $scope.callWorkflow ("WMIO Stag");
    $scope.callWorkflow ("WMIO Preprod");
    $scope.callWorkflow ("WMIO INT");*/

   //$scope.callWorkflow ("AWS_US");

  };

   //&reporting_date=03/08/2021

   $scope.currentDateString = function() {
    //date
    let current_datetime = new Date()
    $scope.formatted_date =  (current_datetime.getMonth() + 1) + "/" + current_datetime.getDate() + "/" +current_datetime.getFullYear()
 //  console.log("--------------"+formatted_date)
  };

  // default first call
   $scope.callAll ("My First Call");
		
	$scope.formatDatetime = function (actualTimestamp){
	 var actualDate = new Date(actualTimestamp)	

          var fDate= actualDate.substring(0, 10) + " " + actualDate.substring(11,19) ;
          return fDate
      }	
		
	


          $scope.formatVersion = function (actualVersion){

            var fVersion= actualVersion.substring(1, 5) + "." + actualVersion.substring(5,8)+ "." + actualVersion.substring(8,actualVersion.length);
            return fVersion
        }//function closed  

        $scope.formatDate = function (actualDate){

          var fDate= actualDate.substring(0, 10) + " " + actualDate.substring(11,19) ;
          return fDate
      }//function closed  

  
	});


          //pagination : Part 2
          //We already have a limitTo filter built-in to angular,
          //let's make a startFrom filter
          app.filter('startFrom', function() {
            return function(input, start) {
                if (!input || !input.length) { return; }
                start = +start; //parse to int
                return input.slice(start);
            }
        });


    //tabs
          function connectorTabs(tabName) {
            var i;
            var x = document.getElementsByClassName("wmiotabtype");
            for (i = 0; i < x.length; i++) {
              x[i].style.display = "none";
            }
            document.getElementById(tabName).style.display = "block";
	     
             if(tabName === "TESTJOBS"){
              document.getElementById('defaultOpen2').click();
            }
          
           
          }
          //// Get the element with id="defaultOpen" and click on it
          //  document.getElementById("defaultOpen").Click();

          //tabs Testjobs
          function connectorTabs2(tabName) {
            var i;
            var x = document.getElementsByClassName("wmiotabtype2");
            for (i = 0; i < x.length; i++) {
              x[i].style.display = "none";
            }
            document.getElementById(tabName).style.display = "block";
           
          }


          
