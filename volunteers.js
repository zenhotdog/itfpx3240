var $ = function (id) { return document.getElementById(id); };

var volunteerArray = [];

var displayVolunteers = function () {   
    // display the volunteers in the text area
    //$("volunteerList").value = volunteerArray.join("\n");

	// comment out the line above change this to a loop instead to loop through the array.
        var volunteerText = "";
        for (let i = 0; i < volunteerArray.length; i++) {
            volunteerText += (i + 1) + ". " + volunteerArray[i] + "\n";
        }
        $("volunteerList").value = volunteerText;
    };
    
	

var addVolunteer = function () {
    // get the data from the form
    var volunteerString = $("first_name").value + " " + $("last_name").value;

    // store the data in an array
    volunteerArray.push(volunteerString);
    
    // display the volunteers and clear the add form
    displayVolunteers();
    
    // get the add form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};


var deleteVolunteer = function () {
    var volunteerString = $("first_name").value + " " + $("last_name").value;

    var index = volunteerArray.indexOf(volunteerString);
    if (index !== -1) {
        volunteerArray.splice(index, 1);
    }

    displayVolunteers();
    
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};


var clearList = function () {   
    // delete the data from the arrays
    volunteerArray = [];
    
	//   alternative way to delete all of the data from the array
	//    volunteerArray.length = 0;
    
    // remove the volunteers data from the web page
    $("volunteerList").value = "";
    
    $("first_name").focus();
};

var sortList = function () {   
    volunteerArray.sort(function(a, b) {
        var nameA = a.split(" ")[0].toUpperCase(); // get first name and convert to uppercase
        var nameB = b.split(" ")[0].toUpperCase(); // get first name and convert to uppercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    
    displayVolunteers();    
};

//When the page is fully loaded, the buttons will be mapped to the JavaScript functions
window.onload = function () {
    $("add_button").onclick = addVolunteer;
	$("delete_button").onclick = deleteVolunteer;
    $("clear_button").onclick = clearList;    
    $("sort_button").onclick = sortList;    
    $("first_name").focus();
};
