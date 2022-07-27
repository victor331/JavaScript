var contacts = [
    {
        "firstname": "Victor",
        "lastname": "Nwanebu",
        "number": "151542",
        "likes": ["Beans", "Coding", "Shortbread"]
    },
    {
        "firstname": "Ruth",
        "lastname": "Oduro",
        "numbers": "08068",
        "likes": ["shitto", "Banku", "reading"]
    },
    {
        "firstname": "Henry",
        "lastname": "Orji",
        "number": "2245",
        "like": [ "Football", "dancing", "sleeping"]
    },
    {
           "firstname": "Jesse",
            "lastname": "Chikezie",
            "number": "3345",
            "like": [ "drinking ", "smoking", "Flirting"]
    }
];

function lookupProfile(name, prop) {
    for (var i =0; i< contacts.length; i++){
        if (contacts[i].firstname === name){
            return contacts[i] [prop] || "no such property";
        }
    }
}

var data  = lookupProfile ("Ruth", "lastname");
console.log(data);
