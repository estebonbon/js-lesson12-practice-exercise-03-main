const notRegistered = document.querySelector(".not-registered");

const getRegistrationData = async function() {
    
    const request = await fetch ("https://gist.githubusercontent.com/skillcrush-curriculum/4bfa96d3762f86d2327d389063b3ea8d/raw/86e50e48e98c662ead6d9bd191ef7db381e9f4b4/fieldtrip.json");

    const data = await request.json();

    console.log(data);

    displayContactList(data); // This passes the objects array containning the students information to the displayContactList function
};

const displayContactList = function(data) {
    for(const student of data) { // for of loop going through each element of data and naming it student as it iterates.
        if (student.registered === "no") { // remember to put qoutes around no, as it is a string value. This says that is the student's key value of registered = "no", then it will excute the statements in the function body.
            const li = document.createElement("li"); // create an li element
            li.innerText = student.name; // rememeber to add the "key" part of the student property that you would like to be displayed. In this case it is student.
            notRegistered.append(li); // for the append opperator qoutes are not necessary.
        }
    }
}; 

getRegistrationData();
