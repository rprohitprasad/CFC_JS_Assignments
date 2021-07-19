var sortArrayByParity = function(nums) {
    let arr1=[];
    for(let i=0;i<nums.length;i++) {
        if(nums[i]%2==0) {
            arr1.unshift(nums[i]);
        }
        else {
            arr1.push(nums[i]);
        }
    }
    return arr1;
    
};