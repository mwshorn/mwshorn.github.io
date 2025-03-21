// The keys and notes variables store the horn keys
const keys = ['valve-1', 'valve-2', 'valve-3'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Functions that change the colour of the keys below
const valveOnePress = function(event) {
  document.getElementById('valve-1').style.display = 'none';
  document.getElementById('valve-1-red').style.display = 'block';
}

const valveOneReturn = function(event) {
  document.getElementById('valve-1').style.display = 'block';
  document.getElementById('valve-1-red').style.display = 'none';
}

const valveTwoPress = function(event) {
  document.getElementById('valve-2').style.display = 'none';
  document.getElementById('valve-2-red').style.display = 'block';
}

const valveTwoReturn = function(event) {
  document.getElementById('valve-2').style.display = 'block';
  document.getElementById('valve-2-red').style.display = 'none';
}

const valveThreePress = function(event) {
  document.getElementById('valve-3').style.display = 'none';
  document.getElementById('valve-3-red').style.display = 'block';
}

const valveThreeReturn = function(event) {
  document.getElementById('valve-3').style.display = 'block';
  document.getElementById('valve-3-red').style.display = 'none';
}

// Valve pressing with keys
document.addEventListener("keydown", function(event) {
    if (event.key === "q" || event.key === "Q") {
        valveThreePress();
    }
  });
  
  document.addEventListener("keyup", function(event) {
    if (event.key === "q" || event.key === "Q") {
        valveThreeReturn();
    }
  });
  
  document.addEventListener("keydown", function(event) {
    if (event.key === "w" || event.key === "W") {
        valveTwoPress();
    }
  });
  
  document.addEventListener("keyup", function(event) {
    if (event.key === "w" || event.key === "W") {
        valveTwoReturn();
    }
  });
  
  document.addEventListener("keydown", function(event) {
    if (event.key === "e" || event.key === "E") {
        valveOnePress();
    }
  });
  
  document.addEventListener("keyup", function(event) {
    if (event.key === "e" || event.key === "E") {
        valveOneReturn();
    }
  });