"use strict"
  (function (){
    // namespace var
    var cyoa = {};

    //data vars
    cyoa.data = {};
    cyoa.data.statValues = [50, 25, 20, 5, 200];
    cyoa.data.clicker = false;
    cyoa.data.sunday = false;
    cyoa.data.minor = undefined;
    cyoa.data.rpgDialog = document.getElementById('rpgDialog');
    cyoa.data.rpgOptions = document.getElementById('rpgOptions');
    cyoa.data.statCon = document.getElementById('statusCon');
    cyoa.data.pMake0 = document.getElementById('pMake0');
    cyoa.data.pMake1 = document.getElementById('pMake1');
    cyoa.data.pMake2 = document.getElementById('pMake2');
    cyoa.data.pMake3 = document.getElementById('pMake3');
    cyoa.data.timing1 = 1100;
    cyoa.data.timing2 = 2200;
    cyoa.data.timing3 = 3300;
    cyoa.data.timing4 = 4400;
    cyoa.data.b1 = document.getElementById("b1");
    cyoa.data.b2 = document.getElementById("b2");
    cyoa.data.b3 = document.getElementById("b3");
    cyoa.data.b4 = document.getElementById("b4");
    cyoa.data.contextLinks = document.getElementById("context_links");
    cyoa.data.bossLinks = document.getElementById("boss_links");
    cyoa.data.oapLink = document.getElementById("oap_link");
    cyoa.data.phLinks = document.getElementById("ph_links");


    //sound vars
    cyoa.sounds = {};
    cyoa.sounds.loseAudio = new Audio('https://usarak-official.github.io/cyoa/270329__littlerobotsoundfactory__jingle-lose-00.mp3');
    cyoa.sounds.winAudio = new Audio('https://usarak-official.github.io/cyoa/270330__littlerobotsoundfactory__jingle-achievement-01.mp3');
    cyoa.sounds.collectAudio = new Audio('https://usarak-official.github.io/cyoa/270303__littlerobotsoundfactory__collect-point-01.mp3');
    cyoa.sounds.hitAudio = new Audio('https://usarak-official.github.io/cyoa/270338__littlerobotsoundfactory__open-01.mp3');
    cyoa.sounds.selectAudio = new Audio('http://usarak-official.github.io/cyoa/sfx_menu_select1.mp3');
    cyoa.sounds.clickAudio = new Audio('https://usarak-official.github.io/cyoa/270324__littlerobotsoundfactory__menu-navigate-00.wav');
    cyoa.sounds.pewAudio = new Audio('https://usarak-official.github.io/cyoa/270306__littlerobotsoundfactory__explosion-02.wav');

    //image vars
    cyoa.image = {};
    cyoa.image.walk = document.getElementById("player-walk");
    cyoa.image.jump = document.getElementById("player-jump");
    cyoa.image.kneel = document.getElementById("player-kneel");

    //functions
    cyoa.funk = {};
    //Anims
    cyoa.funk.updateStats = function() {
      document.getElementById('hp_js').innerText = cyoa.data.statValues[0];
      document.getElementById('int_js').innerText = cyoa.data.statValues[1];
      document.getElementById('per_js').innerText = cyoa.data.statValues[2];
      document.getElementById('fun_js').innerText = cyoa.data.statValues[3];
      document.getElementById('usd_js').innerText = cyoa.data.statValues[4];
      cyoa.funk.flashStats();
    };
    cyoa.funk.imgPlay = function() {
      cyoa.image.walk.classList.remove("display-none");
      cyoa.image.jump.classList.add("display-none");
      cyoa.image.kneel.classList.add("display-none");
    }
    cyoa.funk.imgWin = function() {
      cyoa.image.walk.classList.add("display-none");
      cyoa.image.jump.classList.remove("display-none");
      cyoa.image.kneel.classList.add("display-none");
    }
    cyoa.funk.imgLose = function() {
      cyoa.image.walk.classList.add("display-none");
      cyoa.image.jump.classList.add("display-none");
      cyoa.image.kneel.classList.remove("display-none");
    }
    cyoa.funk.minorRandomizer = function () {
      var randomSeed = Math.random();
        if (randomSeed <= 0.5)
        {
          cyoa.data.minor = true;
        }
        else{
          cyoa.data.minor = false;
        }
    };
    // Functions
    cyoa.funk.disableClick = function() {
      cyoa.data.clicker = false;
    }
    cyoa.funk.enableClick = function() {
      cyoa.data.clicker = true;
    }
    cyoa.funk.isSaturday = function(){
      cyoa.data.sunday = false;
    }
    cyoa.funk.isSunday = function(){
      cyoa.data.sunday = true;
    }
    cyoa.funk.isMinor = function(){
      cyoa.data.minor = true;
    }
    cyoa.funk.noMinor = function(){
      cyoa.data.minor = false;
    }
    cyoa.funk.flashStats = function() {
      cyoa.data.statCon.classList.add('fade');
      setTimeout(function() {cyoa.data.statCon.classList.remove('fade');}, 600);
    }
    // These are functions that affect body text
    cyoa.funk.pLoading = function() {
      cyoa.data.pMake0.textContent = "...loading...";
    }
    cyoa.funk.xDialog = function() {
      cyoa.data.pMake0.textContent ="";
      cyoa.data.pMake1.textContent ="";
      cyoa.data.pMake2.textContent ="";
      cyoa.data.pMake3.textContent ="";
    }
    //These are the dialog functions for game start, sunday morning, and game end.
    cyoa.funk.sn0Dia = function() {
      setTimeout(function() {cyoa.data.pMake0.textContent = "It's Saturday. It's been a long work week, and you deserve to take some time to unwind. There are events on the Outdoor Adventure Program website, and on the BOSS Facebook feed. You can also go out drinking."}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "What would you like to do?"}, cyoa.data.timing2);
      cyoa.funk.optSet0();
      cyoa.funk.isSaturday();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn0_1Dia = function() {
      setTimeout(function() {cyoa.data.pMake0.textContent = "You made it through Saturday, safely."}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "You still have some money in your wallet, and the weekend isn't over yet. You can take it easy, check out the OAP events, or go out for a drink. Don't forget you have work on Monday."}, cyoa.data.timing2);
      cyoa.funk.optSet0_1();
      cyoa.funk.isSunday();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn0_2Dia = function() {
      setTimeout(function() {cyoa.data.pMake0.textContent = "WIN!"}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "You had a pretty good weekend, and didn't get into trouble."}, cyoa.data.timing2);
      cyoa.funk.imgWin();
      setTimeout(function() {cyoa.data.pMake2.textContent = "You made smart choices and avoided doing anything that would have a lasting financial or career impact."}, cyoa.data.timing3);
      cyoa.sounds.winAudio.play();
      cyoa.funk.optSetReset();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    //These are the dialog functions for the BOSS program and branching scenarios, although completing successfully will send you to 0_1.
    cyoa.funk.sn1Dia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "There's an e-sports gaming tournament today. Free refreshments for spectators; $35 to enter. If you win the tournament, there's a $100 prize."}, cyoa.data.timing1);
     setTimeout(function() {cyoa.data.pMake1.textContent = "What do you want to do?"}, cyoa.data.timing2);
     setTimeout(function() {cyoa.data.bossLinks.classList.remove("hidden");}, cyoa.data.timing3);
      cyoa.funk.optSet1();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn1_1DiaWin = function(){
      cyoa.funk.disableClick();
      cyoa.funk.xDialog();
      cyoa.sounds.winAudio.play();
      setTimeout(function() {cyoa.data.pMake0.textContent = "Winner!"}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "+$100  +Fun"}, cyoa.data.timing2);
      cyoa.data.statValues[4] -=35;
      cyoa.data.statValues[4] +=100;
      cyoa.data.statValues[3] +=20;
      cyoa.funk.updateStats();
      cyoa.funk.imgWin();
      setTimeout(function() {cyoa.data.pMake2.textContent = "You won the tournament! The competition was fierce, but your finely-honed reflexes took the day. As you exit the building with a grin on your face, Sgt. Binky gives you a thumbs-up."}, cyoa.data.timing3);
      cyoa.funk.optSetNextDay();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn1_1DiaLose = function(){
      cyoa.funk.disableClick();
      cyoa.funk.xDialog();
      cyoa.sounds.pewAudio.play();
      cyoa.data.statValues[4] -=35;
      cyoa.data.statValues[3] +=20;
      cyoa.funk.updateStats();
      setTimeout(function() {cyoa.data.pMake0.textContent = "You took second place, but it was close. It really looked like you were going to win, but Sgt. Binky took the lead in the last round."}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "You'll never quite understand how Binky manages to work the controller with those giant bear paws..."}, cyoa.data.timing2);
      cyoa.funk.optSetNextDay();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing2);
    }
    cyoa.funk.sn1_2Dia = function(){
      cyoa.funk.disableClick();
      cyoa.sounds.pewAudio.play();
      cyoa.data.statValues[3] +=10;
      cyoa.funk.updateStats();
      setTimeout(function() {cyoa.data.pMake0.textContent = "+10 FUN"}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "Watching the tournament was pretty enjoyable, plus you got free snacks."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake3.textContent = "Sgt. Binky managed to win the entire competition, even without opposable thumbs."}, cyoa.data.timing3);
      cyoa.funk.optSetNextDay();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    //These are the dialog functions for the OAP and branching scenarios, as above.
    cyoa.funk.sn2Dia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "OAP has a snowmachine ride in Willow, and fat tire bike rentals."}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "The snowmachine ride is $99, and looks like a lot of fun. Fat tire rentals are $5, looks like both fun and a workout. "}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "What would you like to do?"}, cyoa.data.timing3);
      cyoa.funk.optSet2();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn2_0_1Dia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "OAP has another snowmachine ride by the Knik river, and you can borrow a pair of cross-country skis for free."}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "What would you like to do?"}, cyoa.data.timing2);
      cyoa.funk.optSet2_0_1();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn2_2Dia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "-$5"}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "+5HP +5FUN"}, cyoa.data.timing2);
      cyoa.data.statValues[4] -=5;
      cyoa.data.statValues[3] -=5;
      cyoa.data.statValues[0] +=5;
      cyoa.sounds.collectAudio.play();
      cyoa.funk.imgWin();
      cyoa.funk.updateStats();
      setTimeout(function() {cyoa.data.pMake2.textContent = "That was fun! You got in some good cardio, and those big studded tires powered right on through."}, cyoa.data.timing3);
      cyoa.funk.optSetNextDay();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn2_1Dia = function(){
      cyoa.funk.disableClick();
      cyoa.data.statValues[4] -=99;
      cyoa.data.statValues[3] +=30;
      cyoa.funk.updateStats();
      cyoa.sounds.collectAudio.play();
      cyoa.funk.imgWin();
      setTimeout(function() {cyoa.data.pMake0.textContent = "-$99"}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "+30 FUN"}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake2.textContent = "That snowmachine was a ton of fun! Cold, but what a rush."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake3.textContent = "You brush the snow off your face and realize the day has gotten late."}, cyoa.data.timing3);
      cyoa.funk.optSetNextDay();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn2_1_1Dia = function(){
      cyoa.funk.disableClick();
      cyoa.data.statValues[4] -=99;
      cyoa.funk.updateStats();
      cyoa.sounds.collectAudio.play();
      cyoa.funk.imgWin();
      setTimeout(function() {cyoa.data.pMake0.textContent = "-$99"}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "+30 FUN"}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake2.textContent = "That was awesome!"}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake3.textContent = "You had a great time, and a safe weekend. You feel refreshed and ready to take on Monday."}, cyoa.data.timing3);
      cyoa.funk.optSetReset();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn2_2_1Dia = function(){
      cyoa.funk.disableClick();
      cyoa.data.statValues[0] +=5;
      cyoa.data.statValues[3] +=30;
      cyoa.funk.updateStats();
      cyoa.sounds.collectAudio.play();
      cyoa.funk.imgWin();
      setTimeout(function() {cyoa.data.pMake0.textContent = "+5HP +30 FUN"}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "That was pretty fun. You got a little bit of a workout, and the mountains were beautiful."}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake2.textContent = "As a bonus, you didn't knock down a single tree with your face."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake3.textContent = "You feel invigorated, and ready to take on the week."}, cyoa.data.timing3);
      cyoa.funk.optSetReset();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }

    //These are the dialog functions for drinking scenarios.
    cyoa.funk.sn3Dia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "Some friends are going out drinking."}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "You know there should be a designated driver or a plan to get home, and everyone needs to be at least 21."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "What do you want to do?"}, cyoa.data.timing3); 
      cyoa.funk.optSet3();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn3_1Dia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "Oh no!"}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "One of the people in the group is 19, and can't legally drink alcohol."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "You decide to..."}, cyoa.data.timing3); 
      cyoa.funk.optSet3_1();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn3_1_1Dia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "You arrive at the bar."}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "There's an employee at the entrance checking IDs. She looks sober and sharp-eyed."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "You..."}, cyoa.data.timing3); 
      cyoa.funk.optSet3_1_1();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn3_1_2Dia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "Now that everyone in the group is of legal drinking age, You have options;"}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "You can volunteer to be the DD, plan on taking a ride home, or plan to drive yourself afterward."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "What would you like to do?"}, cyoa.data.timing3); 
      cyoa.funk.optSet3_2();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn3_1_1_1Dia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "While waiting in line, you notice the employee at the front door holding herself in a very alert manner. You try to shake off your suspicions. She examines your ID with a critical eye and waves you through. She stops your 19-year old colleague. \"He's with me,\" you say."}, cyoa.data.timing1);
      cyoa.funk.imgLose();
      setTimeout(function() {cyoa.data.pMake1.textContent = "\"Great,\" she says, and shows you her police identification. \"I'll need to ask both of you a few questions.\""}, cyoa.data.timing2);
      setTimeout(function() {cyoa.sounds.loseAudio.play();}, cyoa.data.timing3);
      setTimeout(function() {cyoa.data.statValues[4] -=24265;}, cyoa.data.timing3);
      setTimeout(function() {cyoa.data.statValues[3] -=5;}, cyoa.data.timing3);
      setTimeout(function() {cyoa.funk.updateStats();}, cyoa.data.timing3);
      setTimeout(function() {cyoa.data.pMake2.textContent = "You receive a General Officer Memorandum of Reprimand, face years of legal fees, court fees and fines, increased insurance, and the possibility of being processed for discharge."}, cyoa.data.timing3);
      setTimeout(function() {cyoa.data.pMake3.textContent = "GAME OVER. -$24,265, -5 FUN"}, cyoa.data.timing4); 
      cyoa.funk.optSetReset();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing4);
    }
    cyoa.funk.sn3_1_1_2Dia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "You wait in line. When you get close to the door, you suddenly double over in feigned distress."}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "\"Oh! My leg! My foot!\" Several people cluster around you and ask what's wrong. \"Oh, it hurts so bad! It must be-\" you rack your brain for something believable. \"Gout!\""}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "As ridiculous as it was, it must have worked; your 19-year-old colleague slipped into the bar in the commotion."}, cyoa.data.timing3); 
      cyoa.funk.optSet3_1_1_2();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn3_1_1_2_1Dia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "You sit down at the bar for a few minutes. Before long, you notice singing behind you."}, cyoa.data.timing1);
      cyoa.funk.imgLose();
      setTimeout(function() {cyoa.data.pMake1.textContent = "The minor you brought along is singing karaoke, and is surprisingly good at it."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.sounds.loseAudio.play();}, cyoa.data.timing3);
      setTimeout(function() {cyoa.data.statValues[4] -=24265;}, cyoa.data.timing3);
      setTimeout(function() {cyoa.data.statValues[3] -=5;}, cyoa.data.timing3);
      setTimeout(function() {cyoa.funk.updateStats();}, cyoa.data.timing3);
      setTimeout(function() {cyoa.data.pMake3.textContent = "Unfortunately, someone recognizes your friend, and the police are called. You now face legal charges, an average of over $24,265 in fines, fees and other penalties, as well as a GOMOR - and to top it off, you may no longer have a career."}, cyoa.data.timing3);
      setTimeout(function() {cyoa.data.pMake4.textContent = "GAME OVER. -$24,265, -5 FUN"}, cyoa.data.timing4); 
      cyoa.funk.optSetReset();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing4);
    }
    cyoa.funk.sn3_2Dia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "You have options;"}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "You can volunteer to be the DD, plan on taking a ride home, or plan to drive yourself afterward."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "What would you like to do?"}, cyoa.data.timing3); 
      cyoa.funk.optSet3_2();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn3_2_bDia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "Now that everyone in the group is of legal drinking age, You have options;"}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "You can volunteer to be the DD, plan on taking a ride home, or plan to drive yourself afterward."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "What would you like to do?"}, cyoa.data.timing3); 
      cyoa.funk.optSet3_2();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn3_2_1Dia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "You volunteer to drive. When you get to the bar, there's a special for unlimited non-alcoholic drinks and appetizers for designated drivers."}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "You make $20 in tips, get free food and feel hydrated. You also have fun talking to the waitstaff. Before long, it's time to head home."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "+$20 +5HP +10FUN"}, cyoa.data.timing3); 
      setTimeout(function() {cyoa.data.statValues[0] +=5;}, cyoa.data.timing3);
      setTimeout(function() {cyoa.data.statValues[3] +=10;}, cyoa.data.timing3);
      setTimeout(function() {cyoa.data.statValues[4] +=20;}, cyoa.data.timing3);
      setTimeout(function() {cyoa.funk.updateStats();}, cyoa.data.timing3);
      setTimeout(function() {cyoa.sounds.collectAudio.play();}, cyoa.data.timing3); 
      cyoa.funk.optSetNextDay();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn3_2_2_aDia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "You arrive at the bar. One of your friends is the designated driver."}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "You have a few drinks, spend more than you intended to, and sing some karaoke."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "Last call comes up before you know it, and it's time to settle your bill and head home."}, cyoa.data.timing3);
      cyoa.funk.optSet3_2_2_a();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn3_2_2_bDia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "You arrive at the bar. Looking over the group, you see that a member of your group isn't 21."}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "There's an employee at the entrance checking IDs. She looks sober and sharp-eyed."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "You..."}, cyoa.data.timing3); 
      cyoa.funk.optSet3_1_1();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn3_2_2_1_aDia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "-$75 +10FUN -20 Reasoning -10 Perception"}, cyoa.data.timing1);
      setTimeout(function() {cyoa.sounds.hitAudio.play();}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[4] -=75;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[3] +=10;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[2] -=20;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[1] -=10;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.funk.updateStats();}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "Your head feels fuzzy, your wallet feels light and you're pretty sure the bartender has a twin that wasn't there before."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "You look around, and your friend the designated driver looks clear-eyed, happy and sober, and is rounding everyone up to go home."}, cyoa.data.timing3);
      cyoa.funk.optSetNextDay();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn3_2_2_b_1Dia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "You have a few drinks, spend more than you intended to, and sing some karaoke."}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "You're fairly sure you told many people many smart things, all night long. "}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "Last call comes up before you know it, and it's time to settle your bill."}, cyoa.data.timing3);
      cyoa.funk.optSet3_2_2_a();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn3_2_2_1_bDia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "-$75 +10FUN -20 Reasoning -10 Perception"}, cyoa.data.timing1);
      setTimeout(function() {cyoa.sounds.hitAudio.play();}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[4] -=75;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[3] +=10;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[2] -=20;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[1] -=10;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.funk.updateStats();}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "Your head feels fuzzy, your wallet feels light and you're pretty sure the bartender has a twin that wasn't there before."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "Oh no! Your designated driver ended up drinking, and can't drive. After some talk, you decide to..."}, cyoa.data.timing3);
      cyoa.funk.optSet3_2_2_1_b();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn3_2_2_1_1Dia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "-$11"}, cyoa.data.timing1);
      setTimeout(function() {cyoa.sounds.hitAudio.play();}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[4] -=11;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.funk.updateStats();}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "You split a cab ride, and head home safely."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "Now it's getting late, and time to settle down for the night."}, cyoa.data.timing3);
      cyoa.funk.optSetNextDay();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn3_2_2_1_2Dia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "You call the SADD van, and get a free ride home."}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "They ask for your military ID and take you where you're going."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "Now it's time to settle down for the night."}, cyoa.data.timing3);
      cyoa.funk.optSetNextDay();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    // cyoa.funk.sn3_2_2_1_3Dia = function(){
    //   setTimeout(function() {cyoa.data.pMake0.textContent = "-$75 +10FUN -20 Reasoning -10 Perception"}, cyoa.data.timing1);
    //   setTimeout(function() {cyoa.sounds.hitAudio.play();}, cyoa.data.timing1);
    //   setTimeout(function() {cyoa.data.statValues[4] -=75;}, cyoa.data.timing1);
    //   setTimeout(function() {cyoa.data.statValues[3] +=10;}, cyoa.data.timing1);
    //   setTimeout(function() {cyoa.data.statValues[2] +=20;}, cyoa.data.timing1);
    //   setTimeout(function() {cyoa.data.statValues[1] +=10;}, cyoa.data.timing1);
    //   setTimeout(function() {cyoa.funk.updateStats();}, cyoa.data.timing1);
    //   setTimeout(function() {cyoa.data.pMake1.textContent = "Your head feels fuzzy, your wallet feels light and you're pretty sure the bartender has a twin that wasn't there before."}, cyoa.data.timing2);
    //   setTimeout(function() {cyoa.data.pMake2.textContent = "Oh no! Your designated driver ended up drinking, and can't drive. After some talk, you decide to..."}, cyoa.data.timing3);
    //   cyoa.funk.optSet3_2_2_1_3();
    //   setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    // }
    cyoa.funk.sn3_2_3_aDia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "The group decides to take a taxi or the SADD van."}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "You arrive at a comedy club. There's a show going on, and it's pretty enjoyable."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "Before you know it, the evening is over. It's time to settle up."}, cyoa.data.timing3); 
      cyoa.funk.optSet3_2_3_a();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn3_2_3_bDia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "The group decides to take a taxi or the SADD van."}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "When you get to the bar, you see that one of your members isn't 21."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "There's someone at the door checking IDs. She looks sober and sharp-eyed. You..."}, cyoa.data.timing3); 
      cyoa.funk.optSet3_2_3_b();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn3_2_4_1_bDia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "You head out without a plan to get home."}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "You arrive at a comedy club. There's a show going on, and it's pretty enjoyable."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "Before you know it, the evening is over. It's time to settle up."}, cyoa.data.timing3); 
      cyoa.funk.optSet3_2_4_1_a();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn3_2_4_1_aDia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "You head out without a plan to get home."}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "When you get to the bar, you see that one of your members isn't 21."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "There's someone at the door checking IDs. She looks sober and sharp-eyed. You..."}, cyoa.data.timing3); 
      cyoa.funk.optSet3_2_4_1_b();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn3_2_3_1Dia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "-$75 +10FUN -20 Reasoning -10 Perception"}, cyoa.data.timing1);
      setTimeout(function() {cyoa.sounds.hitAudio.play();}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[4] -=75;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[3] +=10;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[2] +=20;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[1] +=10;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.funk.updateStats();}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "Against all odds you managed to rack up a $75 bill while drinking $16 drinks."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "It's time to get going - how are you getting home?"}, cyoa.data.timing3);
      cyoa.funk.optSet3_2_3();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn3_2_4Dia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "A voice rings out behind you. \"Hey - are you sure you want to do that?\""}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "You turn around - It's SGT Binky. \"A DUI can cost you more than $20K and your career. I don't know about you, but an E-5 like me can't just throw that away.\""}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "What do you do?"}, cyoa.data.timing3); 
      cyoa.funk.optSet3_2_4();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn3_2_4_2Dia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "You have options;"}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.pMake1.textContent = "Be the DD, ask someone else to be the DD, get a ride, or drive yourself."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "Just remember - drinking and driving is against the law. What would you like to do?"}, cyoa.data.timing3); 
      cyoa.funk.optSet3_2_4_2();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn3_2_4_2_4Dia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "-$75 +10FUN -20 Reasoning -10 Perception"}, cyoa.data.timing1);
      setTimeout(function() {cyoa.sounds.hitAudio.play();}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[4] -=75;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[3] +=10;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[2] +=20;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[1] +=10;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.funk.updateStats();}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake1.textContent = "Against all odds you managed to rack up a $75 bill while drinking $16 drinks."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "It's time to get going - how are you getting home?"}, cyoa.data.timing3);
      cyoa.funk.optSet3_2_3();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing3);
    }
    cyoa.funk.sn3_x_aDia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "-$24,265 -5FUN -20 Reasoning -10 Perception -45HP"}, cyoa.data.timing1);
      cyoa.funk.imgLose();
      setTimeout(function() {cyoa.data.statValues[4] =-24265;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[3] =0;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[2] =10;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[1] =5;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[0] =5;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.sounds.loseAudio.play();}, cyoa.data.timing1);
      setTimeout(function() {cyoa.funk.updateStats();}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake1.textContent = "You walk out to the car and fumble your keys a few times, but manage to open the door and start the engine. Easing the car out onto the street, you look in your rear-view mirror - and promptly crash into a police car."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "You are subject to a GOMOR, lose thousands of dollars in fees, fines and added costs, and it looks like you won't have a career any more."}, cyoa.data.timing3);
      setTimeout(function() {cyoa.data.pMake3.textContent = "GAME OVER"}, cyoa.data.timing4);
      cyoa.funk.optSetReset();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing4);
    }
    cyoa.funk.sn3_x_bDia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "-$24,265 -5FUN -20 Reasoning -10 Perception -45HP"}, cyoa.data.timing1);
      cyoa.funk.imgLose();
      setTimeout(function() {cyoa.data.statValues[4] =-24265;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[3] =0;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[2] =10;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[1] =5;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[0] =5;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.sounds.loseAudio.play();}, cyoa.data.timing1);
      setTimeout(function() {cyoa.funk.updateStats();}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake1.textContent = "WOOO! Apparently, one too many vodka+energy drink combos lead you to live your life a quarter mile at a time - a very quick quarter mile which ends with you running straight into the guardrail."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "Fortunately, no one dies - however, You are subject to a GOMOR, lose thousands of dollars in fees, fines and added costs, and it looks like you won't have a career any more."}, cyoa.data.timing3);
      setTimeout(function() {cyoa.data.pMake3.textContent = "GAME OVER"}, cyoa.data.timing4);
      cyoa.funk.optSetReset();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing4);
    }
    cyoa.funk.sn3_x_cDia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "-$24,265 -5FUN -20 Reasoning -10 Perception -45HP"}, cyoa.data.timing1);
      cyoa.funk.imgLose();
      setTimeout(function() {cyoa.data.statValues[4] =-24265;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[3] =0;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[2] =10;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[1] =5;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[0] =5;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.sounds.loseAudio.play();}, cyoa.data.timing1);
      setTimeout(function() {cyoa.funk.updateStats();}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake1.textContent = "You decide to drive home slowly, so you'll have more time to react. Unfortunately, due to your low perception, you forgot to turn on the lights and you get rear-ended. A police vehicle arrives at the scene, and determines that you were driving under the influence of intoxicants."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "You are subject to a GOMOR, lose thousands of dollars in fees, fines and added costs, and it looks like you won't have a career any more."}, cyoa.data.timing3);
      setTimeout(function() {cyoa.data.pMake3.textContent = "GAME OVER"}, cyoa.data.timing4);
      cyoa.funk.optSetReset();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing4);
    }
    cyoa.funk.sn3_x_dDia = function(){
      setTimeout(function() {cyoa.data.pMake0.textContent = "-$24,265 -5FUN -20 Reasoning -10 Perception -45HP"}, cyoa.data.timing1);
      cyoa.funk.imgLose();
      setTimeout(function() {cyoa.data.statValues[4] =-24265;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[3] =0;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[2] =10;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[1] =5;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.data.statValues[0] =5;}, cyoa.data.timing1);
      setTimeout(function() {cyoa.sounds.loseAudio.play();}, cyoa.data.timing1);
      setTimeout(function() {cyoa.funk.updateStats();}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake1.textContent = "While holding yourself in a pose of nearly perfect sobriety, you don't see the moose until it's too late - for the moose. The people in your car survive the crash, but if you'd run into another vehicle you could have killed someone."}, cyoa.data.timing2);
      setTimeout(function() {cyoa.data.pMake2.textContent = "You are subject to a GOMOR, lose thousands of dollars in fees, fines and added costs, and it looks like you won't have a career any more. Fortunately, no one died."}, cyoa.data.timing3);
      setTimeout(function() {cyoa.data.pMake3.textContent = "GAME OVER"}, cyoa.data.timing4);
      cyoa.funk.optSetReset();
      setTimeout(cyoa.funk.enableClick, cyoa.data.timing4);
    }



    

    //Sets of buttons
    cyoa.funk.optSetReset = function(){
      cyoa.data.b2.classList.add("hidden");
      cyoa.data.b3.classList.add("hidden");
      cyoa.data.b4.classList.add("hidden");
      cyoa.data.b1.textContent = "Play Again"
      cyoa.data.b1.setAttribute("data-choice", "0");
    }
    cyoa.funk.optSetNextDay = function(){
      cyoa.data.b2.classList.add("hidden");
      cyoa.data.b3.classList.add("hidden");
      cyoa.data.b4.classList.add("hidden");
      cyoa.data.b1.textContent = "Go to sleep for the night"
      cyoa.data.b1.setAttribute("data-choice", "0_1");
    }
    cyoa.funk.optSet0 = function(){
      cyoa.data.b1.classList.remove("hidden");
      cyoa.data.b2.classList.remove("hidden");
      cyoa.data.b3.classList.remove("hidden");
      cyoa.data.b4.classList.add("hidden");
      cyoa.data.b1.textContent = "Check the BOSS Facebook page for events";
      cyoa.data.b1.setAttribute("data-choice", "1_0");
      cyoa.data.b2.textContent = "Take a look at what the Outdoor Adventure Program is offering";
      cyoa.data.b2.setAttribute("data-choice", "2_0");
      cyoa.data.b3.textContent = "Go out for a drink";
      cyoa.data.b3.setAttribute("data-choice", "3_0");
    }
    cyoa.funk.optSet0_1 = function(){
      cyoa.data.b1.classList.remove("hidden");
      cyoa.data.b2.classList.remove("hidden");
      cyoa.data.b3.classList.remove("hidden");
      cyoa.data.b1.textContent = "Take it easy";
      cyoa.data.b1.setAttribute("data-choice", "0_2");
      cyoa.data.b2.textContent = "Check out the OAP";
      cyoa.data.b2.setAttribute("data-choice", "2_0_1");
      cyoa.data.b3.textContent = "Go out for a drink";
      cyoa.data.b3.setAttribute("data-choice", "3_0");
    }
    cyoa.funk.optSet1 = function(){
      cyoa.data.b1.textContent = "Enter the game tournament ($35)";
      cyoa.data.b1.setAttribute("data-choice", "1_1");
      cyoa.data.b2.textContent = "Watch the tournament";
      cyoa.data.b2.setAttribute("data-choice", "1_2");
      cyoa.data.b3.textContent = "Do something else";
      cyoa.data.b3.setAttribute("data-choice", "1_3");
    }
    cyoa.funk.optSet2 = function(){
      cyoa.data.b1.textContent = "Take a snowmachine ride ($99)";
      cyoa.data.b1.setAttribute("data-choice", "2_1");
      cyoa.data.b2.textContent = "Rent a fat tire bike ($5)";
      cyoa.data.b2.setAttribute("data-choice", "2_2");
      cyoa.data.b3.textContent = "Do something else";
      cyoa.data.b3.setAttribute("data-choice", "1_3");
    }
    cyoa.funk.optSet2_0_1 = function(){
      cyoa.data.bossLinks.classList.add("hidden");
      cyoa.data.b1.textContent = "Take a snowmachine ride ($99)";
      cyoa.data.b1.setAttribute("data-choice", "2_1_1");
      cyoa.data.b2.textContent = "Borrow the skis";
      cyoa.data.b2.setAttribute("data-choice", "2_2_1");
      cyoa.data.b3.textContent = "Do something else";
      cyoa.data.b3.setAttribute("data-choice", "0_2");
    }
    cyoa.funk.optSet3 = function(){
      cyoa.data.bossLinks.classList.add("hidden");
      cyoa.data.b1.textContent = "Check everyone's age";
      cyoa.data.b1.setAttribute("data-choice", "3_1");
      cyoa.data.b2.textContent = "Talk about a DD or a ride";
      cyoa.data.b2.setAttribute("data-choice", "3_2");
      cyoa.data.b3.textContent = "Change my mind";
      cyoa.data.b3.setAttribute("data-choice", "0_3");
    }
    cyoa.funk.optSet3_1 = function(){
      cyoa.data.b4.classList.add("hidden");
      cyoa.data.b1.textContent = "Go for a drink anyway";
      cyoa.data.b1.setAttribute("data-choice", "3_1_1");
      cyoa.data.b2.textContent = "Send the minor home, then go for a drink";
      cyoa.data.b2.setAttribute("data-choice", "3_1_2");
      cyoa.data.b3.textContent = "Do something else";
      cyoa.data.b3.setAttribute("data-choice", "1_3");
    }
    cyoa.funk.optSet3_1_1 = function(){
      cyoa.data.b4.classList.add("hidden");
      cyoa.data.b1.textContent = "Try to bluff your way in";
      cyoa.data.b1.setAttribute("data-choice", "3_1_1_1");
      cyoa.data.b2.textContent = "Create a distraction so the minor can sneak in";
      cyoa.data.b2.setAttribute("data-choice", "3_1_1_2");
      cyoa.data.b3.textContent = "Leave, because the door clearly says everyone must be 21";
      cyoa.data.b3.setAttribute("data-choice", "1_3");
    }
    cyoa.funk.optSet3_1_1_2 = function(){
      cyoa.data.b2.classList.add("hidden");
      cyoa.data.b3.classList.add("hidden");
      cyoa.data.b4.classList.add("hidden");
      cyoa.data.b1.textContent = "Get a drink";
      cyoa.data.b1.setAttribute("data-choice", "3_1_1_2_1");
    }
    cyoa.funk.optSet3_2 = function(){
      cyoa.data.b1.textContent = "Volunteer to be the DD";
      cyoa.data.b1.setAttribute("data-choice", "3_2_1");
      cyoa.data.b2.textContent = "Make someone else be the DD";
      cyoa.data.b2.setAttribute("data-choice", "3_2_2");
      cyoa.data.b3.textContent = "Plan to get a ride or a taxi";
      cyoa.data.b3.setAttribute("data-choice", "3_2_3");
      cyoa.data.b4.classList.remove("hidden");
      cyoa.data.b4.textContent = "There is no DD";
      cyoa.data.b4.setAttribute("data-choice", "3_2_4");
    }
    cyoa.funk.optSet3_2_2_a = function(){
      cyoa.data.b2.classList.add("hidden");
      cyoa.data.b3.classList.add("hidden");
      cyoa.data.b4.classList.add("hidden");
      cyoa.data.b1.textContent = "Settle your tab";
      cyoa.data.b1.setAttribute("data-choice", "3_2_2_1");
    }
    cyoa.funk.optSet3_2_3_a = function(){
      cyoa.data.b2.classList.add("hidden");
      cyoa.data.b3.classList.add("hidden");
      cyoa.data.b4.classList.add("hidden");
      cyoa.data.b1.textContent = "Settle your tab";
      cyoa.data.b1.setAttribute("data-choice", "3_2_3_1");
    }
    cyoa.funk.optSet3_2_3_b = function(){
      cyoa.data.b4.classList.add("hidden");
      cyoa.data.b1.textContent = "Try to bluff your way in";
      cyoa.data.b1.setAttribute("data-choice", "3_1_1_1");
      cyoa.data.b2.textContent = "Get the minor a ride home, so the group can enjoy themselves legally";
      cyoa.data.b2.setAttribute("data-choice", "3_2_3_a");
      cyoa.data.b3.textContent = "Leave, because the door clearly says everyone must be 21";
      cyoa.data.b3.setAttribute("data-choice", "1_3");
    }
    cyoa.funk.optSet3_2_2_1_b = function(){
      cyoa.data.b2.classList.remove("hidden");
      cyoa.data.b3.classList.remove("hidden");
      cyoa.data.b4.classList.add("hidden");
      cyoa.data.b1.textContent = "Call a taxi";
      cyoa.data.b1.setAttribute("data-choice", "3_2_2_1_1");
      cyoa.data.b2.textContent = "Call the SADD/JBADD van";
      cyoa.data.b2.setAttribute("data-choice", "3_2_2_1_2");
      cyoa.data.b3.textContent = "Drive home anyway";
      cyoa.data.b3.setAttribute("data-choice", "3_x");
    }
    cyoa.funk.optSet3_2_3 = function(){
      cyoa.data.b4.classList.add("hidden");
      cyoa.data.b1.classList.remove("hidden");
      cyoa.data.b2.classList.remove("hidden");
      cyoa.data.b3.classList.remove("hidden");
      cyoa.data.b1.textContent = "Call the SADD van";
      cyoa.data.b1.setAttribute("data-choice", "3_2_2_1_2");
      cyoa.data.b2.textContent = "Take a taxi";
      cyoa.data.b2.setAttribute("data-choice", "3_2_2_1_1");
      cyoa.data.b3.textContent = "Drive yourself home";
      cyoa.data.b3.setAttribute("data-choice", "3_x");
    }
    cyoa.funk.optSet3_2_4 = function(){
      cyoa.data.b4.classList.add("hidden");
      cyoa.data.b1.textContent = "Ignore SGT Binky and go out for a drink anyway";
      cyoa.data.b1.setAttribute("data-choice", "3_2_4_1");
      cyoa.data.b2.textContent = "Talk about getting a ride";
      cyoa.data.b2.setAttribute("data-choice", "3_2_4_2");
      cyoa.data.b3.textContent = "Do something else";
      cyoa.data.b3.setAttribute("data-choice", "1_3");
    }
    cyoa.funk.optSet3_2_4_1_a = function(){
      cyoa.data.b2.classList.add("hidden");
      cyoa.data.b3.classList.add("hidden");
      cyoa.data.b4.classList.add("hidden");
      cyoa.data.b1.textContent = "Settle your tab";
      cyoa.data.b1.setAttribute("data-choice", "3_2_4_1_a_1");
    }
    cyoa.funk.optSet3_2_4_1_b = function(){
      cyoa.data.b4.classList.add("hidden");
      cyoa.data.b1.textContent = "Try to bluff your way in";
      cyoa.data.b1.setAttribute("data-choice", "3_1_1_1");
      cyoa.data.b2.textContent = "Get the minor a ride home, so the group can enjoy themselves legally";
      cyoa.data.b2.setAttribute("data-choice", "3_2_4_1_b_1");
      cyoa.data.b3.textContent = "Leave, because the door clearly says everyone must be 21";
      cyoa.data.b3.setAttribute("data-choice", "1_3");
    }
    cyoa.funk.optSet3_2_4_2 = function(){
      cyoa.data.b1.textContent = "Volunteer to be the DD";
      cyoa.data.b1.setAttribute("data-choice", "3_2_1");
      cyoa.data.b2.textContent = "Ask someone else to be the DD";
      cyoa.data.b2.setAttribute("data-choice", "3_2_2");
      cyoa.data.b3.textContent = "Plan to get a ride or a taxi";
      cyoa.data.b3.setAttribute("data-choice", "3_2_3");
      cyoa.data.b4.classList.remove("hidden");
      cyoa.data.b4.textContent = "Plan to drive after drinking";
      cyoa.data.b4.setAttribute("data-choice", "3_2_4_2_4");
    }   

    cyoa.funk.snDiaKickoff = function(){
      cyoa.sounds.clickAudio.play();
      cyoa.funk.disableClick();
      cyoa.data.contextLinks.classList.add("hidden");
      cyoa.data.bossLinks.classList.add("hidden");
      cyoa.data.oapLink.classList.add("hidden");
      cyoa.data.phLinks.classList.add("hidden");
      cyoa.funk.xDialog();
      cyoa.funk.pLoading();
      setTimeout(cyoa.funk.xDialog, 1000);
    }

    cyoa.funk.initGame = function() {
      cyoa.funk.disableClick();
      cyoa.funk.imgPlay();
      cyoa.funk.pLoading();
      cyoa.funk.minorRandomizer();
      cyoa.funk.isSaturday();
      cyoa.data.statValues = [50,25,20,5,200];
      cyoa.funk.updateStats();
      setTimeout(cyoa.funk.xDialog, 600);
      setTimeout(cyoa.funk.sn0Dia, 300);
      cyoa.funk.optSet0();
    }
    cyoa.funk.continueGame = function() {
      cyoa.funk.disableClick();
      cyoa.funk.imgPlay();
      cyoa.funk.pLoading();
      cyoa.funk.isSunday();
      cyoa.data.statValues[1] = 25;
      cyoa.data.statValues[2] = 20;
      cyoa.funk.updateStats();
      setTimeout(cyoa.funk.xDialog, 600);
      setTimeout(cyoa.funk.sn0_1Dia, 300);
      cyoa.funk.optSet0_1();
    }
    cyoa.funk.winGame = function() {
      cyoa.funk.disableClick();
      cyoa.funk.imgWin();
      cyoa.funk.pLoading();
      cyoa.funk.isSunday();
      setTimeout(cyoa.funk.xDialog, 600);
      setTimeout(cyoa.funk.sn0_2Dia, 300);
    }

    // Event listener that controls everything that happens

    cyoa.data.rpgOptions.addEventListener("click", function(e) {
      if(e.target.getAttribute('data-choice') === "0"){ //Start a new game button
        if (cyoa.data.clicker == true){
          cyoa.funk.snDiaKickoff();
          cyoa.funk.initGame();
        }
      };
      if(e.target.getAttribute('data-choice') === "0_1"){ //Go to Sunday
        if (cyoa.data.clicker == true){
          if (cyoa.data.sunday == true){
            cyoa.funk.snDiaKickoff();
            cyoa.funk.winGame();
          }
          if (cyoa.data.sunday == false){
            cyoa.funk.snDiaKickoff();
            cyoa.funk.continueGame();
          }
        }
      };
      if(e.target.getAttribute('data-choice') === "0_2"){ //Take it easy on Sunday
        if (cyoa.data.clicker == true){
          cyoa.funk.snDiaKickoff();
          cyoa.funk.sn0_2Dia();
        }
      };
      if(e.target.getAttribute('data-choice') === "0_3"){ //Takes you to saturday or sunday reset
        if (cyoa.data.clicker == true){
          if (cyoa.data.sunday == true){
            cyoa.funk.snDiaKickoff();
            cyoa.funk.continueGame();
          }
          if (cyoa.data.sunday == false){
            cyoa.funk.snDiaKickoff();
            cyoa.funk.initGame();
          }
        }
      };

      if(e.target.getAttribute('data-choice') === "1_0"){ //BOSS button
        if (cyoa.data.clicker == true){          
          cyoa.funk.snDiaKickoff();
          cyoa.data.contextLinks.classList.remove("hidden");
          cyoa.data.bossLinks.classList.remove("hidden");
          cyoa.funk.sn1Dia();
        }
      };
      if(e.target.getAttribute('data-choice') === "1_1"){ //Enter the BOSS tournament button, with random outcome
        if (cyoa.data.clicker == true){
          var randomSeed = Math.random();
          if (randomSeed <= 0.5)
          {
            cyoa.funk.sn1_1DiaWin();
          }
          else{
            cyoa.funk.sn1_1DiaLose();
          }
        }
      };
      if(e.target.getAttribute('data-choice') === "1_2"){ //Watch the BOSS tournament button
        if (cyoa.data.clicker == true){
          cyoa.funk.snDiaKickoff();
          setTimeout(cyoa.funk.sn1_2Dia, cyoa.data.timing1);
          cyoa.funk.optSetReset();
        }
      };
      if(e.target.getAttribute('data-choice') === "1_3"){ //Go back to top button
        if (cyoa.data.clicker == true){
          cyoa.funk.snDiaKickoff();
          cyoa.funk.initGame();
        }
      };
      if(e.target.getAttribute('data-choice') === "2_0"){ // OAP button
        if (cyoa.data.clicker===true){
          cyoa.funk.snDiaKickoff();
          cyoa.data.contextLinks.classList.remove("hidden");
          cyoa.data.oapLink.classList.remove("hidden");
          cyoa.funk.sn2Dia();
        }
      };
      if(e.target.getAttribute('data-choice') === "2_0_1"){ // OAP button on Sunday
        if (cyoa.data.clicker===true){
          cyoa.funk.snDiaKickoff();
          cyoa.funk.sn2_0_1Dia();
        }
      };
      if(e.target.getAttribute('data-choice') === "2_1"){ //Ride a snowmachine
        if (cyoa.data.clicker == true){
          cyoa.funk.snDiaKickoff();
          cyoa.funk.sn2_1Dia();
        }
      };
      if(e.target.getAttribute('data-choice') === "2_1_1"){ //Ride a snowmachine again
        if (cyoa.data.clicker == true){
          cyoa.funk.snDiaKickoff();
          cyoa.funk.sn2_1_1Dia();
        }
      };
      if(e.target.getAttribute('data-choice') === "2_2"){ //Rent a fat tire bike
        if (cyoa.data.clicker == true){
          cyoa.funk.snDiaKickoff();
          cyoa.funk.sn2_2Dia();
        }
      };
      if(e.target.getAttribute('data-choice') === "2_2_1"){ //borrow some skis
        if (cyoa.data.clicker == true){
          cyoa.funk.snDiaKickoff();
          cyoa.funk.sn2_2_1Dia();
        }
      };
      if(e.target.getAttribute('data-choice') === "3_0"){ // Get a drink button
        if (cyoa.data.clicker===true){
          cyoa.funk.snDiaKickoff();
          cyoa.data.contextLinks.classList.remove("hidden");
          cyoa.data.phLinks.classList.remove("hidden");
          cyoa.funk.sn3Dia();
        }
      };
      if(e.target.getAttribute('data-choice') === "3_1"){ // Check age button
        if (cyoa.data.clicker===true){
          cyoa.funk.snDiaKickoff();
          cyoa.data.contextLinks.classList.remove("hidden");
          cyoa.data.phLinks.classList.remove("hidden");
          cyoa.funk.sn3_1Dia();
        }
      };
      if(e.target.getAttribute('data-choice') === "3_1_1"){ // Drink with a minor
        if (cyoa.data.clicker===true){
          cyoa.funk.snDiaKickoff();
          cyoa.data.contextLinks.classList.remove("hidden");
          cyoa.data.phLinks.classList.remove("hidden");
          cyoa.funk.sn3_1_1Dia();
        }
      };
      if(e.target.getAttribute('data-choice') === "3_1_2"){ // Drink without a minor
        if (cyoa.data.clicker===true){
          cyoa.funk.snDiaKickoff();
          cyoa.funk.noMinor();
          cyoa.data.contextLinks.classList.remove("hidden");
          cyoa.data.phLinks.classList.remove("hidden");
          cyoa.funk.sn3_1_2Dia();
        }
      };
      if(e.target.getAttribute('data-choice') === "3_1_1_1"){ // Drink with a minor
        if (cyoa.data.clicker===true){
          cyoa.funk.snDiaKickoff();
          cyoa.data.contextLinks.classList.remove("hidden");
          cyoa.data.phLinks.classList.remove("hidden");
          cyoa.funk.sn3_1_1_1Dia();
        }
      };
      if(e.target.getAttribute('data-choice') === "3_1_1_2_1"){ // Drink with a minor pt 2
        if (cyoa.data.clicker===true){
          cyoa.funk.snDiaKickoff();
          cyoa.data.contextLinks.classList.remove("hidden");
          cyoa.data.phLinks.classList.remove("hidden");
          cyoa.funk.sn3_1_1_2_1Dia();
        }
      };
      if(e.target.getAttribute('data-choice') === "3_1_1_2"){ // Create a distraction
        if (cyoa.data.clicker===true){
          cyoa.funk.snDiaKickoff();
          cyoa.data.contextLinks.classList.remove("hidden");
          cyoa.data.phLinks.classList.remove("hidden");
          cyoa.funk.sn3_1_1_2Dia();
        }
      };
      if(e.target.getAttribute('data-choice') === "3_2"){ // Make a plan button
        if (cyoa.data.clicker===true){
          cyoa.funk.snDiaKickoff();
          cyoa.data.contextLinks.classList.remove("hidden");
          cyoa.data.phLinks.classList.remove("hidden");
          cyoa.funk.sn3_2Dia();
        }
      };
      if(e.target.getAttribute('data-choice') === "3_2_b"){ // Make a plan button
        if (cyoa.data.clicker===true){
          cyoa.funk.noMinor();
          cyoa.funk.snDiaKickoff();
          cyoa.data.contextLinks.classList.remove("hidden");
          cyoa.data.phLinks.classList.remove("hidden");
          cyoa.funk.sn3_2_bDia();
        }
      };
      if(e.target.getAttribute('data-choice') === "3_2_1"){ // Volunteer to dd
        if (cyoa.data.clicker===true){
          cyoa.funk.snDiaKickoff();
          cyoa.data.contextLinks.classList.remove("hidden");
          cyoa.data.phLinks.classList.remove("hidden");
          cyoa.funk.sn3_2_1Dia();
        }
      };
      if(e.target.getAttribute('data-choice') === "3_2_2"){ // Make someone else DD
        if (cyoa.data.clicker===true){
          if (cyoa.data.minor == true){
            cyoa.funk.snDiaKickoff();
            cyoa.data.contextLinks.classList.remove("hidden");
            cyoa.data.phLinks.classList.remove("hidden");
            cyoa.funk.sn3_2_2_bDia();
          }
          if (cyoa.data.minor == false){
            cyoa.funk.snDiaKickoff();
            cyoa.data.contextLinks.classList.remove("hidden");
            cyoa.data.phLinks.classList.remove("hidden");
            cyoa.funk.sn3_2_2_aDia();
          }
        }
      };
      if(e.target.getAttribute('data-choice') === "3_2_2_1"){ // Randomizer 
        if (cyoa.data.clicker===true){
          var randomSeed = Math.random();
          if (randomSeed <= 0.5)
          {
            cyoa.funk.snDiaKickoff();
            cyoa.data.contextLinks.classList.remove("hidden");
            cyoa.data.phLinks.classList.remove("hidden");
            cyoa.funk.sn3_2_2_1_aDia();
          }
          else{
            cyoa.funk.snDiaKickoff();
            cyoa.data.contextLinks.classList.remove("hidden");
            cyoa.data.phLinks.classList.remove("hidden");
            cyoa.funk.sn3_2_2_1_bDia();
          }
        }
      };
      if(e.target.getAttribute('data-choice') === "3_2_2_b_1"){ // Randomizer 
        if (cyoa.data.clicker===true){
          var randomSeed = Math.random();
          if (randomSeed <= 0.5)
          {
            cyoa.funk.snDiaKickoff();
            cyoa.data.contextLinks.classList.remove("hidden");
            cyoa.data.phLinks.classList.remove("hidden");
            cyoa.funk.sn3_2_2_1_aDia();
          }
          else{
            cyoa.funk.snDiaKickoff();
            cyoa.data.contextLinks.classList.remove("hidden");
            cyoa.data.phLinks.classList.remove("hidden");
            cyoa.funk.sn3_2_2_1_bDia();
          }
        }
      };
      if(e.target.getAttribute('data-choice') === "3_2_2_1_1"){ // Randomizer 
        if (cyoa.data.clicker===true){
          cyoa.funk.snDiaKickoff();
          cyoa.data.contextLinks.classList.remove("hidden");
          cyoa.data.phLinks.classList.remove("hidden");
          cyoa.funk.sn3_2_2_1_1Dia();
        }
      };
      if(e.target.getAttribute('data-choice') === "3_2_2_1_2"){ // Randomizer 
        if (cyoa.data.clicker===true){
          cyoa.funk.snDiaKickoff();
          cyoa.data.contextLinks.classList.remove("hidden");
          cyoa.data.phLinks.classList.remove("hidden");
          cyoa.funk.sn3_2_2_1_2Dia();
        }
      };
      // if(e.target.getAttribute('data-choice') === "3_2_2_1_3"){ // Randomizer 
      //   if (cyoa.data.clicker===true){
      //     cyoa.funk.snDiaKickoff();
      //     cyoa.data.contextLinks.classList.remove("hidden");
      //     cyoa.data.phLinks.classList.remove("hidden");
      //     cyoa.funk.sn3_2_2_1_3Dia();
      //   }
      // };
      if(e.target.getAttribute('data-choice') === "3_2_3"){ // Plan to get a ride
        if (cyoa.data.clicker===true){
          if (cyoa.data.minor == true){
            cyoa.funk.snDiaKickoff();
            cyoa.data.contextLinks.classList.remove("hidden");
            cyoa.data.phLinks.classList.remove("hidden");
            cyoa.funk.sn3_2_3_bDia();
          }
          if (cyoa.data.minor == false){
            cyoa.funk.snDiaKickoff();
            cyoa.data.contextLinks.classList.remove("hidden");
            cyoa.data.phLinks.classList.remove("hidden");
            cyoa.funk.sn3_2_3_aDia();
          }
        }
      };
      if(e.target.getAttribute('data-choice') === "3_2_3_a"){ // Go for a drink button
        if (cyoa.data.clicker===true){
          cyoa.funk.snDiaKickoff();
          cyoa.funk.noMinor();
          cyoa.data.contextLinks.classList.remove("hidden");
          cyoa.data.phLinks.classList.remove("hidden");
          cyoa.funk.sn3_1_2Dia();
        }
      }
      if(e.target.getAttribute('data-choice') === "3_2_3_1"){ // Go for a drink button
        if (cyoa.data.clicker===true){
          cyoa.funk.snDiaKickoff();
          cyoa.data.contextLinks.classList.remove("hidden");
          cyoa.data.phLinks.classList.remove("hidden");
          cyoa.funk.sn3_2_3_1Dia();
        }
      }
      if(e.target.getAttribute('data-choice') === "3_2_4"){ // No DD
        if (cyoa.data.clicker===true){
          cyoa.funk.snDiaKickoff();
          cyoa.data.contextLinks.classList.remove("hidden");
          cyoa.data.phLinks.classList.remove("hidden");
          cyoa.funk.sn3_2_4Dia();
        }
      }
      if(e.target.getAttribute('data-choice') === "3_3"){ // Go for a drink button
        if (cyoa.data.clicker===true){
          cyoa.funk.snDiaKickoff();
          cyoa.data.contextLinks.classList.remove("hidden");
          cyoa.data.phLinks.classList.remove("hidden");
          cyoa.funk.sn3_3Dia();
        }
      }
      if(e.target.getAttribute('data-choice') === "3_2_4_1"){ // Go for a drink button
        if (cyoa.data.clicker===true){
          if (cyoa.data.minor == true){
            cyoa.funk.snDiaKickoff();
            cyoa.data.contextLinks.classList.remove("hidden");
            cyoa.data.phLinks.classList.remove("hidden");
            cyoa.funk.sn3_2_4_1_aDia();
          }
          if (cyoa.data.minor == false){
            cyoa.funk.snDiaKickoff();
            cyoa.data.contextLinks.classList.remove("hidden");
            cyoa.data.phLinks.classList.remove("hidden");
            cyoa.funk.sn3_2_4_1_bDia();
          }
        }
      }
      if(e.target.getAttribute('data-choice') === "3_2_4_1_a"){ // Get the minor a ride home
        if (cyoa.data.clicker===true){
          cyoa.funk.snDiaKickoff();
          cyoa.data.contextLinks.classList.remove("hidden");
          cyoa.data.phLinks.classList.remove("hidden");
          cyoa.funk.sn3_2_4_1_a_1Dia();
        }
      }
      if(e.target.getAttribute('data-choice') === "3_2_4_1_a_1"){ // Settle your tab
        if (cyoa.data.clicker===true){
          cyoa.funk.snDiaKickoff();
          cyoa.data.contextLinks.classList.remove("hidden");
          cyoa.data.phLinks.classList.remove("hidden");
          cyoa.funk.sn3_2_4_2_4Dia();
        }
      }
      if(e.target.getAttribute('data-choice') === "3_2_4_1_b_1"){ // Settle your tab
        if (cyoa.data.clicker===true){
          cyoa.funk.snDiaKickoff();
          cyoa.data.contextLinks.classList.remove("hidden");
          cyoa.data.phLinks.classList.remove("hidden");
          cyoa.funk.sn3_2_4_2_4Dia();
        }
      }
      if(e.target.getAttribute('data-choice') === "3_2_4_2"){ // Listen to Binky, get a ride
        if (cyoa.data.clicker===true){
          cyoa.funk.snDiaKickoff();
          cyoa.data.contextLinks.classList.remove("hidden");
          cyoa.data.phLinks.classList.remove("hidden");
          cyoa.funk.sn3_2_4_2Dia();
        }
      }
      if(e.target.getAttribute('data-choice') === "3_2_4_2_4"){ // Plan to drink and drive
        if (cyoa.data.clicker===true){
          cyoa.funk.snDiaKickoff();
          cyoa.data.contextLinks.classList.remove("hidden");
          cyoa.data.phLinks.classList.remove("hidden");
          cyoa.funk.sn3_2_4_2_4Dia();
        }
      }
      if(e.target.getAttribute('data-choice') === "3_3_1_a"){ // Go for a drink button
        if (cyoa.data.clicker===true){
          if (cyoa.data.minor == true){
            cyoa.funk.snDiaKickoff();
            cyoa.data.contextLinks.classList.remove("hidden");
            cyoa.data.phLinks.classList.remove("hidden");
            cyoa.funk.sn3_2_3_aDia();
          }
          if (cyoa.data.minor == false){
            cyoa.funk.snDiaKickoff();
            cyoa.data.contextLinks.classList.remove("hidden");
            cyoa.data.phLinks.classList.remove("hidden");
            cyoa.funk.sn3_2_3_bDia();
          }
        }
      }
      if(e.target.getAttribute('data-choice') === "3_x"){ // Drink and drive
        if (cyoa.data.clicker===true){
          var randomSeed = Math.random();
          console.log(randomSeed);
          if (randomSeed <= 0.25)
          {
            cyoa.funk.snDiaKickoff();
            cyoa.data.contextLinks.classList.remove("hidden");
            cyoa.data.phLinks.classList.remove("hidden");
            cyoa.funk.sn3_x_aDia();
          }
          if (randomSeed >= 0.26 && randomSeed <=0.5)
          {
            cyoa.funk.snDiaKickoff();
            cyoa.data.contextLinks.classList.remove("hidden");
            cyoa.data.phLinks.classList.remove("hidden");
            cyoa.funk.sn3_x_bDia();
          }
          if (randomSeed >= 0.51 && randomSeed <=0.75)
          {
            cyoa.funk.snDiaKickoff();
            cyoa.data.contextLinks.classList.remove("hidden");
            cyoa.data.phLinks.classList.remove("hidden");
            cyoa.funk.sn3_x_cDia();
          }
          else{
            cyoa.funk.snDiaKickoff();
            cyoa.data.contextLinks.classList.remove("hidden");
            cyoa.data.phLinks.classList.remove("hidden");
            cyoa.funk.sn3_x_dDia();
          }
        }
      }



      // There is no 2_3 or 3_4 option because it's just a reset

    });

    window.addEventListener('load', cyoa.funk.initGame() ); 
  }) ();
var coincounter = 1;