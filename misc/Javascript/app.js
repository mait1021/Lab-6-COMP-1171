const courseList = [
    { code: "COMP 1320", name: "IntroIntroduction to Software Development"

},{ code: "COMP 1340", name: "Introduction to Operating Systems Administration"

},{code: "COMM 1171", name: "Web Development 1"

}
];

var theCourse = "COMP 1171";

for (var i = 0; i < courseList.length; i++) {

    if (theCourse === courseList[i].code) {
        console.log("Yes I am taking that course");
    } else {
        console.log(courseList[i].code + " - " + courseList[i].name);
    }
}