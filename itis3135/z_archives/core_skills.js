// Core skill data
const coreSkillData = {
    A: { name: 'Core Skill A', image: "Icon_Core_Skill_A.png", materials: { dennies: 5000 } },
    B: { name: 'Core Skill B', image: 'Icon_Core_Skill_B.png', materials: { expertChallengeItems: 2, dennies: 12000 } },
    C: { name: 'Core Skill C', image: 'Icon_Core_Skill_C.png', materials: { expertChallengeItems: 4, dennies: 28000 } },
    D: { name: 'Core Skill D', image: 'Icon_Core_Skill_D.png', materials: { notoriousHuntItems: 2, expertChallengeItems: 9, dennies: 60000 } },
    E: { name: 'Core Skill E', image: 'Icon_Core_Skill_E.png', materials: { notoriousHuntItems: 3, expertChallengeItems: 15, dennies: 100000 } },
    F: { name: 'Core Skill F', image: 'Icon_Core_Skill_F.png', materials: { notoriousHuntItems: 4, expertChallengeItems: 30, dennies: 200000 } }
};

// Character data
const characterData = {
    Anby: { name: 'Anby', image: 'anby.png' },
    Billy: { name: 'Billy', image: 'billy.png' },
    Ellen: { name: 'Ellen', image: 'ellen.png' },
    Jane: { name: 'Jane', image: 'jane.png' },
    Lucy: { name: 'Lucy', image: 'lucy.png' },
    Nekomata: { name: 'Nekomata', image: 'nekomata.png' },
    Nicole: { name: 'Nicole', image: 'nicole.png' },
    Anton: { name: 'Anton', image: 'anton.png' },
    Ben: { name: 'Ben', image: 'ben.png' },
    Grace: { name: 'Grace', image: 'grace.png' },
    Koleda: { name: 'Koleda', image: 'koleda.png' },
    Qingyi: { name: 'Qingyi', image: 'qingyi.png' },
    Seth: { name: 'Seth', image: 'seth.png' },
    Yanagi: { name: 'Yanagi', image: 'yanagi.png' },
    ZhuYuan: { name: 'Zhu Yuan', image: 'zhuyuan.png' },
    Rina: { name: 'Rina', image: 'rina.png' },
    Corin: { name: 'Corin', image: 'corin.png' },
    Piper: { name: 'Piper', image: 'piper.png' },
    Soldier11: { name: 'Soldier 11', image: 'soldier11.png' },
    Soukaku: { name: 'Soukaku', image: 'soukaku.png' },
    Lycaon: { name: 'Lycaon', image: 'lycaon.png' },
    Caesar: { name: 'Caesar', image: 'caesar.png' },
    Burnice: { name: 'Burnice', image: 'burnice.png' },
    Lighter: { name: 'Lighter', image: 'lighter.png' }
};

// Update materials display with hardcoded logic
function updateMaterialsDisplay(characterName) {
    let notoriousHuntItem = '';
    let expertChallengeItem = '';

    // Hardcoded logic for Notorious Hunt Item
    if (['Anby', 'Billy', 'Ellen', 'Jane', 'Lucy', 'Nekomata', 'Nicole'].includes(characterName)) {
        notoriousHuntItem = 'Item_Ferocious_Grip.gif';
    } else if (['Anton', 'Ben', 'Grace', 'Koleda', 'Qingyi', 'Seth', 'Yanagi', 'Zhu Yuan'].includes(characterName)) {
        notoriousHuntItem = 'Item_Living_Drive.gif';
    } else if (['Rina', 'Corin', 'Piper', 'Soldier 11', 'Soukaku', 'Lycaon'].includes(characterName)) {
        notoriousHuntItem = 'Item_Finale_Dance_Shoes.gif';
    } else if (['Caesar', 'Burnice', 'Lighter'].includes(characterName)) {
        notoriousHuntItem = 'Item_Scarlet_Engine.gif';
    }

    // Hardcoded logic for Expert Challenge Item
    if (['Anby', 'Ellen', 'Nicole', 'Soukaku'].includes(characterName)) {
        expertChallengeItem = 'Item_Higher_Dimensional_Data_Murderous_Obituary.gif';
    } else if (['Corin', 'Lighter', 'Nekomata', 'Piper'].includes(characterName)) {
        expertChallengeItem = 'Item_Higher_Dimensional_Data_Crimson_Awe.gif';
    } else if (['Billy', 'Qingyi', 'Lycaon', 'Zhu Yuan'].includes(characterName)) {
        expertChallengeItem = 'Item_Higher_Dimensional_Data_Ethereal_Pursuit.gif';
    } else if (['Ben', 'Koleda', 'Lucy'].includes(characterName)) {
        expertChallengeItem = 'Item_Higher_Dimensional_Data_Steel_Malice.gif';
    } else if (['Rina', 'Anton', 'Grace', 'Soldier 11', 'Yanagi'].includes(characterName)) {
        expertChallengeItem = 'Item_Higher_Dimensional_Data_Destructive_Advance.gif';
    } else if (['Jane', 'Seth'].includes(characterName)) {
        expertChallengeItem = 'Item_Higher_Dimensional_Data_Falling_Fist.gif';
    } else if (['Burnice', 'Caesar'].includes(characterName)) {
        expertChallengeItem = 'Item_Higher_Dimensional_Data_Stealth_Phantom.gif';
    }

    const materialsDisplay = document.querySelector('.materials-list');
    materialsDisplay.innerHTML = `
        <div class="material">
            <img src="images/Item_Denny.png" alt="Dennies">
            <p>Dennies</p>
        </div>
        <div class="material">
            <img src="images/${notoriousHuntItem}" alt="Notorious Hunt Item">
            <p>Notorious Hunt Item</p>
        </div>
        <div class="material">
            <img src="images/${expertChallengeItem}" alt="Expert Challenge Item">
            <p>Expert Challenge Item</p>
        </div>
    `;
}


// Calculate and display materials
function calculateMaterials() {
    const materials = { dennies: 0, expertChallengeItems: 0, notoriousHuntItems: 0 };
    const skillOrder = ['A', 'B', 'C', 'D', 'E', 'F'];

    skillOrder.forEach((skill) => {
        const skillElement = document.querySelector(`[data-core="${skill}"]`);
        if (skillElement && skillElement.classList.contains('completed')) {
            const skillMaterials = coreSkillData[skill].materials;
            Object.entries(skillMaterials).forEach(([key, value]) => {
                materials[key] = (materials[key] || 0) + value;
            });
        }
    });

    const materialsDisplay = document.querySelector('.materials-list');
    materialsDisplay.innerHTML = `
        // <h3>Materials Required</h3>
        ${Object.entries(materials)
            .map(
                ([key, value]) =>
                    `<div class="material">
                        <p>${key.replace(/([A-Z])/g, ' $1').toUpperCase()}: ${value}</p>
                    </div>`
            )
            .join('')}
    `;
}

// Highlight prerequisites for a selected skill
function highlightPrerequisiteSkills(coreSkill) {
    const skillOrder = ['A', 'B', 'C', 'D', 'E', 'F'];
    const skillIndex = skillOrder.indexOf(coreSkill);

    for (let i = 0; i <= skillIndex; i++) {
        const skill = skillOrder[i];
        const skillElement = document.querySelector(`[data-core="${skill}"]`);
        if (skillElement) {
            skillElement.classList.add('completed');
        }
    }
}

// Reset subsequent skills when toggling off a completed skill
function resetSubsequentSkills(coreSkill) {
    const skillOrder = ['A', 'B', 'C', 'D', 'E', 'F'];
    const skillIndex = skillOrder.indexOf(coreSkill);

    for (let i = skillIndex; i < skillOrder.length; i++) {
        const skill = skillOrder[i];
        const skillElement = document.querySelector(`[data-core="${skill}"]`);
        if (skillElement) {
            skillElement.classList.remove('completed');
        }
    }
}

// Toggle core skill selection
function toggleCoreSkill(coreSkill) {
    const skillElement = document.querySelector(`[data-core="${coreSkill}"]`);
    if (!skillElement) return;

    const isCompleted = skillElement.classList.contains('completed');

    if (isCompleted) {
        skillElement.classList.remove('completed');
        resetSubsequentSkills(coreSkill);
    } else {
        highlightPrerequisiteSkills(coreSkill);
    }

    calculateMaterials();
}

// Load core skills dynamically
function loadCoreSkills() {
    const coreSkillsGrid = document.querySelector('.core-skills-grid');
    coreSkillsGrid.innerHTML = ''; // Clear existing content

    Object.entries(coreSkillData).forEach(([key, skill]) => {
        const skillCard = document.createElement('div');
        skillCard.classList.add('core-skill-card');
        skillCard.dataset.core = key;

        skillCard.innerHTML = `
            <img src="images/${skill.image}" alt="${skill.name}">
            <p>${skill.name}</p>
        `;

        skillCard.addEventListener('click', () => toggleCoreSkill(key));

        coreSkillsGrid.appendChild(skillCard);
    });
}

// Select a character and load their details
function selectCharacter(characterKey) {
    const selectedCharacter = characterData[characterKey];

    const selectedCharacterContainer = document.querySelector('.selected-character');
    selectedCharacterContainer.innerHTML = `
        <h2>${selectedCharacter.name}</h2>
        <img src="images/${selectedCharacter.image}" alt="${selectedCharacter.name}">
    `;

    loadCoreSkills();

    const materialsDisplay = document.querySelector('.materials-list');
    materialsDisplay.innerHTML = '';
}

// Load characters dynamically
function loadCharacters() {
    const characterGrid = document.querySelector('.character-grid');
    characterGrid.innerHTML = ''; // Clear existing content

    Object.entries(characterData).forEach(([key, character]) => {
        const card = document.createElement('div');
        card.classList.add('character-card');
        card.dataset.character = key;

        card.innerHTML = `
            <img src="images/${character.image}" alt="${character.name}">
            <p>${character.name}</p>
        `;

        card.addEventListener('click', () => selectCharacter(key));

        characterGrid.appendChild(card);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadCharacters);