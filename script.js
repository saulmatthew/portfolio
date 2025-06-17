const skills = {
    skill: {
        text: "SKILLS",
        id: "skill",
        list: {
            oracle: {
                text: "ORACLE CLOUD",
                icon: "./assets/icons/skill-icons/oracle.svg",
            },
            html: {
                text: "HTML",
                icon: "./assets/icons/skill-icons/html.svg",
            },
            css: {
                text: "CSS",
                icon: "./assets/icons/skill-icons/css.svg",
            },
            javascript: {
                text: "JAVASCRIPT",
                icon: "./assets/icons/skill-icons/javascript.svg",
            },
            netsuite: {
                text: "SUITECLOUD",
                icon: "./assets/icons/skill-icons/netsuite.svg",
            },
            mysql: {
                text: "MYSQL",
                icon: "./assets/icons/skill-icons/mysql.svg",
            },
            angular: {
                text: "ANGULAR",
                icon: "./assets/icons/skill-icons/angular.svg",
            },
            REACT: {
                text: "REACT",
                icon: "./assets/icons/skill-icons/react.svg",
            },
            nodejs: {
                text: "NODE.JS",
                icon: "./assets/icons/skill-icons/nodejs.svg",
            },
            typescript: {
                text: "TYPESCRIPT",
                icon: "./assets/icons/skill-icons/typescript.svg",
            },
            MONGODB: {
                text: "MONGODB",
                icon: "./assets/icons/skill-icons/mongodb.svg",
            },
            java: {
                text: "JAVA",
                icon: "./assets/icons/skill-icons/java.svg",
            }
        }
    }
};

const certs = {
    cert: {
        text: "CERTIFICATIONS",
        id: "cert",
        list: {
            oracle_apex_dev_pro: {
                title: "Oracle APEX Cloud",
                text: "Developer Professional",
                icon: "./assets/icons/skill-icons/oracle.svg",
                link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=D54265F038C5EE761A0CD7AAA34F1E1AB325CEA39D2C5F44F09C918153D839A7",
            },
            oracle_oci_appinteg_pro: {
                title: "Oracle Cloud Infrastructure",
                text: "Application Integration",
                icon: "./assets/icons/skill-icons/oracle.svg",
                link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=36D029E1952D4B98FAFA54A53BFDDE0A87FB382063C384D43A27F0F7258456E4",
            },
            oracle_oci_genai_pro: {
                title: "Oracle Cloud Infrastructure",
                text: "Generative AI",
                icon: "./assets/icons/skill-icons/oracle.svg",
                link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=2F4FC9A564E2E972CE261BD080FBB92BDD5C6C38539C01EB630758407025C96A",
            },
            oracle_hcm_busproc_pro1: {
                title: "Oracle HCM",
                text: "Business Process",
                icon: "./assets/icons/skill-icons/oracle.svg",
                link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=2F4FC9A564E2E972CE261BD080FBB92BDD5C6C38539C01EB630758407025C96A",
            }
        }
    }
};

function startUp() {
    initHeaderName();

    createSkillSection(skills['skill']);
    createSkillSection(certs['cert']);
}

function createSkillSection(skillsObj) {
    if (Object.keys(skillsObj['list']).length !== 0) {
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

        let skillTooltip = document.createElement('span');
        skillTooltip.setAttribute('class', 'skill-tooltip');
        skillTooltip.textContent = skill.text;

        if (skillsObj.id === 'cert') {
            let certIcon = document.createElement('a');
            certIcon.setAttribute('class', 'skill-icon cert');
            certIcon.setAttribute('href', skill.link);
            certIcon.setAttribute('target', '_blank');

            let certTextCont = document.createElement('div');
            certTextCont.setAttribute('class', 'cert-cont');
            let certTitle = document.createElement('h3');
            certTitle.textContent = skill.title;
            let certText = document.createElement('p');
            certText.setAttribute('class', 'cert-text');
            certText.textContent = skill.text;
            certTextCont.appendChild(certTitle);
            certTextCont.appendChild(certText);

            certIcon.appendChild(skillIcon);
            certIcon.appendChild(certTextCont);
            skillCont.appendChild(certIcon);
        } else {
            skillCont.appendChild(skillIcon);
            skillCont.appendChild(skillTooltip);
        }

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
            navName.innerHTML = '0' + nameNum;
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