/*      ○ A=100-90
        ○ B=89-80
        ○ C=79-70
        ○ D= 69-60
        ○ F= 59-0
*/

// var grade = 88


function myGrade() {
    var grade = 88
    if (grade >= 90) {
        console.log("A")
    } else if (grade >= 80) {
        console.log("B")
    } else if (grade >= 70) {
        console.log("C")
    } else if (grade >= 60) {
        console.log("D")
    } else {
        console.log("F")
    }
}

myGrade()

