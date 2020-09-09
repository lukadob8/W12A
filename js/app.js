class BoredApi {

    content;


    newActivity() {
        let holder = this;

        let ajax = new XMLHttpRequest(); 
            ajax.onreadystatechange = function() {
                if(this.readyState == 4 && this.status == 200) {
                    let boredSolution = JSON.parse(this.responseText);
                    document.getElementById('activity').innerHTML = boredSolution.activity;
                    holder.content = boredSolution.activity;
                } else if(this.readyState != 4) {
                    document.getElementById('activity').innerHTML = "LOADING";
                } else {
                    document.getElementById('activity').innerHTML = "ERROR";
                }
            }
        ajax.open ("GET", "http://www.boredapi.com/api/activity/", true);
        ajax.send();
    }

    socialTypeActivity() {
        let holder = this;

        let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                let typeActivity = JSON.parse(this.responseText);
                document.getElementById('social').innerHTML = typeActivity.activity;
                holder.content = typeActivity.activity;
            } else if(this.readyState != 4) {
                document.getElementById('social').innerHTML = "LOADING";
            } else {
                document.getElementById('social').innerHTML = "ERROR";
            }
        }
        ajax.open ("GET", "http://www.boredapi.com/api/activity?type=social", true);
        ajax.send();
    }

}

function extra() {
    bored.newActivity();
}

function extra2() {
    bored2.socialTypeActivity();
}


let bored = new BoredApi();
bored.newActivity();
document.getElementById('refresh').addEventListener('click', extra);

let bored2 = new BoredApi();
bored2.socialTypeActivity();
document.getElementById('refresh2').addEventListener('click', extra2);