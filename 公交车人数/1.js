// const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

var number = function(busStops){
    // Good Luck!
    let a = 0
    for(let number of busStops){
      a += number[0] - number[1]
    }
    return a 
  }