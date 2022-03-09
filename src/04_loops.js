/**
 * This is a test to see how well you understand loops in javascript.
 *
 */

// This is sample data. Don't modify it. You will need to use it though:
const Elidon = Object.freeze({
  name: "Elidon",
  id: 1,
  hobbies: ["Memes", "Ed's haircut", "Visard's jokes"]
});
const Artiola = Object.freeze({
  name: "Artiola",
  id: 2,
  hobbies: ["Cats", "Chatting"]
});
const Marsel = Object.freeze({
  name: "Marsel",
  id: 3,
  hobbies: ["Basketball", "Being pretty tall"]
});
const Visard = Object.freeze({
  name: "Visard",
  id: 4,
  hobbies: ["Fishing", "Real estate", "Being very freaking tall"]
});
const Rinor = Object.freeze({
  name: "Rinor",
  id: 5,
  hobbies: ["Dogs", "Teaching", "Challenging himself"]
});

const data = Object.freeze({
  people: [Elidon, Artiola, Marsel, Visard, Rinor]
});

// 1. Print out the name of each person in the data object.
// 1.1 There are many ways to achieve the above. Try to think of another way.
data.people.map(person => console.log(person.name))


// 2. Count the total number of hobbies
const countHobbies = () => {
  let count = 0
  data.people.map(person => count += person.hobbies.length)
  return count
}
// 3. Create a mutable copy of Visard and change his name to "Visard of Oz"
let newVisard = JSON.parse(JSON.stringify(Visard))
VisardCopy.name = 'Visard of Oz'
// 4. Capitalise all hobbies in the data object
let hobbiesArray = []
for(let person of data.people){
  for(let hobby of person.hobbies){
    hobbiesArray.push(hobby.toUpperCase())
  }
}
// 5. Create a new object called "peopleByName" and add all the people from the data object to it. It should look like this:
// peopleByName = {
//   Ed: { name: Ed, id: 6, hobbies: ["Drawing birds", "Shitposts", "Muay thai"] },
//   Nico: { name: Nico, id: 7, hobbies: ["Coding", "Learning Japanese", "Being pretty lit"] },
//   ...etc
// }
//

//first we save the names of people in an array
let keys = []
data.people.map(person => keys.push(person.name))
//then we save the objects of every person in another array
let values = JSON.parse(JSON.stringify(data.people))
//at last we assign each value to a key
let peopleByName = {}
keys.forEach((key, index) => {
  peopleByName[key] = values[index]
})