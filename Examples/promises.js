/**
 * 
 * @param {integer} a 
 * @param {integer} b
 * @returns {integer} sum or error 
 */
function printSum(a,b){
    return new Promise((resolve,reject)=> {
        if(a && b){
          var sum = calcSum(a,b);
          if(typeof sum == 'integer'){
              var data = {
                  'sum': sum
              }
              resolve(data);
          }else{
              reject(sum);
          }
        }
      
        if(!a || !b){
          reject(new Error('One of the argument is missing'));
        }
    })
  }
  
  function calcSum(a,b){
    return new Error('Undefined');
  }
  
  printSum(3,5).then((data) => {
    if(!data.sum){
          throw Error('Invalid property total');
    }
    return (data.sum);
  })
  .then((responseData) => {
    console.log(`There is a response ${responseData}`);
  })
  .catch((errMsg) => {
    console.log(`There is an error ${errMsg}`);
  })