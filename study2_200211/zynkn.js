

function sugar(n){
  for(let i = Math.floor(n/5); i > 0; i--){
    // i는 5kg 설탕의 갯수
    let res = (n - (i*5)); // 5kg * i 를 뺀 나머지
    if( res % 3 === 0){
      return (i + (res / 3));
    }
  }
  // 5키로를 넣을 수 없다면, 
  if(n % 3 === 0){
    return n/3;
  }
  // 3키로도 넣을 수 없다면,
  return -1;
}
console.log(sugar(18));
console.log(sugar(4));
console.log(sugar(6));
console.log(sugar(9));
console.log(sugar(11));
console.log(sugar(99));


function LRU(size, cities){
  //const obj = {}; // 처음엔 오브젝트로 해볼까 생각함, O(1)로 값을 찾을 수 있기 때문,
  const CACHED = [];
  let total = 0;
  for(let i = 0; i < cities.length; i++){
    cities[i] = cities[i].toLowerCase();
    if(CACHED.length < size){
      CACHED.push(cities[i]);
      total+=5; // 캐시가 없으므로 캐시 미스
    }else{
      let pos = CACHED.indexOf(cities[i]); // 캐시에 존재하는지? 있다면 해당 위치,  없다면 -1
      if(pos === -1){
        CACHED.shift();
        CACHED.push(cities[i]);
        total+=5; // 캐시 미스
      }else{
        let item = CACHED.splice(pos,1);
        CACHED.push(...item);
        total+=1; // 캐시 힛
        
      }
    }
  }
  return total;
}


console.log(LRU(3, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']))
console.log(LRU(3, ['Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul'] ))
console.log(LRU(2, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'SanFrancisco', 'Seoul', 'Rome', 'Paris', 'Jeju', 'NewYork', 'Rome'] ))
console.log(LRU(5, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'SanFrancisco', 'Seoul', 'Rome', 'Paris', 'Jeju', 'NewYork', 'Rome']))
console.log(LRU(2, ['Jeju', 'Pangyo', 'NewYork', 'NewYork']));
console.log(LRU(0, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']))