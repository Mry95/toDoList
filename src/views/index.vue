<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>no</th>
                    <th>Name</th>
                    <th>Level</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td><input type="text" v-model="name"></td>
                    <td><input type="text" v-model="level"></td>
                    <td><button @click="addData">save</button></td>
                    <td></td>
                </tr>
                <Tr v-for="(item) in data" :key="item.id"
                :name="item.name"
                :level="item.level"
                :itemId="item.id"
                />
            </tbody>
            <tfoot></tfoot>
        </table>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import Tr from '@/components/Tr'
    export default {
        components:{
            Tr  
        },
        name: '',
        data() {
            return {
                name:'',
                level:'',
            }
        },
        methods: {
            ...mapMutations(['addList']),
            addData(){
                this.addList({
                    name:this.name,
                    level:this.level
                });
                this.name='';
                this.level='';
            }
        },
        computed: {
           ...mapState(['data'])
        },
    }
</script>

<style lang="scss">
    table{
        width: 100%;
        text-align: center;
        background: #eee;
        border: 1px solid #000;
        border-collapse: collapse
    }
    input{
        border: none;
        border-radius: 5px;
        background: #fff;
        height: 25px;
        padding-left: 10px;
        outline: none;
        width: 300px;
    }
    button{
        padding: 0 5px;
        border: 1px solid #ccc;
        outline: none;
        height: 25px;
        border-radius: 5px;
        background: lawngreen;
    }
    tr{
        border: 1px solid #000;
        height: 40px;
    }
    td{
        border: 1px solid #000;
        
    }
</style>