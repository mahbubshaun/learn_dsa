numbers = [5,4,1,3,2]
bubleSort(numbers);
function bubleSort(numbers)
{
    for(let i=0;i<numbers.length - 1;i++)
    {
        for(let j=0;j<numbers.length - i - 1;j++)
        {
            if(numbers[j] > numbers[j + 1])
            {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }

    }

    console.log(numbers);
}