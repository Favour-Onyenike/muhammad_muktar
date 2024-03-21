function txt() {
    let checkbox = document.getElementById("checkbox1");
    let text = document.getElementById("checkbox-text");

    if (checkbox.checked) {
        text.innerHTML = "i want to get an A"; // Update paragraph content
    } else {
        text.innerHTML = ""; // Clear paragraph content
    }
}
function compam(fname,lname){
    document.write(" How is the fasting " + fname + lname)
}
function Me(id,club,course){
    Me.id=id;
    Me.club=club;
    Me.course=course;

}
e=new Me(8956,"Madrid","Computer science");

document.write(Me.id+""+Me.club+""+Me.course);
if (display.click)
function val(){
    if (document.mf.name.value ==""){
        alert("please name cant be empty");
        document.mf.name.focus();
        return false;
    }
    if (document.mf.mail.value==""){
        alert("provide an email");
        document.mf.mail.focus();
        return false
    }
    return true;
}

