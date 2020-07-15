function myFunction() {
  //document.getElementById("test").innerHTML = "hhhh";

  function getParentUrl() {
    var isInIframe = (parent !== window),
        parentUrl = null;

    if (isInIframe) {
        parentUrl = document.referrer;
    }

    return parentUrl;
}


var addressParse = getParentUrl().split("").join("").split("/").reverse();
var address = addressParse[0];
alert(address);


  if ( address  == "index.html"){
    document.getElementById("nav-pro").style.backgroundColor = "purple";
  }

  if ( address == "experience.html"){
    document.getElementById("nav-exp").style.backgroundColor = "purple";
  }

  if ( address  == "education.html"){
    document.getElementById("nav-edu").style.backgroundColor = "purple";
  }

  if ( address == "experience.html"){
    document.getElementById("nav-exp").style.backgroundColor = "purple";
  }
}
           
        
