// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later
// hey! please dont spoil this :3
var endings = [
    " (・`ω´・)",
    " ;;w;;",
    " OwO",
    " UwU",
    " >w<",
    " ^w^",
    " ÚwÚ",
    " ^-^",
    " :3",
    " x3",
    " ♡",
    " (*≧ω≦*)"
]

var clicked = false

function bobsDiary() {
    if (!clicked) {
        console.log(clicked)
        document.getElementById("journalHeader").innerText = "Bob's Diary!";
        document.getElementById("body").style.backgroundColor = "#fea8c4";
        document.getElementById("body").style.color = "white";
    
        var posts = document.getElementsByClassName("postsChild");
        // heres this regular expression i found 
        var regex = /[.!?~。〜](?=[^.!?~。〜]*$)/;
    
        for(var i = 0; i < posts.length; i++) {
            posts[i].style.backgroundColor = "#eea1ba";
            // now for random text
            var oldText = posts[i].innerText;
            var oldTextSearch = oldText.search(regex);
            if (oldTextSearch !== -1) {
                // we still need the date and time, so thats the reason for the two variables
                var before = oldText.slice(0, oldTextSearch);
                var after = oldText.slice(oldTextSearch);
                
            }
            after = after.replace(regex, '');
            posts[i].innerText = "dear diary, " + before + endings[Math.floor(Math.random()*endings.length)] + after;
        }
        console.log(posts);
    }
}
// @license-end