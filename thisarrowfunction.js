//context mahanje konavishai kiwa values(variables)
const user = {
    username : "hitesh",
    price: 999,

    wlcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this); // this always shws the value of current values1
    }
}

// user.wlcomeMessage();
// user.username = "Sam";
// user.();

// browser madhe global object ha windows object asto.
console.log(this);

function chai(){

    console.log(this);  // function chaya aat madhe this use kelyane this la bharpur ghosti access karta yetat ani tya khali terminal madhe disat aahet.
}

chai();

function yogesh(){
    let uername = "Yogesh";
    console.log(this);  // function chaya aat madhe apan this cha keyworkd use karun value access karu shakat nahi. this baherun use karave.
}
lap
yogesh();