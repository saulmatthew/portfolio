import texts from "./data/texts.json" assert { type: 'json' };

function startUp() {
    initHeaderName();

    let skills = texts['skills'];

    if (skills['skill']) {
        createSkillSection(skills['skill'])
    }

    if (skills['cert']) {
        createSkillSection(skills['cert'])
    }
}

function createSkillSection(skillsObj) {
    let about = document.getElementById('about');

    let stackCont = document.createElement('div');
    stackCont.setAttribute('class', 'about-skills-container');

    let stackTitle = document.createElement('h2');
    stackTitle.textContent = skillsObj.text;

    let stackList = document.createElement('div');
    stackList.setAttribute('class', 'skill-list-container');
    stackList.setAttribute('id', skillsObj.id);

    stackCont.appendChild(stackTitle);
    stackCont.appendChild(stackList);
    about.appendChild(stackCont);

    createSkillList(skillsObj);
}

function createSkillList(skillsObj) {
    let skillList = document.getElementById(skillsObj.id);

    for (let skillObj in skillsObj.list) {
        let skill = skillsObj.list[skillObj];
        
        let skillCont = document.createElement('div');
        skillCont.setAttribute('class', 'skill-container');
    
        let skillIcon = document.createElement('img');
        skillIcon.setAttribute('class', 'skill-icon');
        skillIcon.setAttribute('src', skill.icon);   

        if (skillsObj.id === 'cert') {
            let certIcon = document.createElement('a');
            certIcon.setAttribute('class', 'skill-icon');
            certIcon.setAttribute('href', skill.link);
            certIcon.setAttribute('target', '_blank');

            certIcon.appendChild(skillIcon);
            skillCont.appendChild(certIcon);
        } else {
            skillCont.appendChild(skillIcon);
        }

        let skillTooltip = document.createElement('span');
        skillTooltip.setAttribute('class', 'skill-tooltip');
        skillTooltip.textContent = skill.text;
    
        skillCont.appendChild(skillTooltip);
        skillList.appendChild(skillCont);
    }
}


function initHeaderName() {
    let nameCount = setInterval(incrementName, 100);
    let nameNum = 0;

    function incrementName() {
        let navName = document.getElementById('nav-name');
        nameNum = nameNum + Math.floor(Math.random() * 66) + 13;
    
        if (nameNum <= 99) {
            navName.innerHTML = "0" + nameNum;
        } else if (nameNum >= 501) {
            navName.innerHTML = nameNum + (501 - nameNum);
            document.getElementById('nav-job').classList.add('reveal');
            clearInterval(nameCount);
        } else {
            navName.innerHTML = nameNum;
        }
    }
}

window.addEventListener('scroll',(e)=>{
    let nav = document.getElementById('nav-header');

    if(window.scrollY) {
      nav.classList.add('nav-shadow');
    } else {
      nav.classList.remove('nav-shadow');
    }
});

document.getElementById('nav-burger').addEventListener('click', toggleMenu, false);
document.getElementById('overlay').addEventListener('click', toggleMenu, false);
document.getElementById('nav-menu').addEventListener('click', toggleMenu, false);

function toggleMenu() {
    let icon = document.getElementById('nav-burger');
    let overlay = document.getElementById('overlay');
    let menu = document.getElementById('nav-menu');
    icon.classList.toggle('open');
    overlay.classList.toggle('open');
    menu.classList.toggle('open');
}

window.init = startUp();
