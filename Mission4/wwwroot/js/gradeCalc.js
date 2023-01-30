function gradeCalc() {
    //grab values from form
    let A = Number($("#A").value);
    let GP = Number($("#GP").value);
    let Q = Number($("#Q").value);
    let MX = Number($("#MX").value);
    let FX = Number($("#FX").value);
    let Intex = Number($("#Intex").value);

    //calculations for grade
    let Aper = A * .5
    let GPper = GP * .1
    let Qper = Q * .1
    let MXper = MX * .1
    let FXper = FX * .1
    let Intexper = Intex * .1
    let letterGrade = ''

    let finalGrade = Aper + GPper + Qper + MXper + FXper + Intexper

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
    $('#percent').innerHTML = finalGrade
    $('#letter').innerHTML = letterGrade 
}