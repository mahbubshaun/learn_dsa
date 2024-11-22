const height = [4,2,0,6,3,2,5]
trappingRainWater(height);
function trappingRainWater(height)
{
    const leftMaxBound = []
    const rightMaxBound = []
    //calculate left max boundary -- array
    for(let i=0;i<height.length; i++)
    {
        if (i == 0 )
        {
            leftMaxBound[i] = height[i];
        }
        else{
            leftMaxBound[i] = Math.max(leftMaxBound[i-1], height[i]);
        }
        
    }
    console.log(leftMaxBound);

    //calculate right max boundary -- array
    for(let i=height.length-1; i>=0; i-- )
    {
        if (i == height.length-1)
        {
            rightMaxBound[i] = height[i];
        }else{
            rightMaxBound[i] = Math.max(rightMaxBound[i+1], height[i]);
        }
    }
    console.log(rightMaxBound);


    //loop

    //waterlevel = min(left max bound, right max bound)

    //trapped water = (waterlevel - height) 
    let tw = 0;
    for(let i=0;i<height.length; i++)
    {
        tw = tw + (Math.min(leftMaxBound[i], rightMaxBound[i]) - height[i]);

    }

    console.log("total trapped water: ", tw);
}