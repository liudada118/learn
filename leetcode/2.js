const twoSum = function(nums, target) {
    let map={};
     nums.forEach(function(e,i){
         console.log(e,i)
         map[e]=i
     })
     console.log(map)
     for(i=0;i<nums.length;i++)
     {
         let j = map[target - nums[i]];
         if (j && j !== i)
         {
             return [i,j];
             
         }
         console.log(i)

     }
    }
    console.log(twoSum([2, 7, 11, 15],9))