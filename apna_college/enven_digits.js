const numbers = [555,901,482,1771]

evenDigits(numbers);

function evenDigits(numbers)
{
    let evenNumbers = 0;
    for(let i=0;i<numbers.length; i++)
    {
        let curr = String(numbers[i]);
        console.log(curr.length);
        if (curr.length % 2 == 0)
        {
            evenNumbers++;
        }


    }
    console.log('Even numbers found toatl: '+evenNumbers);
}