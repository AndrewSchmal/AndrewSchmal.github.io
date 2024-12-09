// Core skill data
const coreSkillData = {
    A: {
        name: 'Core Skill A',
        image: 'Icon_Core_Skill_A.png',
        materials: {
            dennies: 5000,
        },
    },
    B: {
        name: 'Core Skill B',
        image: 'Icon_Core_Skill_B.png',
        materials: {
            expertChallengeItems: 2,
            dennies: 12000,
        },
    },
    C: {
        name: 'Core Skill C',
        image: 'Icon_Core_Skill_C.png',
        materials: {
            expertChallengeItems: 4,
            dennies: 28000,
        },
    },
    D: {
        name: 'Core Skill D',
        image: 'Icon_Core_Skill_D.png',
        materials: {
            notoriousHuntItems: 2,
            expertChallengeItems: 9,
            dennies: 60000,
        },
    },
    E: {
        name: 'Core Skill E',
        image: 'Icon_Core_Skill_E.png',
        materials: {
            notoriousHuntItems: 3,
            expertChallengeItems: 15,
            dennies: 100000,
        },
    },
    F: {
        name: 'Core Skill F',
        image: 'Icon_Core_Skill_F.png',
        materials: {
            notoriousHuntItems: 4,
            expertChallengeItems: 30,
            dennies: 200000,
        },
    },
};

// DOM elements
const coreSkillCards = document.querySelectorAll('.core-skill-card');
const materialsList = document.querySelector('.materials-list');

// Materials tracker
const materials = {
    dennies: 0,
    expertChallengeItems: 0,
    notoriousHuntItems: 0,
};

// Function to update the materials list dynamically
function updateMaterialsList() {
    materialsList.innerHTML = ''; // Clear the list
    for (const [material, amount] of Object.entries(materials)) {
        if (amount > 0) {
            const materialElement = document.createElement('div');
            materialElement.classList.add('material');
            materialElement.innerHTML = `
          <img src="images/${material}.png" alt="${material}">
          <p>${material}: ${amount}</p>
        `;
            materialsList.appendChild(materialElement);
        }
    }
}

// Function to handle core skill card clicks
function handleCoreSkillClick(event) {
    const clickedCard = event.currentTarget;
    const core = clickedCard.dataset.core;

    // Toggle completion state
    if (!clickedCard.classList.contains('completed')) {
        clickedCard.classList.add('completed'); // Mark as completed
        addMaterials(core); // Add materials
    } else {
        clickedCard.classList.remove('completed'); // Unmark as completed
        subtractMaterials(core); // Subtract materials
    }

    updateMaterialsList(); // Refresh materials display
}

// Function to add materials for a core skill
function addMaterials(core) {
    const coreSkill = coreSkillData[core];
    for (const [material, amount] of Object.entries(coreSkill.materials)) {
        materials[material] += amount;
    }
}

// Function to subtract materials for a core skill
function subtractMaterials(core) {
    const coreSkill = coreSkillData[core];
    for (const [material, amount] of Object.entries(coreSkill.materials)) {
        materials[material] -= amount;
    }
}

// Attach click event listeners to all core skill cards
coreSkillCards.forEach((card) => {
    card.addEventListener('click', handleCoreSkillClick);
});
