// Characters and their elements
const characters = [
    { name: "Anby", image: "images/anby.png", element: "Electric" },
    { name: "Anton", image: "images/anton.png", element: "Electric" },
    { name: "Ben", image: "images/ben.png", element: "Fire" },
    { name: "Billy", image: "images/billy.png", element: "Physical" },
    { name: "Burnice", image: "images/burnice.png", element: "Fire" },
    { name: "Caesar", image: "images/caesar.png", element: "Physical" },
    { name: "Corin", image: "images/corin.png", element: "Physical" },
    { name: "Ellen", image: "images/ellen.png", element: "Ice" },
    { name: "Grace", image: "images/grace.png", element: "Electric" },
    { name: "Jane", image: "images/jane.png", element: "Physical" },
    { name: "Koleda", image: "images/koleda.png", element: "Fire" },
    { name: "Lighter", image: "images/lighter.png", element: "Fire" },
    { name: "Lucy", image: "images/lucy.png", element: "Fire" },
    { name: "Lycaon", image: "images/lycaon.png", element: "Ice" },
    { name: "Nekomata", image: "images/nekomata.png", element: "Physical" },
    { name: "Nicole", image: "images/nicole.png", element: "Ether" },
    { name: "Piper", image: "images/piper.png", element: "Physical" },
    { name: "Qingyi", image: "images/qingyi.png", element: "Electric" },
    { name: "Rina", image: "images/rina.png", element: "Electric" },
    { name: "Seth", image: "images/seth.png", element: "Electric" },
    { name: "Soldier 11", image: "images/soldier11.png", element: "Fire" },
    { name: "Soukaku", image: "images/soukaku.png", element: "Ice" },
    { name: "Yanagi", image: "images/yanagi.png", element: "Electric" },
    { name: "Zhu Yuan", image: "images/zhuyuan.png", element: "Ether" }
];

// DOM Elements
const plannerContainer = document.getElementById("planner-container");
const selectedCharacterContainer = document.getElementById("selected-character");
const skillPlanner = document.getElementById("skill-planner");

// Display Materials Needed
function displayMaterials(dennies, basicChips, advancedChips, specializedChips, hamsterCagePass, element) {
    skillPlanner.innerHTML = `
        <h3>Materials Needed</h3>
        <p>Dennies: ${dennies.toLocaleString()}</p>
        <p>Basic ${element} Chips: ${basicChips}</p>
        <p>Advanced ${element} Chips: ${advancedChips}</p>
        <p>Specialized ${element} Chips: ${specializedChips}</p>
        <p>Hamster Cage Passes: ${hamsterCagePass}</p>
    `;
}

// Select a Character
function selectCharacter(character) {
    selectedCharacterContainer.innerHTML = `
        <h2>${character.name} Character Skills</h2>
        <div class="skills-container">
            <div class="skill">
                <img src="images/basic.png" alt="Basic Skill">
                <p>Basic</p>
                <label>Current Level: <input type="number" id="basic-current" min="1" max="12" value="1"></label>
                <label>Target Level: <input type="number" id="basic-target" min="1" max="12" value="1"></label>
            </div>
            <div class="skill">
                <img src="images/dodge.png" alt="Dodge Skill">
                <p>Dodge</p>
                <label>Current Level: <input type="number" id="dodge-current" min="1" max="12" value="1"></label>
                <label>Target Level: <input type="number" id="dodge-target" min="1" max="12" value="1"></label>
            </div>
            <div class="skill">
                <img src="images/assist.png" alt="Assist Skill">
                <p>Assist</p>
                <label>Current Level: <input type="number" id="assist-current" min="1" max="12" value="1"></label>
                <label>Target Level: <input type="number" id="assist-target" min="1" max="12" value="1"></label>
            </div>
            <div class="skill">
                <img src="images/special.png" alt="Special Attack Skill">
                <p>Special Attack</p>
                <label>Current Level: <input type="number" id="special-current" min="1" max="12" value="1"></label>
                <label>Target Level: <input type="number" id="special-target" min="1" max="12" value="1"></label>
            </div>
            <div class="skill">
                <img src="images/chain.png" alt="Chain Attack Skill">
                <p>Chain Attack</p>
                <label>Current Level: <input type="number" id="chain-current" min="1" max="12" value="1"></label>
                <label>Target Level: <input type="number" id="chain-target" min="1" max="12" value="1"></label>
            </div>
        </div>
        <button onclick="calculateMaterials('${character.element}')">Calculate Materials</button>
    `;
}

// Load Characters into Planner
function loadCharacters() {
    characters.forEach((character) => {
        const characterDiv = document.createElement("div");
        characterDiv.className = "character-card";
        characterDiv.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <p>${character.name}</p>
        `;
        characterDiv.addEventListener("click", () => selectCharacter(character));
        plannerContainer.appendChild(characterDiv);
    });
}



// Calculate Materials Needed
function calculateMaterials(element) {
    const skills = ["basic", "dodge", "assist", "special", "chain"];
    let totalDennies = 0, basicChips = 0, advancedChips = 0, specializedChips = 0, hamsterCagePass = 0;

    skills.forEach((skill) => {
        const currentLevel = parseInt(document.getElementById(`${skill}-current`).value);
        const targetLevel = parseInt(document.getElementById(`${skill}-target`).value);

        for (let level = currentLevel; level < targetLevel; level++) {
            switch (level + 1) {
                case 2: basicChips += 2; totalDennies += 2000; break;
                case 3: basicChips += 3; totalDennies += 3000; break;
                case 4: advancedChips += 2; totalDennies += 6000; break;
                case 5: advancedChips += 3; totalDennies += 9000; break;
                case 6: advancedChips += 4; totalDennies += 12000; break;
                case 7: advancedChips += 6; totalDennies += 18000; break;
                case 8: specializedChips += 5; totalDennies += 45000; break;
                case 9: specializedChips += 8; totalDennies += 67500; break;
                case 10: specializedChips += 10; totalDennies += 90000; break;
                case 11: specializedChips += 12; totalDennies += 112500; break;
                case 12: specializedChips += 15; hamsterCagePass += 1; totalDennies += 135000; break;
            }
        }
    });

    displayMaterials(totalDennies, basicChips, advancedChips, specializedChips, hamsterCagePass, element);
}

// Initialize
loadCharacters();
