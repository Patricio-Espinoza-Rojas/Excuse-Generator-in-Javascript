function generate() {

    let who = ['The dog','My grandma','His turtle','My bird'];
    let rand_who = Math.floor(Math.random() * who.length);
    let action = ['ate','peed','crushed','broke'];
    let rand_action = Math.floor(Math.random() * action.length);
    let what = ['my homework', 'the keys', 'the car'];
    let rand_what = Math.floor(Math.random() * what.length);
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
    let rand_when = Math.floor(Math.random() * when.length);

    document.getElementById('result').innerHTML = "<h1>your excuse is:</h1><div class='alert alert-success'><h2>" + who[rand_who] + " " + action[rand_action] + " " +what[rand_what] + " " +when[rand_when] + " " + "</h2></div>";

}
