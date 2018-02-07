export default{
count(state){
  return state.count;
},
type(state){
  return state.count%2==0?'even':'odds';
}
}

