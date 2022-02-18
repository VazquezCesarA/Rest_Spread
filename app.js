function filterOutOdds(...nums){
    return nums.filter((num) => num % 2 === 0);
}
/// 

function findMin(...nums){
    return nums.reduce((accum, nums) =>{
        return nums < accum ? nums : accum;
    });
}
///
function mergeObjects(obj1, obj2){
    const mergObj = {...obj1, ...obj2};
    return mergObj;
}
///
function doubleAndReturnArgs(arr, ...nums){
    const mergArray = [...arr, ...nums.map(val => val * 2)];
    return mergArray;
}

////

const removeRandom = (...items) => {
    const newArray = [...items];
    console.log(newArray);
    let random = Math.floor(Math.random(1) * items.length);
    newArray.splice(random, 1);
    return newArray;
}

const extend = (...arrs) => {
    const mergArray = [...arrs[0], ...arrs[1]];
    return mergArray;
}

const addkeyVal = (obj, key, val) => {
    let newObj = {...obj};
    if(!(key in newObj)) newObj = {...obj, [key]: val}
    return newObj;
}

const removeKey = (obj, ...key) =>{
    delete obj[key];
    const newObj = {...obj};
    return newObj;
}

const combine = (...obj) =>{
    const newObj = {...obj};
    return newObj;
}

const update = (obj, key, val) =>{
    let newObj = {...obj};
    if(key in obj) newObj = {...obj, [key]: val};   
    return newObj;  
}