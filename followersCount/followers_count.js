let count = 0; //Initialze count to 0

function increaseCount() {
    count++; //Increment the count by 1
    displayCount(); //Display the count
    checkCountValue(); //Check count value and display messages
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; //Display the count in the HTML
}

function checkCountValue() {
    if (count ===10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count ===20) {
        alert("Your Instagram post gained 20 follers! Keep it up!");  
    } else if (count ===0) {
        alert("Followers count has been reset");
    }
}

function resetcount() {
    count=0;
    displayCount();
}
