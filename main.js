// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘
function isAdmin(obj) {
	if (obj.userRole === "ADMIN") {
		return true;
	} else return false;
}

function getEmail(obj) {
	return `${obj.firstName.toLowerCase()}.${obj.lastName.toLowerCase()}@codeimmersives.com`;
}

function getPlaylistLength(obj) {
	return obj.songs.length;
}


function getHardestHomework(obj){
    arrOfScores = []
    lowestScore = Math.min(...arrOfScores)
    lowestScore
    if (obj[0]!== undefined){
        for (score of obj){
            arrOfScores.push(obj.averageScore)
        }
        return obj[0].name
    } else {
        return ''
    }
}
test = getHardestHomework([
    { name: 'homework 1', averageScore: 50 }
])

test

function createPhonebook(name, phone) {
	let obj = {};
	for (let i = 0; i < name.length; i++) {
		obj[name[i]] = phone[i];
	}
	return obj;
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === "undefined") {
	isAdmin = undefined;
}
if (typeof getEmail === "undefined") {
	getEmail = undefined;
}
if (typeof getPlaylistLength === "undefined") {
	getPlaylistLength = undefined;
}
if (typeof getHardestHomework === "undefined") {
	getHardestHomework = undefined;
}
if (typeof createPhonebook === "undefined") {
	createPhonebook = undefined;
}

module.exports = {
	isAdmin,
	getEmail,
	getPlaylistLength,
	getHardestHomework,
	createPhonebook,
};
