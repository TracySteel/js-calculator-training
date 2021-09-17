// split bills

var billamount;
var tipAmount;
var numPeople;
var splitBillAmount;


function calculateTip(billAmount) {
    if (billAmount < 50)
    {
        return  (billAmount/100)*20;
    } else if (billAmount >= 50 && billAmount < 200)
    {
        return  (billAmount/100)*15;
    } else 
    {
        return  (billAmount/100)*10;
    }
}

function resetForm()
{
    $('#answerbox').slideUp('slow');
    $('#billAmount').val('');
    
}

function grabAndStart()
{
    billamount = $('#billAmount').val();
    tipAmount = calculateTip(billamount);
    $('#tipAmount').html(tipAmount);
    $('#answerbox').slideDown('slow');
}


function totalBill()
{
    $('#totalAmount').html(parseInt(billamount)+parseInt(tipAmount));
    $('#tipAmount').html(tipAmount);
    $('#billAnswer').slideDown('slow');
}

function getSplit()
{
    numPeople = $('#numPeople').val();
    splitBillAmount = splitBill(numPeople);
    $('#splitBillAmount').html(splitBillAmount);
    $('#splitAnswer').slideDown('slow');
}


function splitBill()
{
     $('#splitBillAmount').html((parseInt(billamount)+parseInt(tipAmount))/parseInt(numPeople));
}



//Inches to Centimeters


var inch = 1;
var inchToCentimetre = 2.54;
var numCentimeters;
var numInches;


function getInches()
{
numInches = $('#numInches').val();
numCentimeters = makeMetric(numInches);
$('#numCentimeters').html(numCentimeters);
$('#inchesAnswer').slideDown();
}

function makeMetric(){
   $('#numCentimeters').html(parseInt(numInches)*parseFloat(inchToCentimetre));
}


// Cats and Dogs


var numCats;
var numDogs;
var totalAnimals;

function getAnimals()
{
numCats = $('#numCats').val();
numDogs = $('#numDogs').val();
totalAnimals = addAnimals(totalAnimals);
$('#addAnimals').html(totalAnimals + ' Animals you crazy human');
$('#animalsAnswer').slideDown();
}

function addAnimals(){
   $('#totalAnimals').html(parseInt(numCats)+parseInt(numDogs));
}


// Retirement

var birthYear;
var birthYearVal = parsInt(birthYear);
var yearNow = 2020;
var retirementAge;
var ageRetirement;

function getBirthYear()
{
    birthYear = $('#birthYear').val();
    ageRetirement = retirementAge(ageRetirement);
    $('#ageRetirement').html('You will be ' + retirementAge + ' years old');
    $('#retireAnswer').slideDown();
}


function retirementAge(birthYearVal)
{
    if (birthYearVal >= 1953 )
        {
        return retirementAge = 67;
        }
        else if (birthYearVal >= 1977)
        {
            return retirementAge = 68;
        }
            else
         {
             return retirementAge = 65;
         }
}


// death calculator


//var ageNow = yearNow - birthYear;
//
//var woman parseInt("10");
//var salad;
//var covid;
//var smoke;
//var soap;
//var drink
//var exercise;
//var children;
//
//var womanDeath = 83;
//var manDeath = 79;
//
//function getDeath()
//{
//    woman = $('#woman').val();
//    salad = $('#salad').val();
//    covid = $('#covid').val();
//    smoke = $('#smoke').val();
//    soap = $('#soap').val();
//    drink = $('#drink').val();
//    exercise = $('#exercise').val();
//    children = $('#children').val();
//
//}
//
//
//function deathFactors() {
//    $('#yearsToDeath').html();
//}











