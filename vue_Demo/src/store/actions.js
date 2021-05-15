
//需要引入需要的文件
import {ADD,DEL,CLEAR,SELECT_ALL} from './mutation-types.js'

export default {

    add ( {commit} , todo ) {
      commit(ADD,{todo})
    },

    del ({commit} , index) {
      commit(DEL,{index})
    },

    clear ({commit}){
      commit(CLEAR)
    },
    
    select_all ({commit},check){
      commit(SELECT_ALL,{check})
    }
}
