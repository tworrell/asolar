window.onbeforeunload = function() {
                   var Ans = confirm("Are you sure you want to navigate away from this page!");
                   if(Ans==true)
                       return true;
                   else
                       return false;
               };