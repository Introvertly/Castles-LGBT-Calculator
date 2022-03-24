// Edater Calculator
let username = document.getElementById('name');

document.getElementById('button').addEventListener('click', calculate)

function calculate() {
    let username = document.getElementById('name').value;
    document.getElementById('results').innerHTML = edaterCalc(username);
}

function edaterCalc(input) {
    if (input.toLowerCase() == 'molly' || input.toLowerCase() == 'mawly') {
        return "Top castles player, is a lesbian, although there are rumours that she likes Mh's mother. 80% LGBTQ (because of mondays).";
    } else if (input.toLowerCase().toLowerCase() == 'introvertly' || input.toLowerCase() == 'intro') {
           return 'TBD';
        } else if (input.toLowerCase() == 'java' || input.toLowerCase() == 'jv') {
          return 'Resident black woman in the discord, has come out as lesbian (and furry). 90% LGBTQ (due to mondays and dylan from scream)';
        } else if (input.toLowerCase() == 'chihaki' || input.toLowerCase() == 'chi') {
            return 'Insane artist, has medications, has come out as bisexual. 65% LGBTQ.';
        } else if (input.toLowerCase() == 'mhhh' || input.toLowerCase() == 'mh' || input.toLowerCase() == 'joseph') {
            return 'Meows a lot, pretends to be homophobic to hide the raging lgbtq in him. 95% LGBTQ';
        } else if (input.toLowerCase() == 'badtype'|| input.toLowerCase() == 'andrew') {
            return 'Resident gay person in the discord with his love for "being filled up". 100% LGBTQ';
        } else if (input.toLowerCase() == 'aqlin') {
            return 'Australian Asexual, likes to read and game. 50% LGBTQ';
        } else if (input.toLowerCase() == 'calduh') {
            return 'Weirdo blackie or something idk what to rate him';
        } else if (input.toLowerCase() == 'tairny') {
            return "Little Is known about this strange guy, other than the fact that he's here. 69% lgbt.";
        } else if (input.toLowerCase() == 'aqlin') {
            return 'Australian Asexual, likes to read and game. 50% LGBTQ';
        } else if (input.toLowerCase() == 'sierruhh' || input.toLowerCase() == 'sierra') {
            return 'She has allegedly come out, although no one knows what sexuality she has become. 46% LGBT';
        } else if (input.toLowerCase() == 'chwys') {
            return "L taco";
        } else if (input.toLowerCase() == 'invis') {
            document.getElementById("invis").currentTime = 0;
            document.getElementById("invis").play();
            return 'Sexy Invis Pot';
        } else if (input.toLowerCase() == 'leash') {
            document.getElementById("leash").currentTime = 0;
            document.getElementById("leash").play();
            return 'Kinda kinky';
        } else if (input.toLowerCase() == 'slurp') {
            document.getElementById("slurp").currentTime = 0;
            document.getElementById("slurp").play();
            return 'Mhhh lgbt confirmed';
        } else if (input.toLowerCase() == 'cynxmolly') {
            document.getElementById("cynxmolly").currentTime = 0;
            document.getElementById("cynxmolly").play();
            return 'That ship has sailed.';
        } else if (input.toLowerCase() == "wowwhatafuckingstupidthingtodoputtingthispictureonthesitewhattheheckiswrongwithyouintroomgihateyousomuchnowaythiswilleverhappenhowwtf") {
            return "<img src='secret/picture.jpg'></img>";
        } else {
        return `You are ${randomInt(0, 100)}% LGBT.`;
    }
}

function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

