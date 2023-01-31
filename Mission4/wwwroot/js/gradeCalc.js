$(document).ready(function () {
    $("#calc-button").click(function () {
        //grab values from form
        var A = parseFloat($("#A").val());
        var GP = parseFloat($("#GP").val());
        var Q = parseFloat($("#Q").val());
        var MX = parseFloat($("#MX").val());
        var FX = parseFloat($("#FX").val());
        var Intex = parseFloat($("#Intex").val());

        //calculations for grade
        var Aper = A * .5
        var GPper = GP * .1
        var Qper = Q * .1
        var MXper = MX * .1
        var FXper = FX * .1
        var Intexper = Intex * .1
        var letterGrade = ''

        var finalGrade = Aper + GPper + Qper + MXper + FXper + Intexper

        finalGrade = finalGrade.toFixed(2)

        //if statement to assign letter grade
        if (finalGrade >= 94) {
            letterGrade = 'A'
        }
        else if (finalGrade >= 90) {
            letterGrade = 'A-'
        }
        else if (finalGrade >= 87) {
            letterGrade = 'B+'
        }
        else if (finalGrade >= 84) {
            letterGrade = 'B'
        }
        else if (finalGrade >= 80) {
            letterGrade = 'B-'
        }
        else if (finalGrade >= 77) {
            letterGrade = 'C+'
        }
        else if (finalGrade >= 74) {
            letterGrade = 'C'
        }
        else if (finalGrade >= 70) {
            letterGrade = 'C-'
        }
        else if (finalGrade >= 67) {
            letterGrade = 'D+'
        }
        else if (finalGrade >= 64) {
            letterGrade = 'D'
        }
        else if (finalGrade >= 60) {
            letterGrade = 'D-'
        }
        else {
            letterGrade = 'E'
        }

        //display results
        $('#letter').text("Your final grade is " + letterGrade + " and your percentage is " + finalGrade + "%")

    })
});