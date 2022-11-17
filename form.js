function W3docs()                                    
{             
    var email = document.forms["RegForm"]["Email"];     
    var motif = document.forms["RegForm"]["motif"];  
    var commentaire = document.forms["RegForm"]["Commentaire"];  


    if (motif.value == "")                               
    { 
        alert("Mettez votre adresse."); 
        address.focus(); 
        return false; 
    }        
    if (email.value == "")                                   
    { 
        alert("Mettez une adresse email 1 valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        alert("Mettez une adresse email 1 valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        alert("Mettez une adresse email 1 valide."); 
        email.focus(); 
        return false; 
    }     

    if (commentaire.value == "")                  
    { 
        alert("Écrivez un commentaire."); 
        comment.focus(); 
        return false; 
    } 
   
    return true; 
   
}