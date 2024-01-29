function sortByIdentities(identities) {
  return identities.reduce(
    (result, identity) => {
      const [fullName, age, gender] = identity
        .split(",")
        .map((str) => str.trim());
      const [firstName, lastName] = fullName.split(" ");

      const personInfo = { "second-name": lastName, age: parseInt(age) };
      const personObject = { [firstName]: personInfo };

      if (gender.toLowerCase() === "female") {
        result.females.push(personObject);
      } else if (gender.toLowerCase() === "male") {
        result.males.push(personObject);
      }

      return result;
    },
    { females: [], males: [] }
  );
}
