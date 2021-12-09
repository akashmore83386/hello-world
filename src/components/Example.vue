<template>
    <div class="container" >
         <table v-for="user in users" :key="user.id">
             <tr>
                 <th>ID</th>
                 <th>Name</th>
                 <th>username</th>
                 <th>email</th>

             </tr>
             <tr>
                 <td>{{user.id}}</td>
                 <td>{{user.name}}</td>
                 <td>{{user.email}}</td>
                 <td>{{user.username}}</td>
             </tr>
         </table>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: 'Example',
    data:()=>({
        users:[]
    }),
    mounted(){
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
            this.users=res.data;
        })
    }
}
</script>
