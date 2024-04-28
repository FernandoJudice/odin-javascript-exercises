const findTheOldest = function(people) {
    let oldestPerson = people.reduce((oldest,person) => {
        let oldestAge = getAge(oldest.yearOfBirth,oldest.yearOfDeath);
        let personAge = getAge(person.yearOfBirth,person.yearOfDeath);
        return oldestAge > personAge ? oldest : person
    })

    return oldestPerson
};

function getAge(birth,death){
    if(!death) {
        death = new Date().getFullYear()
    }
    return death - birth
}

// Do not edit below this line
module.exports = findTheOldest;
