function activateDark()
{
    var button=document.getElementById("switch-dark");
    if(button.innerHTML=="Switch to Dark Mode")
        button.innerHTML="Switch to Light Mode";
    else if(button.innerHTML=="Switch to Light Mode")
        button.innerHTML="Switch to Dark Mode";
    document.body.classList.toggle("change-to-dark-mode");
}
var couponNumber="";
function random_number()
{
    arr=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var i;
    for(i=0;i<8;i++)
    {
        couponNumber+=(arr[Math.floor(Math.random()*arr.length)]);
    }
}
function sendSuccess() 
{
    alert("We will respond to your queries as soon as possible.\nThankyou for your valuable suggestions(if any).\n\nA special suprise for you!!\nUse the Coupon code "+couponNumber+" to avail exciting discounts on our workshops and merchandise!!");
}