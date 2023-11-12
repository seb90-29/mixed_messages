function generateRandomNumber(num) {
   return Math.floor(Math.random() * num)
}
const questions = {
    gollumQestions: ['Baggines? What is Bagginses?… Precious.', 'Is he lost?', 'Just… Just us?', 'And if it loses… what then?', 'What did you say?',
 'What?', 'Sméagol… Why does he cry, Sméagol?', "And they doesn't taste very nice, does they, Precious?", "What's taters, precious? What's taters, eh?",
 'Sneaking? Sneaking? Fat Hobbit is always so polite. Smeagol shows them secret ways that nobody else could find, and they say “sneak!” Sneak?', 'What did you call me?'],
    othersQuestions: ['What did you hear? Speak.', 'What do you mean?', 'Do you mean to wish me a good morning or do you mean that it is a good morning whether I want it or not?', 'Or perhaps you mean to say that you feel good on this particular morning. Or are you simply stating that this is a morning to be good on?',
 "Bilbo, have you been at the Gaffer's home brew?", 'Why do you do that?', 'Who is this? Your brother?', 'And who is this horrid creature? A goblin mutant?', 
 "Why doesn't that surprise me?", 'Shall I describe it to you or would you like me to find you a box?', "What proof do we have this weapon came from Angmar's grave?",
 'Time? What time do you think we have?'],
    merryAndPippinQuestions: ["What about breakfast?", "What about elevenses? Luncheon? Afternoon tea? Dinner? Supper? He knows about them, doesn't he?", 'How many did you eat?', 'Are we lost?',
  'What do they say about him?', 'It comes in pints?', 'Shortcut to what?', "What do they eat when they can't get Hobbit?", 'Why did you look? Why do you always have to look?', 
'Why are there so few of you, when you live so long?']
}
const answers = {
    gollumAnswers: ['It came to me, my own, my love… my… preciousssss.', "Mustn't ask us, not it's business. Gollum, gollum.", 'So bright… so beautiful… ah, Precious.', 'Myyy PRECIOUSSS.', 
    "Wasn't talking to you!", 'Well… if it loses, Precious. then we EATS it!', 'Shut up!', "You're a liar and a thief.", 'Leave now, and never come back!', 'We told him to go away… and away he goes, Precious! Gone, gone, gone!', 
    'Filthy little hobbites. They stole it from us.', 'Yes. Yes. Yes.', 'Kill them both.', "Yes. No! No! It's too risky. It's too risky.", "Oh yes we could. Spoilin' nice fish. Give it to us raw and w-r-r-riggling; you keep nasty chips.", 
    'Stupid, fat hobbit.', "Never! Smeagol wouldn't hurt a fly!", 'Smeagol lied.'],
    othersAnswers: ['One small bite is enough to fill the stomach of a grown man!', 'That is my wee lad, Gimli!', 'That is my wife!', 'Dwarf doors are invisible when closed.', 'Give me your name, horse-master, and I shall give you mine.',
    'Lembas! One small bite is enough to fill the stomach of a grown man!', "They're taking the Hobbits to Isengard!", 'You shall not pass!', "I'm looking for someone to share in an adventure.",
     "I am Gandalf, and Gandalf means me.", 'Fly, you fools!', 'A wizard is never late, Frodo Baggins. Nor is he early. He arrives precisely when he means to.', 
     "You've been sitting quietly for far too long!", "Po-tay-toes! Boil 'em, mash 'em, stick 'em in a stew… Lovely big golden chips with a nice piece of fried fish.", 
     'Well, let me see. Oh, yes, lovely, lembas bread. And look, more lembas bread!', 'His gardener.', 'Not if I stick you first.'],
    merryAndPippinAnswers: ["Shh. Gandalf's thinkin'.", 'He remembered!', "I'm getting one.", 'Mushrooms!', "I think I've broken something.", "I know you've run out. You smoke too much, Pip.", 
    "Well, that's good news.", "I'm hungry.", 'Not this time.']
}
function getQuestion() {
    const questionsKey = Object.keys(questions)
    const randomKeyNumber = generateRandomNumber(questionsKey.length)
    const searchedKey = questionsKey[randomKeyNumber]
    let randomQuestionsNumber = generateRandomNumber(questions[searchedKey].length)  
    const resultQuestion = questions[searchedKey][randomQuestionsNumber]
    return resultQuestion
}

function getAnswer() {
    const answersKey = Object.keys(answers)
    const randomKeyNumber = generateRandomNumber(answersKey.length)
    const searchedKey = answersKey[randomKeyNumber]
    let randomAnswerNumber = generateRandomNumber(answers[searchedKey].length)
    const resultAnswer = answers[searchedKey][randomAnswerNumber]
    return resultAnswer
}
