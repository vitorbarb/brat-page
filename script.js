/*
    MAYBE IT WOULD BE A GOOD IDEA TO USE THIS FUNC document.body.classList.toggle TO BUILD THE WEBSITE
    INSTEAD OF MODIFYING HTML THROUGH THE JS AND ITS A GOOD PRACTICE TO USE JS FOR FUNCIONALITY MOSTLY
    INSTEAD OF TO CHANGE THE PAGE LOOKS*/









































/* Making the first screen work, by giving the display prperty none to the inicial message*/
document.querySelector("body").addEventListener("click", function(){
    document.querySelector(".title").style.display = "none";
    document.querySelector(".description").style.display = "none";
    document.querySelector(".tracklist").style.display = "flex"
})




/* Building the structure for the second album tracklist */


document.querySelector("button").addEventListener("click", function(){
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector(".tracklist").innerHTML="<ol><li>360</li><li>Club Classics</li><li>Sympathy is a Knife</li><li>I Might Say Something Stupid</li><li>Talk Talk</li><li>Von Dutch</li><li>Everything Is Romantic</li><li>Rewind</li><li>So I</li><li>Girl, So Confusing</li><li>Apple</li><li>B2B</li><li>Mean Girls</li><li>I Think About It All The Time</li><li>365</li><li>Hello Goodbye </li> <li>Guess</li> <li>Spring Breakers</li></ol><button class='remix'> brat completly different</button><button class='home-page'>brat home page</button>"
document.querySelector(".tracklist")


document.querySelector(".remix").addEventListener("click", function(){
    /*Type the pseudo-page for the remix */
    /*all above.display hidden*/
    /*display a new supposed div for the remix album*/
    document.querySelector("body").style.backgroundColor = "#8ACE00"
    document.querySelector(".tracklist").innerHTML="waitttt here goes the remix tracklist <button class= 'three'> brat three more songs</button><button class='home-page'>brat home page</button>"
    document.querySelector(".tracklist").style.display = "none"



})


/*copy and paste the function for the other button*/



})

document.querySelector(".remix").addEventListener("click", function(){
    /*Type the pseudo-page for the remix */
    /*all above.display hidden*/
    /*display a new supposed div for the remix album*/
    /*document.querySelector("*").style.display = "none"*/
    document.querySelector("body").style.backgroundColor = "#8ACE00"})

