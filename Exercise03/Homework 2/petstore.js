/**
 * This function should calculate the total amount of pet food that should be
 * ordered for the upcoming week.
 * @param numAnimals the number of animals in the store
 * @param avgFood the average amount of food (in kilograms) eaten by the animals
 * 				each week
 * @return the total amount of pet food that should be ordered for the upcoming
 * 				 week, or -1 if the numAnimals or avgFood are less than 0 or non-numeric
 */
function calculateFoodOrder(numAnimals, avgFood) {
    // IMPLEMENT THIS FUNCTION!
    var animals = Number(numAnimals);
    var food = Number(avgFood);

    if (animals <= 0 || isNaN(animals) === true) {
        return -1;
    }

    if (food <= 0 || isNaN(food) === true) {
        return -1;
    }
    
    var totalAmount = animals * food;
    return totalAmount;
}

/**
 * Determines which day of the week had the most nnumber of people visiting the
 * pet store. If more than one day of the week has the same, highest amount of
 * traffic, an array containing the days (in any order) should be returned.
 * (ex. ["Wednesday", "Thursday"]). If the input is null or an empty array, the function
 * should return null.
 * @param week an array of Weekday objects
 * @return a string containing the name of the most popular day of the week if there is only one most popular day, and an array of the strings containing the names of the most popular days if there are more than one that are most popular
 */
function mostPopularDays(week) {
    // IMPLEMENT THIS FUNCTION!
    var traffic = 0;
    var day;
    var days = [];
    if (week === null) {
        return null;
    }
    week.forEach(function(element) {
        if (element.traffic >= traffic && element.traffic > 0) {
            if (element.traffic > traffic) {
                days = [];
                day = element.name;
                traffic = element.traffic;

            } else if (element.traffic === traffic && element.name !== day) {
                if (days.length === 0) {
                    days.push(day);
                }
                days.push(element.name);
            }
        }
    });
    if (days.length === 0 && day === undefined){
        return null;
    } else if (days.length <= 1) {
        return day;
    } else {
        return days;
    }
}


/**
 * Given three arrays of equal length containing information about a list of
 * animals - where names[i], types[i], and breeds[i] all relate to a single
 * animal - return an array of Animal objects constructed from the provided
 * info.
 * @param names the array of animal names
 * @param types the array of animal types (ex. "Dog", "Cat", "Bird")
 * @param breeds the array of animal breeds
 * @return an array of Animal objects containing the animals' information, or an
 *         empty array if the array's lengths are unequal or zero, or if any array is null.
 */
function createAnimalObjects(names, types, breeds) {
    // IMPLEMENT THIS FUNCTION!
    var animals = [];
    if (names === null || types === null || breeds === null) {
        return animals;
    }

    if(names.length !== types.length || names.length !== breeds.length) {
        return animals;
    }
    animalNames = names.length;

    for (i = 0; i < animalNames; i++) {
        animals[i] = {
            name: names[i],
            type: types[i],
            breed: breeds[i]
        };
    }
    return animals;
}

/////////////////////////////////////////////////////////////////
//
//  Do not change any code below here!
//
/////////////////////////////////////////////////////////////////


/**
 * A prototype to create Weekday objects
 */
function Weekday (name, traffic) {
    this.name = name;
    this.traffic = traffic;
}

/**
 * A prototype to create Item objects
 */
function Item (name, barcode, sellingPrice, buyingPrice) {
     this.name = name;
     this.barcode = barcode;
     this.sellingPrice = sellingPrice;
     this.buyingPrice = buyingPrice;
}
 /**
  * A prototype to create Animal objects
  */
function Animal (name, type, breed) {
    this.name = name;
     this.type = type;
     this.breed = breed;
}


/**
 * Use this function to test whether you are able to run JavaScript
 * from your browser's console.
 */
function helloworld() {
    return 'hello world!';
}