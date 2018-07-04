<template>
    <div class="front-wrapper">
        <div class="change-msg">
           <div class="page">
               <div class="show-page">
                  显示页数：<input type="text" v-model="page">
               </div>
               <div class="change-page" @click="changePage">
                   修改
               </div>
           </div>
           <div class="length">
               <div class="show-length">
                   显示长度：<input type="text" v-model="length">
               </div>
               <div class="change-length" @click="changeLength">
                   修改
               </div>
           </div>
        </div>
        <div class="add-list">
             <div class="add-title">
                 输入题目：<input type="text" v-model="title">
             </div>
             <div class="add-num">
                 输入数量：<input type="text" v-model="num">
             </div>
             <div class="add-btn" @click="addList">添加</div>
        </div>
        <div class="show-msg">
            <table border>
                <tr>
                    <th>编号</th>
                    <th>题目</th>
                    <th>时间</th>
                    <th>点击量</th>
                    <th>操作</th>
                </tr>
                <tr v-for="(item, index) in lists">
                    <td>{{index+1}}</td>
                    <td>{{item.title}}</td>
                    <td>{{item.time}}</td>
                    <td>{{item.clickNum}}</td>
                    <td>
                        <span>修改</span>
                        <span @click="_delList(item.title)">删除</span>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    data() {
        return {
            page: this.$store.state.num,
            length: this.$store.state.length,
            title: '',
            num: 0
        }
    },
    methods: {
       ...mapMutations(['_addList', '_changeNum', '_changeLength', '_delList']),
       addList() {
             if(this.title == '') {
                 this._addList({title: '事件'+parseInt(Math.random()*10000), num: parseInt(Math.random() * 1000000)})
             } else  {
                 this._addList({title: this.title, num: +this.num})
                 this.title = ''
                 this.num = 0
             }
       },
       changeLength() {
           this._changeLength(+this.length)
           alert('修改成功')
       },
       changePage() {
           this._changeNum(+this.page)
           alert('修改成功')
       }
    },
    computed: {
        ...mapState({
            lists: state => state.lists
        })
    }
}
</script>

<style>
  .front-wrapper {
     width: 70%;
     margin: 20px auto;
     min-width: 700px;
  }

  .change-msg {
      display: flex;
      margin-bottom: 30px;
  }

  .page , .length {
      display: flex;
      flex: 1;
      height: 30px;
      align-items: center;
  }

  .change-page, .change-length {
      margin-left: 10px;
      height: 20px;
      width: 50px;
      background: red;
      line-height: 20px;
      color: white;
      text-align: center;
      cursor: pointer;
  }
  .add-list {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
  }

  .add-title, .add-num {
      flex: 1;
  }
  .add-num{
      margin-left: 50px;
  }

  .add-btn {
      height: 20px;
      width: 50px;
      line-height: 20px;
      text-align: center;
      background: red;
      color: white;
      cursor: pointer;
  }
  th, td {
      width: 20%;
      text-align: center;
  }
  
</style>


