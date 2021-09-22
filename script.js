// 1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";
// 1b
warmHugs=warmHugs.toUpperCase();
// 1c
warmHugs=warmHugs.replace("like", "love");
console.log(warmHugs);
// 2a 
let beenImpaled="Oh look at that. I've been impaled.";
// 2b
console.log(beenImpaled.slice(17, 35));
// 3a
let dotDotDot="...";
// 3b
let skullBones=`I don't have a skull ${dotDotDot} or bones.`;
// 4
console.log(Math.PI);
// 5
let randomNumber=Math.random()*3;
randomNumber=Math.ceil(randomNumber)
console.log(randomNumber);

// Bonus
// 6
console.log(` Let it Go!`.trim().repeat(2).toUpperCase());

// 7a
let reindeers="Reindeers are better than people."
// 7b --> Probably a better way to do this
reindeers=reindeers.replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_")
console.log(reindeers);

// 8
console.log(Math.sqrt(2));

// 9
let newRandomNumber=Math.floor(Math.random()*(17))+7;
console.log(newRandomNumber);