<template>
    <tr>
        <td>{{itemId}}</td>
        <td>
            <span v-if="flag">{{userName}}</span>
            <span v-else>
                <input type="text" v-model="userName">
            </span>
        </td>
        <td>
            <span v-if="flag">{{userLevel}}</span>
            <span v-else>
                <input type="text" v-model="userLevel">
            </span>
        </td>
        <td><button ref="button" @click="changeInput({id:itemId,name,level})">Edit</button></td>
        <td><button class="btn" @click="del({id:itemId})">Delete</button></td>
    </tr>
</template>

<script>
import {mapMutations} from 'vuex'
import {mapState} from 'vuex'
    export default {
        props:['name','level','itemId'],
        name: '',
        data() {
            return {
                flag:true,
                userName:this.name,
                userLevel:this.level
            }
        },
        created(){
            console.log()
        },
        methods: {
            ...mapMutations(["deleteList","changeList"]),
            changeInput({id,name,level}){
                if(this.$refs.button.innerHTML=="Edit"){
                    this.$refs.button.innerHTML="Save";
                    this.flag=false
                }else if(this.$refs.button.innerHTML=="Save"){
                    this.$refs.button.innerHTML="Edit";
                    this.flag=true;
                    this.changeList({id,name,level})
                }
                
            },
            del(id){
                this.deleteList(id)
            }
        },
    }
</script>

<style lang="scss" scoped>
    .btn{
        background: rgb(165, 29, 29);
    }
</style>