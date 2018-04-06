var pricesObject = new XMLHttpRequest();
pricesObject.open('GET','https://landesud.github.io/mountain/prices.json', true);

pricesObject.send();



pricesObject.onload = function() {
var pricesInfo = JSON.parse(pricesObject.responseText);	

    
var t1 = parseFloat(pricesInfo.prices.BasicFrameCleaning);
document.getElementById("t1").innerHTML = "$" + t1 + " USD";
    
var t2 = parseFloat(pricesInfo.prices.InspectFrame);
document.getElementById("t2").innerHTML = "$" + t2 + " USD";
        
var t3 = parseFloat(pricesInfo.prices.TrueWheels);
document.getElementById("t3").innerHTML = "$" + t3 + " USD";
        
var t4 = parseFloat(pricesInfo.prices.AdjustHubs);
document.getElementById("t4").innerHTML = "$" + t4 + " USD";
        
var t5 = parseFloat(pricesInfo.prices.AdjustBottomBracket);
document.getElementById("t5").innerHTML = "$" + t5 + " USD";
        
var t6 = parseFloat(pricesInfo.prices.AdjustHeadset);
document.getElementById("t6").innerHTML = "$" + t6 + " USD";
        
var t7 = parseFloat(pricesInfo.prices.AdjustDerailleurs);
document.getElementById("t7").innerHTML = "$" + t7 + " USD";
        
var t8 = parseFloat(pricesInfo.prices.TightenCrankarms);
document.getElementById("t8").innerHTML = "$" + t8 + " USD";
        
var t9 = parseFloat(pricesInfo.prices.TightenandLubePedals);
document.getElementById("t9").innerHTML = "$" + t9 + " USD";
        
var t10 = parseFloat(pricesInfo.prices.LubricateallPivotPoints);
document.getElementById("t10").innerHTML = "$" + t10 + " USD";
        
var t11 = parseFloat(pricesInfo.prices.TorqueallBolts);
document.getElementById("t11").innerHTML = "$" + t11 + " USD";
        
var t12 = parseFloat(pricesInfo.prices.InspectandLubeChain);
document.getElementById("t12").innerHTML = "$" + t12 + " USD";
        
var t13 = parseFloat(pricesInfo.prices.InspectCassetteforWear);
document.getElementById("t13").innerHTML = "$" + t13 + " USD";
        
var t14 = parseFloat(pricesInfo.prices.InflateTiresandInspectforDamageandWear);
document.getElementById("t14").innerHTML = "$" + t14 + " USD";
        
var t15 = parseFloat(pricesInfo.prices.TestRide);
document.getElementById("t15").innerHTML = "$" + t15 + " USD";
        
var t16 = t1 + t2 + t3 + t4 + t5 + t6 + t7 + t8 + t9 + t10 + t11 + t12 + t13 + t14 + t15
document.getElementById("t16").innerHTML = "$" + t16 + " USD";
   
}
