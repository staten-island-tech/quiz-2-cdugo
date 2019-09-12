let john = (89 + 120 + 103) / 3;
let mike = (116 + 94 + 123) /3;

if (john > mike) {
    console.log(`John's team has a higher average score of ${john} than Mike's team by ` + (john - mike ));
} else if (mike > john) {
    console.log(`Mike's team has a higher average score of ${mike} than John's team by ` + (mike - john));
} else {
    console.log("Their scores are equal");
}