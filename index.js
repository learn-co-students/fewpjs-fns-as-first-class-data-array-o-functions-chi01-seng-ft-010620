const routine = [];

function wakeDog(dogName, dogBreed) {
  let string = `Wake ${dogName} the ${dogBreed}`;
  console.log(string);
  return string;
};

function leashDog(dogName, dogBreed) {
  let log = console.log(`Leash ${dogName} the ${dogBreed}`);
  return `Leash ${dogName} the ${dogBreed}`;
};

function walkToPark(dogName, dogBreed) {
  let log = console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`;
};

function throwFrisbee(dogName, dogBreed) {
  let log = console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return `Throw the frisbee for ${dogName} the ${dogBreed}`;
};

function walkHome(dogName, dogBreed) {
  let log = console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`;
};

function unleashDog(dogName, dogBreed) {
  let log = console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `Unleash ${dogName} the ${dogBreed}`;
};

routine.push(wakeDog,leashDog, walkToPark, throwFrisbee, walkHome, unleashDog);

function exerciseDog(dogName, dogBreed) {
  let array = [];
  for (let i = 0; i < routine.length; i++) {
    let result = routine[i](dogName, dogBreed);
    array.push(result);
  }
  return array;
};
