<script  type="text/javascript" src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<link  type="text/css" rel="stylesheet" href="//code.jquery.com/ui/1.11.0/themes/smoothness/jquery-ui.css" />
<script type="text/javascript" src="//code.jquery.com/ui/1.11.3/jquery-ui.js"></script>
<script type="text/javascript" src="//www.markrackley.net/scripts/jquery.HillbillyTabify.min.js?rev=1"></script>

<!DOCTYPE html>
<html>
<body>
<br>
<button id="myButton" class="float-left submit-button" >Floyd Docs</button>
<button id="myButton2" class="float-left submit-button" >Floyd Site</button>
</body>
</html>


<style>
    #myButton, #myButton2{
    min-width: 6em;
    padding: 7px 10px;
    border: 1px solid #e4bc2a;
    border-radius: 5px;
    background-color: #fdfdfd;
    background-color: #FFEB3B;
    margin-left: 10px;
    font-family: "Segoe UI","Segoe",Tahoma,Helvetica,Arial,sans-serif;
    font-size: 11px;
    color: #444444;
}
</style>

<script type="text/javascript">

jQuery(document).ready(function($) {
var siteNumber, indexOfWord, indexOfSiteNumber;
    
    siteNumber=String(document.querySelectorAll('#SPFieldText')[10].innerHTML);
    indexOfWord=siteNumber.indexOf("sites");
    indexOfWord=siteNumber.slice(indexOfWord);
    siteNumber=siteNumber.slice(106);
    indexOfWord="https://portal.verticalbridge.com/"+indexOfWord;
    
    
    indexOfSiteNumber=siteNumber.indexOf("US");
    indexOfSiteNumber=siteNumber.slice(indexOfSiteNumber);
    indexOfSiteNumber=indexOfSiteNumber.substring(0, 10);
    indexOfSiteNumber="http://floyd.verticalbridge.com/SiteManagement/SiteDetail.aspx?siteNo="+indexOfSiteNumber;
        
    document.getElementById("myButton").addEventListener('click', function () {
        window.open(indexOfWord);
        return "Done";
    });    
    
    document.getElementById("myButton2").addEventListener('click', function () {
        window.open(indexOfSiteNumber);
        return "Done";
    });  
});

</script>
