const newArray = [1,2,3,4,5]

/*const filteredArray = newArray.filter(checkNum);

function checkNum(num){
    if (num > 4){
        return num
    }
}*/

const filteredArray = newArray.filter((element) => element > 4);

//console.log(filteredArray);


const names = ["Anni", "Mari", "Mati", "Juku"];

const namesObject = names.map(element => {
    people = {}
    people.name = element;
    people.age = this.age;
    people.email = `${element}@company.com`;
    people.adress = this.adress;
    people.username = [...element].reverse().join('');
    return people;
});

//console.log({namesObject});

let person = {
    name: "Hugo",
    school: "Tlu"
}

person = {...person, height: 181 };

//console.log(person);

const myPromise = ()=>{
    return new Promise(resolve => setTimeout(()=> resolve("done"), 1000));
}

const runPromise = async ()=>{
    
    console.log(await myPromise());
};

runPromise();