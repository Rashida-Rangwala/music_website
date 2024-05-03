function submitForm()
{
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    feedback = document.getElementById("feedback").value;
    
    if(name != "" && email != "" && feedback != ""){
        swal({
          title: 'MMBFLIX',
          text: "Thanks for showing interest, we will get back to you soon!",
          icon: "success",
          button: "Ok",
        });
    }
}


function showPage()
{       
    document.getElementById('loader').style.display = "none";   
}

function openChat()
{
    document.getElementById("chatDiv").style.display = "block";
}
    
function closeChat()
{
    document.getElementById("chatDiv").style.display = "none";    
}



function scroll(){
    scrollValue = window.pageYOffset;
    if(scrollValue > 400){
        document.getElementById("scrollToTop").style.display = "block";
    }
    else{
        document.getElementById("scrollToTop").style.display = "none";
    }
}