const numbers = [2, 4, 6, 8, 10];

printPairs(numbers);

function printPairs(numbers)
{
    let tp =0 ;
    for(let i=0;i<numbers.length; i++)
    {
        let curr = numbers[i];

        for(let j=i+1; j<numbers.length; j++)
        {
            console.log("("+ curr + ", "+ numbers[j]+ ")");
            tp++;
        }
    }
    console.log("Total Pairs: "+ tp);
}