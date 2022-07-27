var collection  = {
    "01": {
        "album": "Old Church basement",
        "artist": "Elevation Worship, Maverick City Music",
        "tracks": [
            "Jireh",
            "Wait on you",
            "Million Little Miracles"           
        ]
    },
    "02": {
        "album": "Donda",
        "artist": "Kanye West",
        "tracks": [ 
            "Jail",
            "God breathed"                
        ]
    },
    "03": {
        "artist": "2-Face idibia",
        "tracks": []
    },
    "04": {
        "album": "ABBA Gold"
    }

};

var collectionCopy = JSON.parse (JSON.stringify(collection)); //keep a copy of collection for tests

function updateRecords (id, prop, value) {
    if ( value === "") {
        delete collection [id] [prop];
    }else if (prop === "tracks") {
        collection[id] [prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }else {
        collection[id][prop] = value;
    }

    return collection;
};

console.log(04, "artist", "ABBAA");