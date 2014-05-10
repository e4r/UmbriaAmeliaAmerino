function loadXMLDoc()
{
    
    a = document.getElementById("news-container");
    
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            
           a.innerHTML=xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET","http://www.mattorreguerrini.it/api",true);
    xmlhttp.send();
}

loadXMLDoc();

window.onload = function() {
    init();
    $(document).ready(function(){
                      
                      $("#news-container").animate({bottom:'250px'});
                      
                      });
};