let players = ['Bruno', 'Joelinton', 'Isak', 'Gordon', 'Tino', 'Tonali'];
let teams = ['Man Utd', 'Liverpool', 'Sunderland', 'Arsenal', 'Spurs'];
let actions = ['score a goal', 'score a hat trick', 'get sent off', 'set up a goal'];

let randomGenerator = (arr1, arr2, arr3) => {
    let player = arr1[Math.floor(arr1.length * Math.random())];
    let team = arr2[Math.floor(arr2.length * Math.random())];
    let action = arr3[Math.floor(arr3.length * Math.random())];


    return `${player} is going to ${action} against ${team}`
};

console.log(randomGenerator(players, teams, actions));

