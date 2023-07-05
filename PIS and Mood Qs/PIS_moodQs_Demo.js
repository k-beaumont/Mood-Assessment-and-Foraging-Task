var timeline =[]

//Generate Unique Filenames:

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

var filename
function make_filename(){
    filename="Study3_"+Date.now()+"_"+getRandomInt(1000,2000)
}

var call_make_filename = {
    type: 'call-function',
    func: function(){
	console.log("in call make filename");
	make_filename();
	console.log(filename);
    },
};

timeline.push(call_make_filename)
//_____________________________________________________________________________

//----Prolific ID insert

var prolific_id={
  type:'survey-text',
  questions:[{prompt:"What is your Prolific ID?",required:true}],
}
timeline.push(prolific_id)


// Information Sheet Version 1 (Ethics Code Study 1)

var info_sheet = {

  type: 'instructions',
  pages: [
      '<img src="../../UoBlogocolour.png"></img>' +
      '<p style="font-weight:bold"><h2>Mood Assessment and Foraging Task - Participant Information Sheet</h2></p>'+
      '<div style="text-align: left;"><p>You are invited to take part in a research study to measure mood and decision-making. Before you decide whether to participate, please read the following study information carefully so you understand what will be required in this research study. If anything is unclear or you have any questions please contact us for more information (contact details provided below). Take your time to decide whether you would like to take part, and please remember your participation is entirely voluntary.</p>'+

      '<p style="font-weight:bold">What is this study about?</p>'+
      '<p>The purpose of this study is to examine whether mood has an influence on decision making using a naturalistic assessment method (i.e., completing questionnaires and computer games in your normal living environment rather than a laboratory setting).</p>'+

      '<p style="font-weight:bold">What will you have to do?</p>'+
      '<p style="font-weight:bold">20 minutes for &pound3.50</p>'+
      '<p>First, you will be required to complete a <b>brief mood questionnaire</b>. Instructions specific to the completion of the questionnaire will be provided on screen during the study. You will also be asked a few questions regarding whether anything has happened over the last 24 hours that has significantly influenced your mood. </p>'+
      '<p>Following the questionnaire, you will complete a <b>computer game task</b> which has 3 levels. Each level will last either for the length of time it takes you to reach 200 points, or for a maximum of 5 minutes. After the game has finished you will be asked a few questions for feedback about your experience with the study.</p>'+
      '<p>Each session should take around 20 minutes to complete. When completing the study make sure to have the webpage in full-screen mode and ensure that you will not be distracted during the time taken to complete the assessment.</p>'+
      '<p>To take part in the study, you will need to confirm that you:<br> - are between 18-30 years of age, <br> - are currently living in the UK, <br> - are a fluent English speaker, <br> - and are currently not taking any medication for a mental health condition.</p>'+


      '<p style="font-weight:bold">What is your reward?</p>'+
      '<p>You will be paid &pound3.50 for successful completion.</p>'+

      '<p style="font-weight:bold">Do I have to take part?</p>'+
      '<p>Participation in this study is entirely voluntary. If you decide you would like to go ahead with the study and take part, we will ask you to provide electronic consent. You are free to withdraw at any time, without giving a reason. You can withdraw by simply closing the browser and not continuing with the study. However, you will only be reimbursed for a fully completed assessment.</p></div>',

      '<img src="../../UoBlogocolour.png"></img>' +
      '<p style="font-weight:bold"><h2>Ethics</h2></p>'+
      '<p><div style="text-align: left;">This study has been given ethical approval by the Research Ethics Committee of the University of Bristol (School of Psychology, Ethics approval code 15635). No risks or adverse effects have been identified, and no personal identifying information will be available to researchers unless you choose to provide it. By taking part in this University of Bristol research there will be no identifiable health benefits to you. <br>It is important to understand that the research team will not be monitoring responses in real-time for any urgent or distressing content. Therefore, if you have an immediate need for support or are in a crisis, we strongly advise you to seek appropriate help from a qualified professional or contact helpline services available in your area (<a href="https://www.samaritans.org/" target="_blank">www.samaritans.org</a> are available 24/7, 365 days a year).<br>If you have any questions about the research, feel free to contact us before starting the study.</p>'+

      '<p style="font-weight:bold">What would happen to the results of the research study?</p>'+
      '<p>When the study has been completed, we would analyse the study data we have collected and report the findings. This would be reported in an appropriate scientific journal or presented at a scientific meeting. As your study data are anonymised, it would not be possible to identify you by name from any aspect of documentation or reporting for this research study. As part of the study we will ask you about recent experiences that may have affected your mood. Answering this question will be completely optional and you should only answer it if you are comfortable doing that; your response will form part of the data that will be made publicly available and may be quoted in publication. Your participation in the study is completely anonymous, we do not store your name or identity and your name will not be in any way linked to the data. However, you should not write anything in the answer that would make it possible to identify you.<br> You will not have access to your individual data collected during the study. To safeguard your rights, we will use the minimum personally identifiable information possible. At the end of the study your data would become &quotopen data&quot.<br> <b>Open data</b> means that it would be stored in an online database so that it is publicly available to anyone interested in the research. We would therefore have no control over how these data are used. However, <b>all data would be anonymised and Prolific IDs would be removed</b> before being made available.<br>If you withdraw before completing the study, any data submitted until that point would be incomplete and would not be analysed or made open access.<br> If you consent, you agree to the University of Bristol keeping and processing the information that you have provided during the study. Your consent is conditional on the University complying with its duties and obligations under the Data Protection Act. </p>'+

      '<p style="font-weight:bold">Can I withdraw my study data after I have participated in the study?</p>'+
      '<p>All data collected by the study will be instantly anonymised. At this point links between your identity and your anonymised data set would be destroyed. We will therefore be unable to link your data with your Prolific user ID, and as such we would no longer be able to withdraw your data as we would no longer be able to identity which data set is yours.</p></div>'+
      '<p style="font-weight:bold">If you have any questions about the study, please contact us using Prolific Messenger or at xo20940@bristol.ac.uk.<br> Thank you!</p>'
  ],
  show_clickable_nav: true,
  allow_keys: false
}
timeline.push(info_sheet)


//----Consent form

var consent_form = {
  type: 'instructions',
  pages: [
      '<img src="../../UoBlogocolour.png"></img>' +
      '<p style="font-weight:bold"><h2>Participant Consent form <br> <br>Mood Assessment and Foraging Task<br> </h2></p>'+
      '<p>By clicking the &quotI consent&quot button below, <b>you agree to the following:</b></p>'+
      '<ol style="text-align: left;"><li>I have received information about the tasks involved in this research study and been given the opportunity to ask questions.</li><li>I have received enough information about the study to make an informed decision to participate, and I understand my participation is completely voluntary.</li><li>I understand that after the study the data will be made &quotopen data&quot. I understand that this means the anonymised data will be publicly available and may be used for purposes not related to this study. I understand my participation is anonymous and my name will not be recorded when the data are collected and when released publicly it will be labelled only by a numerical identifier.</li><li>I am aware I am free to withdraw from the study at any time without giving a reason for doing so.</li></ol>'+
      '<p><b>If you are happy to proceed with the study, please press the consent button below.</b> Otherwise, please close this browser window.</p><br><p><hr /></p>'


  ],
  button_label_next: "I Consent",
  show_clickable_nav: true,
  allow_keys: false
}
timeline.push(consent_form)

//_____________________________________________________________________________________________________________________________________________________________________________________

//----IMS-12 7-option Likert with label at each end

var IMS_12_1 = {
  type: 'survey-likert',
  questions: [
    { prompt: "<p>Using the buttons below, rate how you feel <u>right now</u></p> ",
      labels: ["<b>Worthless</b>", " "," "," "," "," ", "<b>Valuable</b>"],
      required: true
    }
  ]
};
timeline.push(IMS_12_1);


var IMS_12_2 = {
  type: 'survey-likert',
  questions: [
    { prompt: "<p>Using the buttons below, rate how you feel <u>right now</u></p> ",
      labels: ["<b>Pessimistic</b>", " "," "," "," "," ", "<b>Optimistic</b>"],
      required: true
    }
  ]
};
timeline.push(IMS_12_2);

var IMS_12_3 = {
  type: 'survey-likert',
  questions: [
    { prompt: "<p>Using the buttons below, rate how you feel <u>right now</u></p> ",
      labels: ["<b>Apathetic</b>", " "," "," "," "," ", "<b>Motivated</b>"],
      required: true
    }
  ]
};
timeline.push(IMS_12_3);

var IMS_12_4 = {
  type: 'survey-likert',
  questions: [
    { prompt: "<p>Using the buttons below, rate how you feel <u>right now</u></p> ",
      labels: ["<b>Guilty</b>", " "," "," "," "," ", "<b>Proud</b>"],
      required: true
    }
  ]
};
timeline.push(IMS_12_4);

var IMS_12_5 = {
  type: 'survey-likert',
  questions: [
    { prompt: "<p>Using the buttons below, rate how you feel <u>right now</u></p> ",
      labels: ["<b>Numb</b>", " "," "," "," "," ", "<b>Interested</b>"],
      required: true
    }
  ]
};
timeline.push(IMS_12_5);

var IMS_12_6 = {
  type: 'survey-likert',
  questions: [
    { prompt: "<p>Using the buttons below, rate how you feel <u>right now</u></p> ",
      labels: ["<b>Withdrawn</b>", " "," "," "," "," ", "<b>Welcoming</b>"],
      required: true
    }
  ]
};
timeline.push(IMS_12_6);

var IMS_12_7 = {
  type: 'survey-likert',
  questions: [
    { prompt: "<p>Using the buttons below, rate how you feel <u>right now</u></p> ",
      labels: ["<b>Hopeless</b>", " "," "," "," "," ", "<b>Hopeful</b>"],
      required: true
    }
  ]
};
timeline.push(IMS_12_7);

var IMS_12_8 = {
  type: 'survey-likert',
  questions: [
    { prompt: "<p>Using the buttons below, rate how you feel <u>right now</u></p> ",
      labels: ["<b>Tense</b>", " "," "," "," "," ", "<b>Relaxed</b>"],
      required: true
    }
  ]
};
timeline.push(IMS_12_8);

var IMS_12_9 = {
  type: 'survey-likert',
  questions: [
    { prompt: "<p>Using the buttons below, rate how you feel <u>right now</u></p> ",
      labels: ["<b>Worried</b>", " "," "," "," "," ", "<b>Untroubled</b>"],
      required: true
    }
  ]
};
timeline.push(IMS_12_9);

var IMS_Attention_Check = {
  type: 'survey-likert',
  questions: [
    { prompt: "<p>Using the buttons below, respond &quotAttentive&quot <u>right now</u></p> ",
      labels: ["<b>Attentive</b>", " "," "," "," "," ", "<b>Unattentive</b>"],
      required: true
    }
  ],
  on_finish: function (data) {
    var response = JSON.parse(data.responses);
    var participantAnswer = response.Q0; // Assuming the question code is 'Q0'?

    if (participantAnswer !== 0) {
      var nextElement = {
        type: 'html-keyboard-response',
        stimulus:
          '<h1><u>SORRY! You failed the attention check question and are no longer allowed to continue with this study.</u></h1><br>'+
          '<p><a href="https://app.prolific.co/submissions/complete?cc=C196AE7J">Click here to RETURN TO PROLIFIC</a></p>',
        choices: jsPsych.NO_KEYS
      };

      jsPsych.init({
        timeline: [nextElement], // Start a new experiment with nextElement as the first item in the timeline
        show_progress_bar: false // Optional: Hide the progress bar for the nextElement
      });
    }
  }
};

timeline.push(IMS_Attention_Check);


var IMS_12_10 = {
  type: 'survey-likert',
  questions: [
    { prompt: "<p>Using the buttons below, rate how you feel <u>right now</u></p> ",
      labels: ["<b>Fearful</b>", " "," "," "," "," ", "<b>Fearless</b>"],
      required: true
    }
  ]
};
timeline.push(IMS_12_10);

var IMS_12_11 = {
  type: 'survey-likert',
  questions: [
    { prompt: "<p>Using the buttons below, rate how you feel <u>right now</u></p> ",
      labels: ["<b>Anxious</b>", " "," "," "," "," ", "<b>Peaceful</b>"],
      required: true
    }
  ]
};
timeline.push(IMS_12_11);

var IMS_12_12 = {
  type: 'survey-likert',
  questions: [
    { prompt: "<p>Using the buttons below, rate how you feel <u>right now</u></p> ",
      labels: ["<b>Restless</b>", " "," "," "," "," ", "<b>Calm</b>"],
      required: true
    }
  ]
};
timeline.push(IMS_12_12);

//_____________________________________________________________________________________________________________________________________________________________________________________
//------ Significant Event Qs

var event=false;

var question_event = {
    type:'survey-multi-choice',
    questions: [
	{
    prompt: "Is an event or experience (either positive or negative) significantly affecting your mood right now?",
    name: 'EventHappened',
    options: ['Yes', 'No'],
    required: true
	}
    ],
    on_finish: function() {

    }

};

timeline.push(question_event)


var question_event_valence = {
  type: 'html-slider-response',
  stimulus: '<p>Please indicate on the sliding scale how positive or negative the experience was for you:</p> ',
  labels: ['<b>Negative</b>', '<b>Positive</b>'],
  slider_width: 500,
  require_movement: true,
  prompt: ' '
};


var question_event_when = {
    type:'survey-multi-choice',
    questions: [
	{
    prompt: "How long ago did the event happen?",
    name: 'EventWhen',
    options: ['Today', 'Yesterday','2+ Days Ago'],
    required: true
	 }
  ]
};


var question_event_known = {
    type:'survey-multi-choice',
    questions: [
	{
    prompt: "<b>Did you know the event/experience was going to occur before it happened?</b>",
    name: 'EventKnown',
    options: ['No - it was a complete surprise',
              'Yes - on the day it happened',
              'Yes - up to a week before it happened',
              'Yes - I knew about it for more than a week before it happened'
              ],
    required: true
	 }
 ]
};

var question_event_description = {
  type:'survey-text',
  questions:[
    {prompt:"If you feel comfortable, please briefly describe the event/experience that is significantly affecting your mood right now:",required:false, rows:5}
  ]
};

var if_event = {
    timeline: [question_event_valence, question_event_when, question_event_known, question_event_description],
    conditional_function: function(){
    	var data = jsPsych.data.get().last(1).values()[0].responses[18] //The Event occurence Q is the 18th response, change this number if add/delete anything prior to this.
    	console.log(data)
    	if (data=='Y') {
    	    return true;
    	}
    	else {
    	    return false;
    	}

    }
}

timeline.push(if_event)

//_____________________________________________________________________________________________________________________________________________________________________________________
// Need Pacman DEMO screens here:

var game_instructions = {
  type: 'instructions',
  pages: [
      '<img src="../../UoBlogocolour.png"></img>' +
      '<p style="font-weight:bold"><h1>Thank you for completing the questionnaire</h1></p>'+
      '<p>You will now receive instructions on how to play the <strong>computer game</strong> part of this study.</p>'

  ],
  show_clickable_nav: true,
  button_label_next: "Click here to view <br><strong>GAME INSTRUCTIONS</strong>",
  allow_keys: false,
  allow_backward: false
}
timeline.push(game_instructions)


var game_demo_images = {
  type: 'instructions',
  pages: [
    '<h1><u>Game Instructions</u></h1>'+
      '<img class="demoImg" src="demo_instr_1.png"></img>',
    '<h1><u>Game Instructions</u></h1>'+
      '<img class="demoImg" src="demo_instr_2.png"></img>',
    '<h1><u>Game Instructions</u></h1>'+
      '<img class="demoImg" src="demo_instr_3.png"></img>',
    '<h1><u>Game Instructions</u></h1>'+
      '<img class="demoImg" src="demo_instr_4.png"></img>',
    '<h1><u>Game Instructions</u></h1>'+
      '<img class="demoImg" src="demo_instr_5.png"></img>'

  ],
  show_clickable_nav: true,
  button_label_next: '<strong>CONTINUE</strong>',
  allow_keys: false,
  allow_backward: true
}
timeline.push(game_demo_images)



//_____________________________________________________________________________

var save = {
    type: 'call-function',
    func: function(){
	console.log("in save")
	saveData();
    },
};

timeline.push(save)

// var finish = {
//     type: 'external-html',
//     url: function(){
// 	return "finish.html?"+filename;
//     }
// };

//timeline.push(finish)

var pacman = {
    type: 'html-keyboard-response',
    stimulus: function(){
	var opening= ['<h1><u>THE AIM OF THE GAME:</u></h1>'+
  '<p>Your goal is to <b>eat as many cherries as possible</b>.<br> Each cherry will earn you some points and you need to get <b>200 points to win</b> each level.<br> Each level will end after a <b>max time limit of 5 minutes</b> has been reached.<br> There are <b>3 levels</b>. </p>'+
  '<p>You will learn how to better find cherries the more you play the game.</p>'+
  '<strong>GOOD LUCK!</strong>']
  ;
	var middle='<p><a href="http://choicetask.com/kimberley/Study3/DMtaskL1/index.html?';
	var end='"><h1>Click here to BEGIN GAME!</h1></a></p>';
	var query=filename;
	return opening+middle+query+end;
    },
    choices: "NO_KEYS"
}

timeline.push(pacman)

function saveData(){
    console.log("saveData");
    $.ajax({
	type:'post',
	cache: false,
	data: { filename: filename, filedata: jsPsych.data.get().json() },
	url: 'save_data.php',
    });
    console.log("data saved");
}


//_____________________________________________________________________________
jsPsych.init({
    timeline: timeline,
})
