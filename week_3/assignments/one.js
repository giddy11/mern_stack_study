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