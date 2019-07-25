const multPolynomials = ( ) => {
    var a = document.getElementById("myA").value;
    var b = document.getElementById("myB").value;
    var c = document.getElementById("myC").value;
    var d = document.getElementById("myD").value;
    var answer1 = (a*c + -1*b*d) + " + " + (a*d + b*c) + "i";
    var answer2 = (a*c + -1*b*d) + (a*d + b*c) + "i";

    if (a*d + b*c <0) {
        return answer1;
    } else 
    if (a*d + b*c >0) {
        return answer2;
    } else 
        return "Re-enter your values";
}
const answer = ( ) => {
    document.getElementById("demo").innerHTML = multPolynomials( );
};

// SUBTRACT POLYNOMIALS SECTION
const dividePolynomials = ( )=> {
    var a2 = document.getElementById("myA2").value;
    var b2 = document.getElementById("myB2").value;
    var c2 = document.getElementById("myC2").value;
    var d2 = document.getElementById("myD2").value;
    var answer3 = ;
    var answer4 = ;

    if (     ) {
        return "Re-enter your values";
    } else 
    if (     ) {
        return answer3 + answer4 + " i";
    } else 
    if (     ) {
        return answer3 + answer4 + "i";
    } else 
        return answer3 + " + " + answer4 + "i";
}
const answer2= ( ) => {
    document.getElementById("demo2").innerHTML = dividePolynomials( );
};