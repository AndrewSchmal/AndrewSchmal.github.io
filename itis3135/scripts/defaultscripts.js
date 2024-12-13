// Display the current date and time
function displayCurrentTime() {
    const now = new Date();
    const timeString = `Today is ${now.toLocaleTimeString()} on ${now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })}`;
    document.getElementById('time-display').textContent = timeString;
}

// Greet the user based on their input
function greetUser() {
    const name = document.getElementById('name').value.trim();
    const mood = document.getElementById('mood').value.trim();

    if (!name || !mood) {
        alert('Please fill out both fields!');
        return;
    }

    alert(`The Acclaimed Squid welcomes you, ${name}! We're glad you are feeling ${mood}.`);
}

// Determine the polygon based on the user's favorite number
function findPolygon() {
    const numberInput = document.getElementById('favorite-number').value;
    const number = Math.abs(Math.round(parseFloat(numberInput)));

    const polygons = {
        0: 'No sides (a point)',
        1: 'Monogon',
        2: 'Digon',
        3: 'Triangle',
        4: 'Quadrilateral',
        5: 'Pentagon',
        6: 'Hexagon',
        7: 'Heptagon',
        8: 'Octagon',
        9: 'Nonagon',
        10: 'Decagon'
    };

    const polygon = polygons[number] || 'a polygon with many sides';
    alert(`A polygon with ${number} sides is called ${polygon}.`);
}

// Provide a random insult
function provideInsult() {
    const insults = [
        "You're slower than a squid on land!",
        "Hey bud, we're gonna need to see a little bit more urgency from ya.",
        "Little late to work coming here from your WoW raids huh, cool cat?",
        "Hrrrngg we got a real comedian over here",
        "Hrngg don't work too hard now, the crab meat won't stock itself!"
    ];
    const randomInsult = insults[Math.floor(Math.random() * insults.length)];
    alert(randomInsult);
}

// Provide a random compliment
function giveCompliment() {
    const compliments = [
        "Hrrrnggg good work today cool cat!",
        "Hey myean, nobody stacks pallets like me myean, but you're a close second!!",
        "You're as unique as a glowing squid in the dark!",
        "You're the best thing since sliced seaweed!",
        "You're a real catch!"
    ];
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    alert(randomCompliment);
}

// Provide a random squid fact
function randomFact() {
    const facts = [
        "Squids have three hearts!",
        "definatly me right here",
        "Smile, because it confuses people. Because Its Easier Than Explaining what is Killing you Inside. -Joker",
        "Some squids can glow in the dark.",
        "Squids can swim backward and forward."
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    alert(randomFact);
}

// Calculate the sum of two random numbers
function calculateSum() {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const sum = num1 + num2;
    alert(`The sum of ${num1} and ${num2} is ${sum}.`);
}

// Provide a random joke
function randomJoke() {
    const jokes = [
        "Why did the squid cross the road? To get to the deep end!",
        "How do squids pay for things? They use their sand dollars!",
        "What’s a squid's favorite instrument? The ink-tar!",
        "I bet you play WoW, cool cat",
        "You could buy so many costco dolla fifty hotdogs with that"
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    alert(randomJoke);
}

// Attach event listeners once DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Display the current date and time
    displayCurrentTime();

    // Add event listeners for all interactive buttons
    document.getElementById('submit-greeting').addEventListener('click', greetUser);
    document.getElementById('submit-polygon').addEventListener('click', findPolygon);
    document.getElementById('get-insult').addEventListener('click', provideInsult);
    document.getElementById('get-compliment').addEventListener('click', giveCompliment);
    document.getElementById('get-fact').addEventListener('click', randomFact);
    document.getElementById('calculate-sum').addEventListener('click', calculateSum);
    document.getElementById('get-joke').addEventListener('click', randomJoke);
});
