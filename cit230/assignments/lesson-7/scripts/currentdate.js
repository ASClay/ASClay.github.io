
function currentdate() {
    var mydate = new Date(); 
    var year = mydate.getYear(); 
    var day = mydate.getDay(); 
    var month = mydate.getMonth(); 
    var daym = mydate.getDate(); 
    var dayarray = new Array("Sunday,","Monday,","Tuesday,","Wednesday,","Thursday,","Friday,","Saturday,"); var montharray = new Array("January","February","March","April","May","June","July","August","September","October","November","December"); 
    var myClock = document.getElementById("currentdate");
    myClock.textContent = dayarray[day]+ " " +daym+ " " +montharray[month]+ " 2017";
    myClock.innerText = dayarray[day]+ " " +daym+ " " +montharray[month]+ " 2017";
    
    setTimeout("currentdate()", 1000);
}
currentdate();
