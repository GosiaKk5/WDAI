async function getCities(){
    let uri = 'http://localhost:3000/cities';
    const res = await fetch(uri);
    const cities = await res.json();
    return cities;
}

async function fa(cities){
    
    var newArray = cities.filter(function (el)
        {
        return el.province === "małopolskie"
        });

    for (let i = 0; i < cities.length; i++) {
        
        document.getElementById('answerA').innerHTML += newArray[i]['name'] + ", ";

      }

}

function if2a(word){
    count = 0;
    for(let letter of word){
        if(letter === 'a'){
            count++;
        }
    }
    if(count === 2){
        return true;
    }else{
        return false;
    }
}

async function fb(cities){

    var newArray = cities.filter(function (el)
        {
        return if2a(el.name);
        });
    
    for (let i = 0; i < newArray.length; i++) {

        document.getElementById('answerB').innerHTML += newArray[i]['name'] + ", ";
        
      }

}

async function fc(cities){
    var citiesArray = new Array;
    for (let i = 0; i < cities.length; i++) {
        citiesArray.push([cities[i].dentensity, cities[i].name]);
    }
    console.log(citiesArray[0][0]);
    citiesArray.sort(function(a,b){
        return b[0]- a[0];
    });

    document.getElementById('answerC').innerHTML += citiesArray[4][1] + " (" + citiesArray[4][0]+ ")";
    

}

async function fd(cities){
    for (let i = 0; i < cities.length; i++) {
        if(cities[i]['people']>100000){
            document.getElementById('answerD').innerHTML += cities[i]['name'] + "city, ";
        }else{
            document.getElementById('answerD').innerHTML += cities[i]['name'] + ", ";
        }
      }
}

async function fe(cities) {
    let more = 0;
    let less = 0;

    for (let i in cities) {
        if (cities[i].people > 80000)
            more++;
        else
            less++;
    }

    document.getElementById("answerE").innerHTML += "Miast poniżej 80000 mieszkańców:" + less + "<br>";
    document.getElementById("answerE").innerHTML += "Miast powyżej 80000 mieszkańców: " + more + "<br>";

    if (more > less) {
        document.getElementById("answerE").innerHTML += "Więcej jest miast powyżej 80000 mieszkańców. <br>";
    } else {
        document.getElementById("answerE").innerHTML += "Więcej jest miast poniżej 80000 mieszkańców. <br>";
    }

}

async function ff(cities){

    const pcities = cities.filter(function(city){
        return city.township[0] === "P";
    });


    const avg = pcities.reduce(function(sum, city){
        return sum + city.area;
    },0)/pcities.length;

    document.getElementById("answerF").innerHTML = avg;
    console.log(avg);
}

async function fg(cities){

    const pomorskieCities5000 = cities.filter(function(city){
        return city.province === "pomorskie" && city.people > 5000;
    });

    const pomorskieCities = cities.filter(function(city){
        return city.province === "pomorskie";
    });

    if(pomorskieCities.lenght === pomorskieCities5000){
        document.getElementById("answerG").innerHTML = "Wsystkie miasta w pomorskim mają więcej niż 5000 mieszkańców";
    }else{
        document.getElementById("answerG").innerHTML = "Nie wsystkie miasta w pomorskim mają więcej niż 5000 mieszkańców";
    }

    document.getElementById("answerG").innerHTML += "<br> Miast w pomorskim z więcej niż 5000 mieszkańców jest " + pomorskieCities5000.length;
}



async function loadSite() {
    var cities = await getCities();
    fa(cities);
    fb(cities);
    fc(cities);
    fd(cities);
    fe(cities);
    ff(cities);
    fg(cities);
    
}

loadSite();



