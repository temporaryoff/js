//the most useful loop in1 foreach loop
// kahi loops he direct dom madhe insert kele aahe jase ki foreach loop
// below example is of higher order function

const coding = ["js", "rub", "java", "python", "cppp"]

coding.forEach( function  (val) {
    console.log(val);
} )



//********************************** */

// khalil example he call back function aahe aahe callback functiion la nav naste mahanun alpha he nav remove kele   b) ani he function array chaya aat madhe chalu honar mahanun () mahde je value ahe parameter sarkhe value gheu yenar. ani {} braces madhe apna je have te operation karave.
// coding.forEach( function alpha (item) {} )

//********************************** */



//VARIL FUNCTION HE ARROW FUNCTION NE SUDDHA KARU SHAKTO.
coding.forEach( (item) => {
    console.log(item);
})

// forEach ya loop la array madhil item ani tyacha indexa ani pur array cha pan access asto.
coding.forEach((item, index, arr) => {
        console.log(ite, index, arr);
})