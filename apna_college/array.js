
//creating array
const cars = ['car1', 'car2', 'car3']

const cars2 = []

cars2[0] = 'item1';
cars2[1] = 'item2'
cars2[2] = 'item3';

let lastElement = cars2[cars2.length-1];
console.log(lastElement); // item3

//looping

for(i=0; i<cars2.length; i++)
{
    console.log(cars2[i]);
}

cars2.forEach(myFunction)

function myFunction(value)
{
    console.log(value);
}

//adding element
cars2.push('item4')
cars2.forEach(myFunction);


//creating array with fixed size
var arrayObj = new Array (40);
arrayObj[0] = 'item size1';
arrayObj[1] = 'item size2'

arrayObj.forEach(myFunction);

//nested array

for (let index = 0; index < cars.length; index++) {

    for (let index = 0; index < cars2.length; index++) {
        const element = cars2[index];
        
    }
    
}



