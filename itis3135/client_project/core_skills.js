// Core skill data
const coreSkillData = {
    A: { name: 'Core Skill A', image: 'Item_Denny.png', materials: { dennies: 5000 } },
    B: { name: 'Core Skill B', image: 'Item_Higher_Dimensional_Data_Murderous_Obituary.gif', materials: { expertChallengeItems: 2, dennies: 12000 } },
    C: { name: 'Core Skill C', image: 'Item_Higher_Dimensional_Data_Steel_Malice.gif', materials: { expertChallengeItems: 4, dennies: 28000 } },
    D: { name: 'Core Skill D', image: 'Item_Ferocious_Grip.gif', materials: { notoriousHuntItems: 2, expertChallengeItems: 9, dennies: 60000 } },
    E: { name: 'Core Skill E', image: 'Item_Living_Drive.gif', materials: { notoriousHuntItems: 3, expertChallengeItems: 15, dennies: 100000 } },
    F: { name: 'Core Skill F', image: 'Item_Scarlet_Engine.gif', materials: { notoriousHuntItems: 4, expertChallengeItems: 30, dennies: 200000 } }
};

// Character data
const characterData = {
    Anby: { name: 'Anby', coreMaterial: 'Item_Ferocious_Grip.gif', huntMaterial: 'Item_Higher_Dimensional_Data_Murderous_Obituary.gif', image: 'anby.png' },
    Billy: { name: 'Billy', coreMaterial: 'Item_Ferocious_Grip.gif', huntMaterial: 'Item_Higher_Dimensional_Data_Ethereal_Pursuit.gif', image: 'billy.png' },
    Ellen: { name: 'Ellen', coreMaterial: 'Item_Ferocious_Grip.gif', huntMaterial: 'Item_Higher_Dimensional_Data_Murderous_Obituary.gif', image: 'ellen.png' },
    Jane: { name: 'Jane', coreMaterial: 'Item_Ferocious_Grip.gif', huntMaterial: 'Item_Higher_Dimensional_Data_Falling_Fist.gif', image: 'jane.png' },
    Lucy: { name: 'Lucy', coreMaterial: 'Item_Ferocious_Grip.gif', huntMaterial: 'Item_Higher_Dimensional_Data_Steel_Malice.gif', image: 'lucy.png' },
    Nekomata: { name: 'Nekomata', coreMaterial: 'Item_Ferocious_Grip.gif', huntMaterial: 'Item_Higher_Dimensional_Data_Crimson_Awe.gif', image: 'nekomata.png' },
    Nicole: { name: 'Nicole', coreMaterial: 'Item_Ferocious_Grip.gif', huntMaterial: 'Item_Higher_Dimensional_Data_Murderous_Obituary.gif', image: 'nicole.png' },
    Anton: { name: 'Anton', coreMaterial: 'Item_Living_Drive.gif', huntMaterial: 'Item_Higher_Dimensional_Data_Destructive_Advance.gif', image: 'anton.png' },
    Ben: { name: 'Ben', coreMaterial: 'Item_Living_Drive.gif', huntMaterial: 'Item_Higher_Dimensional_Data_Steel_Malice.gif', image: 'ben.png' },
    Grace: { name: 'Grace', coreMaterial: 'Item_Living_Drive.gif', huntMaterial: 'Item_Higher_Dimensional_Data_Destructive_Advance.gif', image: 'grace.png' },
    Koleda: { name: 'Koleda', coreMaterial: 'Item_Living_Drive.gif', huntMaterial: 'Item_Higher_Dimensional_Data_Steel_Malice.gif', image: 'koleda.png' },
    Qingyi: { name: 'Qingyi', coreMaterial: 'Item_Living_Drive.gif', huntMaterial: 'Item_Higher_Dimensional_Data_Ethereal_Pursuit.gif', image: 'qingyi.png' },
    Seth: { name: 'Seth', coreMaterial: 'Item_Living_Drive.gif', huntMaterial: 'Item_Higher_Dimensional_Data_Falling_Fist.gif', image: 'seth.png' },
    Yanagi: { name: 'Yanagi', coreMaterial: 'Item_Living_Drive.gif', huntMaterial: 'Item_Higher_Dimensional_Data_Destructive_Advance.gif', image: 'yanagi.png' },
    ZhuYuan: { name: 'Zhu Yuan', coreMaterial: 'Item_Living_Drive.gif', huntMaterial: 'Item_Higher_Dimensional_Data_Ethereal_Pursuit.gif', image: 'zhuyuan.png' },
    Rina: { name: 'Rina', coreMaterial: 'Item_Finale_Dance_Shoes.gif', huntMaterial: 'Item_Higher_Dimensional_Data_Destructive_Advance.gif', image: 'rina.png' },
    Corin: { name: 'Corin', coreMaterial: 'Item_Finale_Dance_Shoes.gif', huntMaterial: 'Item_Higher_Dimensional_Data_Crimson_Awe.gif', image: 'corin.png' },
    Piper: { name: 'Piper', coreMaterial: 'Item_Finale_Dance_Shoes.gif', huntMaterial: 'Item_Higher_Dimensional_Data_Crimson_Awe.gif', image: 'piper.png' },
    Soldier11: { name: 'Soldier 11', coreMaterial: 'Item_Finale_Dance_Shoes.gif', huntMaterial: 'Item_Higher_Dimensional_Data_Destructive_Advance.gif', image: 'soldier11.png' },
    Soukaku: { name: 'Soukaku', coreMaterial: 'Item_Finale_Dance_Shoes.gif', huntMaterial: 'Item_Higher_Dimensional_Data_Murderous_Obituary.gif', image: 'soukaku.png' },
    Lycaon: { name: 'Lycaon', coreMaterial: 'Item_Finale_Dance_Shoes.gif', huntMaterial: 'Item_Higher_Dimensional_Data_Ethereal_Pursuit.gif', image: 'lycaon.png' },
    Caesar: { name: 'Caesar', coreMaterial: 'Item_Scarlet_Engine.gif', huntMaterial: 'Item_Higher_Dimensional_Data_Stealth_Phantom.gif', image: 'caesar.png' },
    Burnice: { name: 'Burnice', coreMaterial: 'Item_Scarlet_Engine.gif', huntMaterial: 'Item_Higher_Dimensional_Data_Stealth_Phantom.gif', image: 'burnice.png' },
    Lighter: { name: 'Lighter', coreMaterial: 'Item_Scarlet_Engine.gif', huntMaterial: 'Item_Higher_Dimensional_Data_Crimson_Awe.gif', image: 'lighter.png' }
};

// Function to update character-specific material requirements
function selectCharacter(characterKey) {
    const selectedCharacter = characterData[characterKey];
    const materialsDisplay = document.querySelector('.materials-list');
    materialsDisplay.innerHTML = `
        <h3>${selectedCharacter.name}</h3>
        <div class="material">
            <img src="images/${selectedCharacter.coreMaterial}" alt="Core Material">
            <p>Core Material: ${selectedCharacter.coreMaterial.replace(/_/g, ' ').replace('.gif', '')}</p>
        </div>
        <div class="material">
            <img src="images/${selectedCharacter.huntMaterial}" alt="Hunt Material">
            <p>Hunt Material: ${selectedCharacter.huntMaterial.replace(/_/g, ' ').replace('.gif', '')}</p>
        </div>
    `;
}

// Function to dynamically display character selection
function loadCharacters() {
    const characterSelect = document.querySelector('.character-select');
    Object.entries(characterData).forEach(([key, character]) => {
        const card = document.createElement('div');
        card.classList.add('character-card');
        card.dataset.character = key;
        card.innerHTML = `
            <img src="images/${character.image}" alt="${character.name}">
            <p>${character.name}</p>
        `;
        card.addEventListener('click', () => selectCharacter(key));
        characterSelect.appendChild(card);
    });
}

// Initialize characters on page load
document.addEventListener('DOMContentLoaded', loadCharacters);
