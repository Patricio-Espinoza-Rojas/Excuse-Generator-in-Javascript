function generate() {
    var excuse = ["The dog ate the task", "The pen has no ink", "do not reach the car bus", "they cut off my internet ", 
    "Don't get in that class ", "lost the notebook", "Like Tuesday? I thought it was Thursday", 
    "i spent all day on the toilet", "I got hacked into the Outlook and there was my schedule",
    "I was sitting on a bench next to a beautiful woman and half an hour seemed to me two minutes... it's not my fault, it's Einstein's. ",
    "I'm sorry I can't, I have too much work", "I'm sick I'll finish it tomorrow", 
    "I won't do anything until the boss tells me what to do",];

    var rand_excuse = Math.floor(Math.random() * excuse.length);
    document.getElementById('result').innerHTML = "<h1>Excuse!:</h1><div class='alert alert-success'><h2>" + excuse[rand_excuse] + " " + "</h2></div>";

}
