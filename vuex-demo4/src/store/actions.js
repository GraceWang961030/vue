
export default {
  increase:({commit})=>{
    commit('increase');
  },
  decrease:({commit})=>{
    commit('decrease');
  },
  clickEven:({commit,state})=>{
    if(state.count%2==0){
    commit('increase');
    }
   //commit('clickEven')
  },
  clickAsync:({commit})=>{
    new Promise((resolve)=>{
      setTimeout(function() {
        commit('increase');
      },1000)
      }

    )
  }
}
