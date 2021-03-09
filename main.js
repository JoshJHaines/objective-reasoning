// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin(obj){
    if (obj.userRole === 'ADMIN'){
        return true
    } else return false
}

function getEmail(obj){
    return `${obj.firstName.toLowerCase()}.${obj.lastName.toLowerCase()}@codeimmersives.com`
}

function getPlaylistLength(obj){
    return obj.songs.length
}

//
function getHardestHomework(obj){
    lowScore = 100
    hardy = obj.name //where score === lowScore
    if (obj === undefined){
        return ''
    }
    for (averageScore in obj){
        if (averageScore < lowScore){
            highScore = averageScore
        }
    }
    return obj.name
}

function createPhonebook(name,phone){
    let obj = {};
    for (let i = 0; i < name.length; i++){
        obj[name[i]] = phone[i];
    }
    return obj;
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};