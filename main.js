//yer bilglerivi cek
   

var a = document.getElementById("informer");
//document.getElementById("geolocation").value = 'salam';

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
    a.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  a.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
   document.getElementById("geolocation").value = ", Latitude: " + position.coords.latitude + 
   "Longitude: " + position.coords.longitude;
    
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      a.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      a.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      a.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      a.innerHTML = "An unknown error occurred."
      break;
  }
}


function closeMyPopup(){
    document.getElementById("myPopup").style.display = 'none';
}

//formdan gelen melumatlari al ve bosluqunu yoxla

    function formData(){
        //gelen melumatlari bir-bir al
        let userNameForm = document.getElementById("namesurname").value;
        let ageForm = document.getElementById("age").value;
        let finForm = document.getElementById("fin").value;
        let geolocationForm = document.getElementById("geolocation").value;
            
            //formdan gelen melumatları boş ve dolu olduqun yoxla
            //formdan gelen melumatlar filtir et
                if(userNameForm == ''){
                    alert('Name is empty');
                    document.getElementById("namesurname").focus();
                }else if(ageForm == ''){
                    alert('Age is empty');
                    document.getElementById("age").focus();
                }else if(finForm == ''){
                    alert('Fin is empty');
                    document.getElementById("fin").focus();
                }else if(geolocationForm == ''){
                    alert('Geolocation is empty');
                    document.getElementById("geolocation").focus();
                } else {
                    var okData = " <div style='color: green'>&#x2714;</div> " + "Sizin sifarisiniz qeyde alindi <br> " + "Sizin ad: " + userNameForm + " Sizin Idenfikasiya kodunuz" + finForm + " <br>Tezlikle sizinle elaqe saxlanılacaq.";
                   document.getElementById("myPopup").style.display = 'block';
                   document.getElementById("popupyazi").innerHTML = okData;
                   document.getElementById("formData").reset();
                }
    }
