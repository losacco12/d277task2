function emailValidate() {

    let emailsecond = document.forms["form1"]["email2"].value;
    
    if (emailsecond !== document.forms["form1"]["email"].value) {
    
    alert("Emails must match");
    
    return false;
    }
    else { return true;}
    }
    
    