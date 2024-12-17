info = {
  problems: [
    {
      Diabetes: [
        {
          medications: [
            {
              medicationsClasses: [
                {
                  className: [
                    {
                      associatedDrug: [
                        {
                          name: "asprin",
                          dose: "3 times daily",
                          strength: "500 mg",
                        },
                      ],
                      "associatedDrug#2": [
                        {
                          name: "cardiotan",
                          dose: "2 times daily",
                          strength: "200 mg",
                        },
                      ],
                    },
                  ],
                  className2: [
                    {
                      associatedDrug: [
                        {
                          name: "amlodipine",
                          dose: "once daily",
                          strength: "1000 mg",
                        },
                      ],
                      "associatedDrug#2": [
                        {
                          name: "Telmisartan",
                          dose: "",
                          strength: "150 mg",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          labs: [
            {
              WBC: 40,
              RBC: 67,
              MP: "+++",
            },
          ],
        },
      ],
      Asthma: [
        { param_one: "okay", param_two: "not okay" },
        { param_one: "fair", param_two: "recheck" },
      ],
      data_one: [10, 40, 67, 90, 54],
      data_two: [23, 76, 90, 54],
    },
  ],
};

/**
 * Given the JSON object model, find the following
1. Locate the data_one & data_two
2. Merge the data above to form a single list
3. Raise the RBC value to the power of 2
4. Locate the Strength of Cardiotan and Telmisartan
5. Merge className & ClassName2 to form a single list
6. Replace the name of “amlodipine” to “amlo-di-pine” from the
JSON model
7. Create a function that checks if the WBC value is within the
range of 35 and 50
8. Create a function that finds the average of the WBC and RBC
value as parameters
9. Add a date key to all the associatedDrug
 */

// Questions 1 and 2

let one_data, two_data, joined_data;
 
one_data = info.problems[0].data_one;
two_data = info.problems[0].data_two;
joined_data = one_data.concat(two_data);

console.log(joined_data);

// Question 3
let rbc = info.problems[0].Diabetes[0].labs[0].RBC;
let rbc_sq = rbc ** 2;

console.log(rbc_sq);

// Question 4
let cardiotan_strength = info.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className[0]["associatedDrug#2"][0].strength;

let telmisartan_strength = info.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className2[0]["associatedDrug#2"][0].strength;

console.log(cardiotan_strength);
console.log(telmisartan_strength);

// Quesstion 5
let cn_one = info.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className;

let cn_two = info.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className2;

let cn_merge = cn_one.concat(cn_two)

console.log(cn_merge);

// Question 6
info.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className2[0].associatedDrug[0].name = "amlo-di-pine";

console.log(info.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className2[0].associatedDrug[0].name);


// Question 7
let x = info.problems[0].Diabetes[0].labs[0].WBC;
function range () {
    if(x>=35 && x <=50) {
        console.log("WBC is within the range of 35 and 50.")
    }
    else {
        console.log("WBC is outside the range.")
    }
    }

range();

// Question 8
let g = info.problems[0].Diabetes[0].labs[0].WBC;
let h = info.problems[0].Diabetes[0].labs[0].RBC;

function mean (a, b) {
    let average = (a+b)/2;
    console.log(average);
    }

mean(g,h);

// Question 9
let ad_oneOne = info.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className[0].associatedDrug[0].date = "17-12-1999";

let ad_oneTwo = info.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className[0]["associatedDrug#2"][0].date = "17-12-1999";

let ad_twoOne = info.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className2[0].associatedDrug[0].date = "17-12-1999";

let ad_twoTwo = info.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className2[0]["associatedDrug#2"][0].date = "17-12-1999";

console.log(info.problems[0]);