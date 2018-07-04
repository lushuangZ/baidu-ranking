<template>
    <div class="list-wrapper">
        <div class="list-header">
            <div class="left-header">搜索热点</div>
            <div class="right-header">
                <span :class='[nowPage != 0 ? "left-dir" : ""]' @click="nextLeft"><</span>
                <span v-for="i in nowPageLength" :class="[(i-1) == nowPage ? 'color' : '']">.</span>
                <span :class='[(nowPage + 1) != nowPageLength? "right-dir" : ""]' @click="nextRight">></span>
            </div>
        </div>
        <div class="list-title">
         <div class="left-title">排名</div>
         <div class="right-title">搜索指数</div>
        </div>
        <div class="list-content" v-if="lists.length !== 0">
           <div class="list-for" 
                v-for="index in length" 
                v-if="lists.length >= nowPage*length + index" 
                @click="add(nowPage*length + index-1)">
             <div :class="['list-index', 'list-'+(nowPage*length + index)]">{{nowPage*length+index}}</div>
             <div class="list-title" >{{lists[nowPage*length + index-1].title}}</div>
             <div class="list-num" >{{lists[ nowPage*length + index-1].clickNum}}</div>
           </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    data() {
        return {
            nowPage: 0
            
        }
    },
    computed: {
        ...mapState(['lists', 'length', 'num']),
        nowPageLength() {
            var page = Math.ceil(this.lists.length / this.length)
            return  page > this.num ? this.num : page
        }
    },
    methods:  {
           nextLeft() {
               console.log(this.nowPage, this.nowPageLength)
               if(this.nowPage  <= 0 ) {
                   return
               } else {
                   this.nowPage --
               }
           },
           nextRight() {
               if(this.nowPage + 1 >= this.nowPageLength) {
                   return
               } else {
                   this.nowPage ++
               }
           },
           ...mapMutations(['_add']),
           add(num) {
               this._add(this.lists[num].title)
           }

    }
}
</script>
<style>
  .right-header {
      user-select: none;
      margin-left: 5px;
  }
  .list-for {
      width: 100%;
      display: flex;
      height: 30px;
      align-items: center;
      cursor: pointer;
  }
  .list-title {
      flex: 1;
      margin-left: 5px;
  }
  .color {
      color:  #8eb9f5;
  }
  .list-index {
      width: 12px;
      height: 12px;
      background: #8eb9f5;
      color: #fff;
      line-height: 12px;
      text-align: center;
      font-size: 6px;
      margin-right: 3px;
  }
  .list-1 {
      background: red;
  }
  .list-2 {
      background: #ff8547;
  }
  .list-3 {
      background: #ffac38;
  }
  .list-wrapper {
      width: 50%;
      margin: 0 auto;
      border: 1px solid black;
  }
  .list-header, .list-title {
        display: flex;
        height: 30px;
        line-height: 30px;
   }

   .left-header , .left-title{
       flex: 1;
   }

   .left-dir, .right-dir {
      color: rgb(56, 139, 255);
      cursor: pointer;
   }
   
   .normal-dir {
       color: rgb(204,204,204);
   }


</style>