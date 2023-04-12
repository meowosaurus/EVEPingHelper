const fcNameField = document.getElementById('fc-name-field');
const formupField = document.getElementById('formup-field');
const commsMenu = document.getElementById('comms-menu');
const doctrineMenu = document.getElementById('doctrine-menu');
const reimbursementMenu = document.getElementById('reimbursement-menu');
const hurfField = document.getElementById('hurf-field');
const requestingCheck = document.getElementById('requestingPingCheck');

const outputField = document.getElementById('output-field');
const motdField = document.getElementById('motd-field');

const inputElements = [fcNameField, formupField, commsMenu, doctrineMenu, reimbursementMenu, hurfField, requestingCheck];

inputElements.forEach(element => element.addEventListener('input', updateOutput));
      
const commsOptions = {
  s1: { name: "Strategic 1", arrow: '->', link: "http://localhost:8000/s1", logiChannel: "<a href=\"joinChannel:player_8d67fcf0a0c411ed98e03a68dd86f9e7//None//None\">SHADO Logi S1</a>" },
  s2: { name: "Strategic 2", arrow: '->', link: "http://localhost:8000/s2", logiChannel: "<a href=\"joinChannel:player_a6aa3f0fa0c511edaf003a68dd86f9e7//None//None\">SHADO Logi S2</a>" },
  p1: { name: "Peacetime 1", arrow: '->', link: "http://localhost:8000/p1", logiChannel: "<a href=\"joinChannel:player_cc79021ea0e911ed8c8600109bd0f828//None//None\">SHADO Logi P1</a>" },
  p2: { name: "Peacetime 2", arrow: '->', link: "http://localhost:8000/p2", logiChannel: "<a href=\"joinChannel:player_5e65ba70a0ea11edbffb00109bd0f828//None//None\">SHADO Logi P2</a>" },
  st: { name: "Standing Fleet Main", arrow: '->', link: "http://localhost:8000/st", logiChannel: "" },
};

const doctrineOptions = {
  eagle: { 
    name: 'Eagle Doctrine',
    comp: "Eagle Doctrine (Claymore > Vulture > Basilisk > Eagle > Huginn > Lachesis > Scythe > Tackle > Else)", 
    link: "https://auth.shadow-ultimatum.space/fittings/doctrine/13/" },
  muninn: { 
    name: 'Eagle Doctrine',
    comp: "Muninn Doctrine (Claymore > Scimitar > Muninn > Cerberus > Lachesis/Huginn > Scythe > Bellicose > Tackle > Else", 
    link: "https://auth.shadow-ultimatum.space/fittings/doctrine/11/" },
  bombbomber: { 
    name: 'Bomb-Bomber Doctrine',
    comp: "Bomb-Bomber Doctrine (Purifier / Manticore / Nemesis / Hound)", 
    link: "https://auth.shadow-ultimatum.space/fittings/doctrine/14/" },
  caracal: { 
    name: 'Caracal Doctrine',
    comp: "Caracal Doctrine (Cyclone > Scythe > Caracal > Tackle > Else)", 
    link: "https://auth.shadow-ultimatum.space/fittings/doctrine/6/" },
  cormorant: { 
    name: 'Cormorant Doctrine',
    comp: "Cormorant Doctrine (Cormorant > Burst > Bantam > Vigil > Tackle > Else)", 
    link: "https://auth.shadow-ultimatum.space/fittings/doctrine/8/" },
  ferox: { 
    name: 'Ferox Doctrine',
    comp: "Ferox Doctrine (Cyclone > Basilsik > Scythe > Ferox > Bellicose > Tackle > Else)", 
    link: "https://auth.shadow-ultimatum.space/fittings/doctrine/4/" },
  flycatcher: { 
    name: 'Flycatcher Doctrine',
    comp: "Flycatcher Doctrine (Boosters > Kirin/Scalpel > Flycatcher > Keres/Hyena > Vigil > Tackle > Else)", 
    link: "https://auth.shadow-ultimatum.space/fittings/doctrine/22/" },
  kikimora: { 
    name: 'Kikimora Doctrine',
    comp: "Kikimora Fleet (Boosters > Kirin/Scalpel > Kikimora > Hound/Purifier > Keres/Hyena)", 
    link: "https://auth.shadow-ultimatum.space/fittings/doctrine/17/" },
  torpbomber: { 
    name: 'Torp-Bomber Doctrine',
    comp: "Torp-Bomber Doctrine (Purifier / Manticore / Nemesis / Hound)", 
    link: "https://auth.shadow-ultimatum.space/fittings/doctrine/15/" },
  adm: { 
    name: 'ADM Doctrine',
    comp: "ADM Doctrine (Vexor > Myrmidon > Ishtar)", 
    link: "https://auth.shadow-ultimatum.space/fittings/doctrine/18/" },
};

const reimbursementOptions = {
    strategic: { name: "Strategic", ping: { target: "I\'m requested the attention of <@&996168218525831408> <@&1071601901906436186>\n```\n", targetEnd: "\n```" }, defaultPing: { target: "@everyone", targetEnd: "" } },
    none: { name: "None", ping: { target: "I\'m requested the attention of <@&996168218525831408> <@&1071601901906436186>\n```\n", targetEnd: "\n```" }, defaultPing: { target: "@here", targetEnd: "" } },
};

function updateOutput() {
    const fcNameInputText = fcNameField.value;
    const formupInputText = formupField.value;
    const boostChannel = "<a href=\"joinChannel:player_16b813dea0e911ed8d273a68dd86f9e7//None//None\">SHADO Boosting</a>"

    const selectedCommsOption = commsMenu.value;
    const commsOptionData = commsOptions[selectedCommsOption] || { name: "None", arrow: '', link: "", logiChannel: "" };

    const selectedDoctrineOption = doctrineMenu.value;
    const doctrineOptionData = doctrineOptions[selectedDoctrineOption] || { name: "None", comp: "", link: "" };

    const selectedReimbursementOption = reimbursementMenu.value;
    const reimbursementOptionData = reimbursementOptions[selectedReimbursementOption] || { name: "None", ping: { target: "", targetEnd: "" }, defaultPing: { target: "", targetEnd: "" } };
    const reimbursementOption = reimbursementOptionData.name;
    const pingTarget = requestingCheck.checked ? reimbursementOptionData.ping.target : reimbursementOptionData.defaultPing.target;
    const pingTargetEnd = requestingCheck.checked ? reimbursementOptionData.ping.targetEnd : reimbursementOptionData.defaultPing.targetEnd;

    const hurfTextField = hurfField.value;
    outputField.value = `${pingTarget}Aditional Information:\n${hurfTextField}\n\nFC Name: ${fcNameInputText}\nFormup Location: ${formupInputText}\nComms: ${commsOptionData.name} ${commsOptionData.arrow} ${commsOptionData.link}\nDoctrine: ${doctrineOptionData.comp}\nReimbursement: ${reimbursementOption}${pingTargetEnd}`;
    motdField.value = `<font size="12" color="#ffffffff">\nDoctrine: <a href="${doctrineOptionData.link}">${doctrineOptionData.name}</a>\nComposition: ${doctrineOptionData.comp}\n\nFormup: ${formupInputText}\nComms: <a href="${commsOptionData.link}">${commsOptionData.name}</a>\n\nLogi-Channel: ${commsOptionData.logiChannel}\nBoosts: ${boostChannel}\n\nAnchor:</font>`
}