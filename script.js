console.log("PAGE 6 TO 9")

console.log("QUESTION #1")
var a = 10;

console.log("Result:");
console.log("The value of a is: " + a );

console.log("The value of ++a is: " + (++a));
console.log("Now the value of a is: " + a );

console.log("The value of a++ is: " + (a++));
console.log("Now the value of a is: " + a );

console.log("The value of --a is: " + (--a));
console.log("Now the value of a is: " + a );

console.log("The value of a-- is: " + (a--));
console.log("Now the value of a is: " + a );

console.log("Question2")
var valueA = 2
var valueB = 1
var result = --valueA - --valueB + ++valueB + valueB-- ;

console.log("The value of a is" + "" +valueA)
console.log ("The value of b is " +"" + valueB)
console.log("The value of result is " + "" + result)



 
console.log ("Question 3")
var userName = prompt("Q3 : ENTER YOUR NAME")
console.log("HI " + userName)


console.log("Question 5")
var inputOfNum = prompt(" Q5 : Enter a number");
if (!inputOfNum){
  inputOfNum = 5
}
inputOfNum = parseInt(inputOfNum);

for (var i = 1; i <= 10; i++) {
  console.log("The Multiplication of your number is "+""+(inputOfNum * i) );
}



console.log("Question 6")
var subject1 = prompt("Q6 : Enter 1st Subject")
var subject2 = prompt("Q6 : Enter 2nd Subject")
var subject3 = prompt("Q6 : Enter 3rd Subject")
var totalMarks = 100;
var obtnMarks1 = prompt("Q6 : 1st subject obtained marks")
var obtnMarks2 = prompt("Q6 : 2nd subject obtained marks")
var obtnMarks3 = prompt("Q6 : 3rd subject obtained marks")
 var calcMarks1 = console.log("Marks of " + subject1 + " is = " + obtnMarks1/totalMarks*100 + "%")
 var calcMarks2 = console.log("Marks of " + subject2 + " is = " + obtnMarks2/totalMarks*100 + "%")
 var calcMarks3 = console.log("Marks of " + subject3 + " is = " + obtnMarks3/totalMarks*100 + "%")


console.log("PAGE 9 TO 11")
console.log("Question 8")
var city = prompt ("Q8 : Enter your city")

if (city.toLowerCase === "karachi" ){
    console.log("WELCOME TO CITY OF LIGHTS")

}
else{
console.log("WELCOME TO " + city)
}



console.log("QUESTION 9")
var gender = prompt("Q9 : Enter your gender").toLowerCase();


if (gender === "male") {
  console.log("Hi sir");
} else if (gender === "female") {
  console.log("Hi madam");
}


console.log("Question 10")

var trafficLightColor = prompt("Q10 : Enter the traffic light color:").toLowerCase();


if (trafficLightColor === "red") {
  console.log(" Must Stop");
} else if (trafficLightColor === "yellow") {
  console.log("Ready To Move");
} else if (trafficLightColor === "green") {
  console.log("Move Now");
} 


console.log("Question 11")

var fuel = prompt ("Q11 : Enter your car fuel in Liters") 
fuel = parseFloat(fuel);
 if(fuel < 0.25){
    console.log("PLease refill the fuel in your car ")
 }

console.log("Question 12")
 var one = 4;
if (one++ === 5){
    console.log("Condition is true")
}else {
    console.log("False")
}


var two = 82 ;
if (two++ === 83){
    console.log("Condition is true")
}
else {
    console.log("False")
}

var three = 12 ;
if (three++ === 13){
    console.log("Condition is true")
}
else {
    console.log("False")
}
if(three === 13){
    console.log("Condition is true")
} 
else {
    console.log("False")
}


if (++three < 14){
    console.log("Condition is true")
}
else {
    console.log("False")
}

if (three === 14){
    console.log("Condition is true")
}
else {
    console.log("False")
}

var materialCost = 20000
var labourCost = 2000
var totalCost = materialCost + labourCost
if (totalCost === labourCost + materialCost){
    console.log("The cost is correct")
}
else{
    console.log("The cost is incorrect")
}



if(true){
    console.log("true")
}
if(false){
    console.log("false")
}
if ("car" < "cat"){
    console.log("Car is smaller than cat")
}else{
    console.log("Car is bigger then cat")
}


console.log("Question 12")
var Marks = prompt("Q12 : Enter total marks")
var new0 = parseInt(Marks)

var MarksSub1 = prompt ("Q12 : Enter your 1st subject obtained marks")
var new1 = parseInt(MarksSub1)

var MarksSub2 = prompt("Q12 : Enter your 2nd subject obtained marks")
var new2 = parseInt(MarksSub2)

var MarksSub3 = prompt(" Q12 : Enter your 3rd subject obtained marks")
var new3 = parseInt(MarksSub3)

var obtMarks = new1 + new2 + new3;
var percentage = obtMarks/Marks*100
var newPercent = parseInt(percentage)

console.log("Total marks : "+""+Marks)
console.log("Obtained marks :"+""+obtMarks)
console.log("Percentage is : "+""+newPercent +"%")
if(newPercent >= 80){
console.log("Grade :"+""+"A-1")
}else if (newPercent >= 70){
    console.log("Grade :"+""+"A")
}else if (newPercent >= 60){
    console.log("Grade :"+""+"B")
}else if (newPercent >= 50){
    console.log("Grade :"+""+"C")
}else if (newPercent >= 40){
    console.log("Grade :"+""+"F")
}


console.log("Question 13")
var sceretNum =Number(6);
var userQue = prompt("Q6 : Guess the sceret number between 1 to 10")
userQueTo = parseInt(userQue)
if(sceretNum === userQueTo){
    console.log("Bingo ! Correct Answer")
}else{
    console.log("Incorrect Answer ! hint(The answer is between 1 to 7)")
}

console.log("Question 14")
var div3 = prompt("Q14 : Write a number Divisible of 3")
div3Two = parseInt(div3)
if (div3Two % 3 === 0 ){
    console.log("The number is divisible by 3")
}else{
    console.log("The number is not divisible by 3")
}

console.log("Question 15")
    var evenOrOdd = prompt("Q15 : Enter a number")
   var evenOrOdd2 = parseInt(evenOrOdd)
   if (evenOrOdd2 % 2 ===0){
    console.log("The number is even")
   }else{
    console.log("The number is odd")
}
   

console.log("Question 16")
var temp = prompt("Q16 : Whats the temperature outside")
var outTemp = parseInt(temp)
if (outTemp >= 40){
    console.log("It is to hot outside")
}else if(outTemp >= 30){
    console.log("The weather today is normal")
}
else if(outTemp >= 20){
    console.log("Today weather is cool")
}
else if(outTemp >= 10){
    console.log("OMG ! Today weather is soo cool")
}

console.log("Question 17")
var firstOp = prompt("Q17 : Enter first number")
var firstOpe = parseInt(firstOp)
var op = prompt("Enter  operator")
var scndOp = prompt("Enter second number")
var scndOpe = parseInt(scndOp)
if(op === "+"){
    console.log("Your answer is "+""+firstOpe + scndOpe)
}else if(op === "-"){
    console.log("Your answer is "+""+firstOpe - scndOpe)
}else if(op === "*"){
    console.log("Your answer is "+""+firstOpe * scndOpe)
}else if(op === "/"){
    console.log("Your answer is "+""+firstOpe / scndOpe)
}else if(op === "%"){
    console.log("Your answer is "+""+firstOpe % scndOpe)
}


console.log("PAGE 12 TO 13")
console.log("Question 18")


console.log("Question 19")
 var q19 = prompt ("Q19 : Enter 1st Integer")
 var q19_0 = prompt ("Enter 2nd Integer")

 var q19_1 = parseInt(q19);
 var q19_2 = parseInt(q19_0);

 if (q19_1 > q19_2){
   console.log("1st Integer is larger ")
 }
 else if (q19_1 < q19_2){
   console.log("2nd Integer is larger")
 }
 else if (q19_1 === q19_2){
   console.log ("Both Integer's are qual")
 }else{
   console.log("Enter a valid Integer")
 }

console.log("Question 20")
var q20 = prompt("Q20 : Enter a Number")
if (q20 > 0){
   console.log("The number is positive")
}
else if (q20 < 0){
   console.log("The number is negative")
}else if (q20 === 0){
   console.log("The number is 0")
}else{
   console.log("Enter a valid Number")
}

console.log("Question 21")
 var q21 = prompt("Q21 : Enter a single character ")
if (q21.length === 1 ){
   var q21_1 = q21.toLowerCase;
}
else{
   console.log (" Please enter a single character")
}
if (q21 === "a"|| q21 === "e" || q21 === "i" || q21 === "o" || q21 === "u"){
   console.log("Chracter is a Vowel")
}else{
   console.log("Character is not a vowel")
}



console.log("Question 22")
var q22 = "abc123"
var q22_1 = prompt("Q22 : Enter the password")
if (q22 === q22_1){
   console.log("The password you enters matches the original password")
}else{
   console.log("Incorrect password")
}

console.log("Question 23")
var q23 = prompt("Q23 : Enter Hour")
if (q23 >= 18){
   console.log("Good day")
}else{
   console.log("Good evening")
}

console.log("Question 24")
var q24  = prompt("Q24 : Enter time (in 24hr colock format)")

if (q24 >= "0000" && q24 < "1200" ){
   console.log("Good Morning")
}
else if (q24 >= "1200" && q24 < "1700"){
   console.log("Good Afternoon")


}else if (q24 >= "1700" && q24 < "2100"){
    console.log("Good Evening")
}

else if (q24 >= "2100" && q24 < "2359"){
   console.log("Good Night")
}else {
   console.log("Enter a valid Time")
}


console.log("Question 25")
var q25StudentName = {};

console.log("Question 27") 
var q27_arrayString = ("Ahmed","Mutahir","Ahsan","Daniyal" )

console.log("Question 28")
var q28_numArray = (1 , 5 ,7, 6) ;

console.log("Question 29")
var q29_booleanArray =("True,False" )

console.log("Question 30")
var q30_mixArray = ("Mutahir",26 , true);


console.log("Question 31")
var q31_eduArray =  ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

for (var m = 0 ; m < q31_eduArray.length ; m++){
    console.log((m+1)+")"+q31_eduArray[m])
}

console.log("Question 32")
var q32_studentName = ["Mutahir" , "Ahmed" , "Ali"];
var q32_score = [450 , 320 , 239]



for(var n = 0; n < q32_studentName.length ; n++ ){
    var q32_percent = (q32_score[n] / 500 ) * 100;
    console.log("Score of "+q32_studentName[n]+ " is " + q32_score[n] +". Percentage : "+  q32_percent + "%")
} 


console.log("Question 33")
var q33_color = ["green","orange","black"]
console.log("Colors in array are " + q33_color);

var q33_1 =prompt("Q33 : What color do you want to add ?")
q33_color.unshift (q33_1)
console.log("The Updated array is " +q33_color)

var q33_2 =prompt("Q33 : What color do you want to add in the end ?")
q33_color.push(q33_2)
console.log("The updated array is " + q33_color)


q33_color.unshift("Purple","Lime")
console.log("The updated array is " + q33_color)

q33_color.shift();
console.log("After deleting first element " + q33_color)

q33_color.pop();
console.log("After deleting last element " + q33_color)



q33_del = parseInt(prompt("Enter the Index you want to delete color"))
q33_delColor = parseInt(prompt("How many colors do you want to delete"))

q33_color.splice[q33_del,q33_delColor]
console.log("The updated result is "+ q33_color)


console.log("Question 34")
var q34_scoreStudent = [320 , 230 , 480 , 120];
q34_scoreStudent.sort()
console.log(q34_scoreStudent)

console.log("Question 35")
var q35_cityList = ["Karachi","Islambad","Quetta","Lahore","Multan",]
var q35_selectCity = q35_cityList.slice(1,3)
console.log(q35_selectCity)

console.log("Question 36")
var q36_names = ["This","is","my","cat"];
console.log("Without using join method " + ":"  + q36_names)
var q36_join = q36_names.join(" ")
console.log("After using join method " + ":"  + q36_join)

console.log("Question 37")
var q37_fifo = ["keyboard ","mouse","printer","monitor"]
console.log(q37_fifo)
console.log("After using shift method")
console.log(q37_fifo.shift(0))
console.log(q37_fifo.shift(1))
console.log(q37_fifo.shift(2))
console.log(q37_fifo.shift(3))

console.log("Question 38")
var q38_fifo = ["keyboard ","mouse","printer","monitor"]
console.log(q38_fifo)
console.log("After using unshift method")
console.log(q38_fifo.reverse())
console.log(q38_fifo.reverse(1))
console.log(q38_fifo.reverse(2))
console.log(q38_fifo.reverse(3))

console.log("PAGE 17 TO 20")
console.log("Question 39")
var q39_array = []

console.log("Question 40")
var q40_multiDimension = [[0,1,2,3] , [1,0,1,2]  , [2,1,0,1] ]
console.log(q40_multiDimension)

console.log("Question 41")
for ( q = 1;q <= 10; q++){
console.log(q)
}

console.log("Question 42")
var q42_number = parseInt(prompt("Q42 : Enter a number to show its multiplication number "))
var q42_length = parseInt(prompt("Q42 : Enter the length multiplication table "))
for(var w = 1; w <= q42_length; w++){
    console.log(q42_number + "*" + w + "=" + q42_number*w);
}

console.log("Question 43")
var fruits = ["apple","banana","orange","mango"]

for (var r = 0; r < fruits.length; r++) {
    console.log(fruits[r]);
}

for (var r = 0; r < fruits.length; r++) {
    console.log("Element at index  "+ r  +"  is  " +fruits[r]);
}

console.log("Question 44")
var q44_counting = [1,2,3,4,5,6,7,8,9,10]
console.log("Counting = "+ q44_counting.join(" "))

var q44_counting = [1,2,3,4,5,6,7,8,9,10]
console.log("Reverse Counting = " + q44_counting.reverse())


var q44_num = [1,2,3,4,5,6,7,8,9,10]
for(var t = 0; t < q44_num.length ; t++){
    if (q44_num[t]%2 === 0){
        console.log(q44_num[t])
    }
}

var q44_num = [1,2,3,4,5,6,7,8,9,10]
for(var y = 0; y < q44_num.length ; y++){
    if (q44_num[y]%3 === 0){
        console.log(q44_num[y])
    }
}

console.log("Question 45")

var q45_bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var q45_input = prompt("Q45 : Enter the item you want:");




for (var i = 0; i < q45_bakery.length; i++) 
  if (q45_bakery[i].toLowerCase() === q45_input.toLowerCase()) {
    {
        console.log(q45_input + " is available in the list.");
      } 
      }else {
        console.log(q45_input + " is not available in the list.");
}


console.log("Question 46")
var q46_num = [1,5,7,3,2,9,]
var q46_largest = q46_num[0]

for (var s = 1;s < q46_num.length; s++ ){
    if(q46_num[s] > q46_largest){
     q46_largest = q46_num[s]   }
}
console.log("the largest number in array is " + q46_largest)


console.log("Question 47")
var q46_number = [1,5,7,3,2,9,]
var q46_small = q46_number[0]

for (var s = 1;s < q46_number.length; s++ ){
    if(q46_number[s] < q46_small){
     q46_small = q46_number[s]   }
}
console.log("the largest number in array is " + q46_small)


console.log("Question 48")
for(var d = 1; d <= 100 ; d++){
    if(d % 5 === 0 ){
        console.log(d)
    }
   
}


console.log("PAGE 21 to 25 ")
console.log("Question 49")
var q49_firstName = prompt("Q49 : Enter your first Name ")
var q49_lastName = prompt("Q49 : Enter your last Name ")
var q49_fullName =console.log("Hello ! " + q49_firstName +" "+ q49_lastName);

console.log("Question 50")
var q50_phone = prompt("Q50 : Enter your favourite mobile phone model")
console.log("Length of string : " + q50_phone.length)

console.log("Question 51")
var q50_pak = ("n")
console.log("The index of 'n' in word 'Pakistani' is " + "Pakistani".indexOf(q50_pak) )

console.log("Question 52")
var q51_lstIndx = ("l")
console.log("The last index of 'l' in word 'Hello World' is " + "Hello World".lastIndexOf(q51_lstIndx))

console.log("Question 53")
console.log("Pakistani".indexOf("i"))

console.log("Question 54")
var q54_firstName = prompt("Q49 : Enter your first Name ")
var q54_lastName = prompt("Q49 : Enter your last Name ")
 var q54_fullName =console.log("Hello " + q54_firstName.concat(q54_lastName))


console.log("Question 55")
console.log("Before Replacing")
var q55_word = ("Hyderabad")
console.log(q55_word)
console.log("After Replacing")
var q55_replace = q55_word.replace("Hyder","Islam")
console.log(q55_replace)


console.log("Question 56")
var q56_sentence = ("Ali and sami are best friends. They paly cricket and football together ")
console.log(q56_sentence)
console.log("after replacing")
var q56_rep = q56_sentence.replace("and","&").replace("and","&")
console.log(q56_rep)

console.log("QUESTION 57")
var q57_str = "472"
console.log("Values = 472")
console.log("Type = " +typeof(q57_str))
console.log("Values = 472")
var q57_num = parseInt(q57_str)
console.log("Type = " + typeof(q57_num))

console.log("Question 58")
var q58_input = prompt("Q58  : Type Input")
var q58_upper = q58_input.toUpperCase()
console.log(q58_upper)

console.log("Question 59")
var q59_input = prompt("Q59  : Type Input")
var q59_upper = q59_input.charAt(0).toUpperCase() + q59_input.slice(1).toLowerCase();
console.log(q59_upper)

console.log("Question 60")
var q60_num = 35.36
var q60_con = q60_num.toString().replace("." , "")
console.log(q60_con)


console.log("Question 61")
var q61_bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var q61_input = prompt("Q61 : Enter the item you want:");
for (var i = 0; i < q61_bakery.length; i++) 
  if (q61_bakery[i].toLowerCase() === q61_input.toLowerCase()) {
{ console.log(q61_input + " is available in the list.");
}
}
else {
    console.log(q61_input + " is not available in the list.");
} 

console.log("Question 62")
var q62_pass = prompt("Enter the password") 
if(q62_pass.length > 6){
    console.log("Enter a valid password")
}


console.log("Question 63")
var q63_uni =("University Of Karachi ") 
var q63_split = q63_uni.split("")

for(var o = 0 ; o < q63_split.length ;  o++ ){
    console.log(q63_split[o])
}

console.log("Question 64")
var q64_input = ("Pakistan")
var q64_lstChar = q64_input.charAt(q64_input.length -1)
console.log("The last index is : "+q64_lstChar)


console.log("PAGE 26 TO 30")
console.log("Question 65")
var q65_input = prompt("Q65 : Enter a positive integer")
console.log("Number : " + q65_input)
var q65_round = Math.round(q65_input)
console.log("Round of value : " + q65_round)
var q65_floor = Math.floor(q65_input)
console.log("Floor value : " + q65_floor)
var q65_ceil = Math.ceil(q65_input)
console.log("Ceil value : " + q65_ceil)

console.log("Question 66")
var q66_input = prompt("Q66 : Enter a negative floating point integer")
console.log("Number : " + q66_input)
var q66_round = Math.round(q66_input)
console.log("Round of value : " + q66_round)
var q66_floor = Math.floor(q66_input)
console.log("Floor value : " + q66_floor)
var q66_ceil = Math.ceil(q66_input)
console.log("Ceil value : " + q66_ceil)

console.log("Question 67")
var q67_input = prompt("Q67 : Enter a value")
console.log("Value  : " + q67_input)
var q67_abs = Math.abs(q67_input)
console.log("Absolute value :  " + q67_abs)

console.log("Question 68")
var q68_dice = Math.ceil(Math.random()*6)
alert("Random dice value is : " +  q68_dice )

console.log("Question 69")
var q68_dice = Math.ceil(Math.random()*2)
if(q68_dice === 1){
    console.log("Random coin value : Heads")
}else if(q68_dice === 2){
    console.log("Random coin value : Tails")
}


console.log("question 70")
var q69_num = Math.ceil(Math.random()*100)
console.log("Random number between 1 to 100 is : " + q69_num)


console.log("Question 71")
var q71_input =prompt("Q71 : Enter your weight in kg")
var q71_weight = parseFloat(q71_input)

if(!isNaN(q71_weight)){
    console.log("The weight of user is " + q71_weight +"kg")
}else{
    console.log("Enter your valid weight")
}


console.log("Question 72")
var q72_scrt = Math.ceil(Math.random()*10)
console.log("The sceret number is " + q72_scrt)
var q72_input = prompt ("Q72 : Enter the sceret number (number is between 1 to 10)")

if(q72_scrt === q72_input){
    console.log("Congratulation ! you enter the right number")
}else{
    console.log("Try Again!")
}



console.log("PAGE 31 to 34")
console.log("Question 73")
var q73_time = new Date()
console.log(q73_time)

console.log("Question 74")
var q74_date = new Date()

var q74_month = [    "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"]
var q74_crntMonth = q74_month[q74_date.getMonth()];
console.log("Current Month : " + q74_crntMonth)

console.log("Question 75")
var q75_date = new Date()
var q75_day = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]
var q75_crntDay = q75_day[q75_date.getDay()]
console.log("Day : " + q75_crntDay)

console.log("Question 76")
var q76_date = new Date()
var q76_day = q76_date.getDay()
if(q76_day === 0 || q76_day === 6 ){
    console.log("Its a fun day!")
}

console.log("Question 77")
var q77_Newdate = new Date()
var q77_date = q77_Newdate.getDate()
if(q77_date <= 15 ){
    console.log("First Fifiteen Days of the month")
} else(
    console.log("Last dys of the month")
)

console.log("Question 78")
var q78_New = new Date()
var q78_time = q78_New.getTime()
console.log("Current time : " +  q78_time)
var q78_crnt = q78_time/(1000*60)
console.log("ellasped milliSecond since Jan 1, 1970 : " +q78_crnt)

console.log("Question 79")
var q79_New = new Date()
var q79_hr = q79_New.getHours()
if(q79_hr > 12){
    console.log("Its PM")
}else{
    console.log("Its AM")
}

console.log("Question 80")
var q80_laterDate = new Date(2020,11,31,0,0,0,0)
console.log("Later Date : " + q80_laterDate)


console.log("Question 81")
var q81_date = new Date(2023,10,21)
var q81_today = new Date()
var q81_left = q81_today - q81_date  ; 
var q81_dayPass = Math.floor(q81_left/(1000*60*60*24))
console.log(q81_dayPass + "  days have passed since 1st Ramdan 2023")


console.log("question 82")
var q82_New = new Date(2015,11,16,22,)
var q82_crnt = new Date()
var q82_minus = q82_crnt - q82_New;
var q82_sec = Math.floor(q82_minus/(1000*60));
console.log(q82_sec + "  Seconds have passed since beginging of 2015")

console.log("Question 83")
var q83_new = new Date()
var q83_then = q83_new.getHours()
console.log("Hours Before changing is : " + q83_new)
q83_new.setHours(q83_then + 1)
console.log("Hours after changing is : " + q83_new)

console.log("Question 84")
var q84_new = new Date()
var q84_time = q84_new.getDate()
console.log("Date Before changing is : " + q84_new)
q84_new.setDate(q84_time - 100)
console.log("Hours after changing is : " + q84_new)

console.log("Question 85")
var q85_prompt = prompt("Q85 : Enter your age")
var q85_New = new Date()
var q85_year = q85_New.getFullYear()
var q85_birth = q85_year - q85_prompt;
console.log("Your Birth Year is : " + q85_birth)


console.log("Question 86")
var q86_Name = "Mutahir Ahmed"
var q86_Month = "December" 
var q86_units = Number(410);
var q86_charges = Number(16)
var q86_Payable =(q86_units * q86_charges)
var q86_donePayable = q86_Payable.toFixed(2)
var q86_late = Number(350)
var q86_gross = q86_Payable + q86_late;


console.log("Customer Name : " + q86_Name)
console.log("Month : " + q86_Month)
console.log("Number of Units : " + q86_units)
console.log("Charges per Unit : " + q86_charges)
console.log("Net Amount Payable (Within Due Date) : " + q86_donePayable)
console.log("Late payment charges : " + q86_late)
console.log("Gross amount payable (After Due Date) : " + q86_gross)


console.log("PAGE 35 TO 38")
console.log("Question 87")
function telltime (){
    var q87_New = new Date ();
    console.log(q87_New) 
}
telltime()

console.log("Question 88")
function Q88_name(){
    var q88_first = prompt("Q88 : Enter your First name")
    var q88_last = prompt("Q88 : Enter your Last name")
    console.log("Hello! " + q88_first +" "+q88_last)
}
Q88_name();


console.log("Question 89")
function q89_sum (){
    var q89_first = Number(prompt("Q89 : Enter 1st number for sum"))
    var q89_second = Number(prompt("Q89 : Enter 2nd number for sum"))
    var q89_plus = parseInt(q89_first + q89_second)
    console.log("The Sum of 1st and 2nd number is : " + q89_plus)
}
q89_sum();


console.log("Question 90")
function q90_calc(){
   var q90_num1 = parseInt(prompt("Q90 : Enter 1st number"))
   var q90_opp  = prompt("Q90 : Enter Operator")
   var q90_num2 = parseInt(prompt("Q90 : Enter 2nd number"))
   if(q90_opp === "+"){
    console.log("Answer is : " + (q90_num1 + q90_num2))
   }
   if(q90_opp === "-"){
    console.log("Answer is : " + (q90_num1 - q90_num2))
   }
   if(q90_opp === "*"){
    console.log("Answer is : " + (q90_num1 * q90_num2))
   }
   if(q90_opp === "/"){
    console.log("Answer is : " + (q90_num1 / q90_num2))
   }
}
q90_calc()


console.log("Question 91")
function q91_square (){
    var q91_input = parseInt(prompt("Q91 : Enter a number for its square"))
    console.log("The square of " + q91_input + " is : " + (q91_input*q91_input))
}
q91_square()



console.log("Question 92")
function q92_fraction(){
    var q92_input = parseInt(prompt("Q92 : Enter a number "))
    if(!isNaN(q92_input)){
        var q92_modulus = q92_input % 1;
        console.log("Answer is " + q92_modulus)
    }
}
q92_fraction()


console.log("Question 93")
function q93_counting(){
    var q93_input1 = parseInt(prompt("Q93 : Enter 1st Number "))
    var q93_input2 = parseInt(prompt("Q93 : Enter 2nd Number "))
    if(q93_input1 === isNaN || q93_input2 === isNaN || q93_input1 > q93_input2){
        console.log("Enter a valid Number")
    }else{
        var q93_num = ""
        for(var x = q93_input1 ; x <= q93_input2 ; x++){
        q93_num += x + " "
      
        }
    }  console.log("Counting is " + q93_num)
}
q93_counting()


console.log("Qustion 94")


console.log("Question 95")
function q95_var (width,height){
    var q95_area = console.log("The area is " + parseInt(width*height))
}
q95_var(5,10)


function q95_values (){
    var q95_wid = parseInt(5)
    var q95_Height = parseInt(10)
    var q95_multiply = q95_wid * q95_Height
    console.log("The area is " + q95_multiply)
}
q95_values()

console.log("Question 96")
function q96_palindrome (str){

    var q96_clean = str.replace(/\s+/g, '').toLowerCase();
    var q96_reverse =str.split(" ").reverse().join('');

    if(q96_clean === q96_reverse){
        console.log("The string is plaindrome")
    }else{
        console.log("It is not plaindrome")
    }
}
q96_palindrome("madam")


console.log("Question 97")
function q97_cap  (str){
    var q97_word = str.split(" ")
    var q97_result = ("")
    for( var j = 0; j < q97_word.length; j++){
        q97_result += q97_word[j][0].toUpperCase() + q97_word[j].slice(1).toLowerCase() + " ";
        if(j < q97_word.length -1){
            q97_result += ""
        }
    }
    console.log(q97_result)
}
q97_cap("the pro player")


console.log("Question 98")

function q98_cap  (str){
    var q98_word = str.split(" ")
    var q98_long = ""
    for( var p = 0; p < q98_word.length; p++){
            if(q98_word[p].length > q98_long.length){
        q98_long = q98_word[p] 
        }
    }console.log(q98_long)
}
q98_cap("web development course")


console.log("Question 99")
function q99_strLtr (string,letter){
    var q99_num = 0
    for(var  c = 0 ;c < q99_num.length;c++ ){
        if(string[c] === letter || string[c] === letter.toUpperCase() || string[c] === letter.toLOwerCase() ){
            q99_num++
        }
    }console.log(q99_num)
}
q99_strLtr("JSResuorces.com")


console.log("Question 100")
function calcCircumfrence(radius){
    var q100_pie = 1.415
    var q100_ans = (2 * q100_pie * radius).toFixed(2)
    console.log("The circumfrenece is " + q100_ans)
}
calcCircumfrence(7)

function calcArea (radius){
    var q100_value = 1.415
    var q100_done = (q100_value * radius * radius).toFixed(2)
   console.log("The area is " + q100_done)
}
calcArea(7)