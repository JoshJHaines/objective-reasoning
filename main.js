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
    // arrOfScores
    if (obj[0]!== undefined){
        arrOfScores = []
        arrOfScores
        for (const score of obj){
            console.log(score.averageScore)
            arrOfScores.push(score.averageScore)
            arrOfScores
        }
        arrOfScores
        lowestScore = Math.min(...arrOfScores)
        lowestScore
        lowestIndex = arrOfScores.indexOf(lowestScore)
        lowestIndex
        return obj[lowestIndex].name
    } else {
        return ''
    }
}
test1 = getHardestHomework([
    { name: 'some hw', averageScore: 99 },
    { name: 'other hw', averageScore: 20 },
    { name: 'third hw', averageScore: 3 }
])

test1

test2 = getHardestHomework([
    { name: 'homework 1', averageScore: 50 }
])
//Should return homework 1
test2

test3 = getHardestHomework([])
// Should return empty str
test3

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
