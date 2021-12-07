<template>
  <div class="card">
    
    <md-table v-model="users" md-card>
      <md-table-toolbar>
          <mdb-container>
    <mdb-input placeholder="Search" type="text" class="search"/>
  </mdb-container>
      </md-table-toolbar >

      <md-table-row slot="md-table-row"  v-for="user in users" :key="user.id">
                <md-table-cell md-sort-by="check" md-numeric><CheckBox /></md-table-cell>

        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ user.id }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ user.name }}</md-table-cell>
        <md-table-cell md-label="Email" md-sort-by="email">{{ user.email }}</md-table-cell>
        <md-table-cell md-label="Username" md-sort-by="username">{{ user.username }}</md-table-cell>
                <md-table-cell md-label="Edit" md-sort-by="edit"><EditIcon /></md-table-cell>

        <md-table-cell md-label="Delete" md-sort-by="delete"><Delete /></md-table-cell>


      </md-table-row>
    </md-table>
  </div>
</template>

<style>

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 80%;
  margin-top: 140px;
  margin-left: 130px;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 363px;
  border-radius: 15px;
  overflow: hidden;
  position: fixed;
  object-fit: cover;
}
::-webkit-scrollbar {
    display: none;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

 .active-pink-2 input[type=text]:focus:not([readonly]) {
    border-bottom: 1px solid #f48fb1;
    box-shadow: 0 1px 0 0 #f48fb1;
  }
  .active-pink input[type=text] {
    border-bottom: 1px solid #f48fb1;
    box-shadow: 0 1px 0 0 #f48fb1;
  }
  .active-purple-2 input[type=text]:focus:not([readonly]) {
    border-bottom: 1px solid #ce93d8;
    box-shadow: 0 1px 0 0 #ce93d8;
  }
  .active-purple input[type=text] {
    border-bottom: 1px solid #ce93d8;
    box-shadow: 0 1px 0 0 #ce93d8;
  }
  .active-cyan-2 input[type=text]:focus:not([readonly]) {
    border-bottom: 1px solid #4dd0e1;
    box-shadow: 0 1px 0 0 #4dd0e1;
  }
  .active-cyan input[type=text] {
    border-bottom: 1px solid #4dd0e1;
    box-shadow: 0 1px 0 0 #4dd0e1;
  }
  .active-cyan .fa, .active-cyan-2 .fa {
    color: #4dd0e1 !important;
  }
  .active-purple .fa, .active-purple-2 .fa {
    color: #ce93d8 !important;
  }
  .active-pink .fa, .active-pink-2 .fa {
    color: #f48fb1 !important;
  }


</style>


<script>
import EditIcon from 'vue-material-design-icons/FileEdit.vue'
import Delete from 'vue-material-design-icons/Delete.vue'
  import { mdbInput, mdbContainer } from 'mdbvue';
  import CheckBox from 'vue-material-design-icons/CheckboxMarked.vue'
  import axios from "axios"

  export default {
    name: 'TableTemplate',
    components: {
      EditIcon,
      Delete,
        mdbInput,
      mdbContainer, CheckBox
    },
      data: () => ({
			users: []
		}),
		mounted() {
			axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
				this.users = res.data
			})
		},
    // data: () => ({
    //   users: [
    //     {
    //       id: 1,
    //       name: 'Shawna Dubbin',
    //       email: 'sdubbin0@geocities.com',
    //       gender: 'Male',
    //       title: 'Assistant Media Planner',
         
         
    //     },
    //     {
    //       id: 2,
    //       name: 'Odette Demageard',
    //       email: 'odemageard1@spotify.com',
    //       gender: 'Female',
    //       title: 'Account Coordinator',
           
    //     },
    //     {
    //       id: 3,
    //       name: 'Lonnie Izkovitz',
    //       email: 'lizkovitz3@youtu.be',
    //       gender: 'Female',
    //       title: 'Operator'
    //     },
    //     {
    //       id: 4,
    //       name: 'Thatcher Stave',
    //       email: 'tstave4@reference.com',
    //       gender: 'Male',
    //       title: 'Software Test Engineer III'
    //     },
    //     {
    //       id: 5,
    //       name: 'Clarinda Marieton',
    //       email: 'cmarietonh@theatlantic.com',
    //       gender: 'Female',
    //       title: 'Paralegal'
    //     }
    //   ]
    // })
  }
</script>
