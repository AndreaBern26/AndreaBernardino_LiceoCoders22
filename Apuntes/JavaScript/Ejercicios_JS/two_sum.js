/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let index1, index2;
    
    for (let i = 0; i < nums.length;i++){
        for (let j = 0; j < nums.length;j++){
            if (nums[i] + nums[j] == target && i != j){
                index1 = i;
                index2 = j;   
            }
         }
    }
         
    return [index1, index2];
};

document.write(twoSum([5,4,2,6,9,8,1], 10));