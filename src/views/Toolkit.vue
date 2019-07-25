<template>
    <b-container>
        <b-row>
            <b-col>
              <h2>{{userList.length}}</h2>
              <div  v-for="user in userList">
                <b-card v-bind:header="user.email">
                  <b-row>
                    <b-col><p>{{user.name}}</p></b-col>
                    <b-col><p>{{user.accountType}}</p></b-col>
                    <b-col><p>{{getAge(user.dob)}}</p></b-col>
                    

                  </b-row>

                </b-card>
              </div>


            </b-col>

        </b-row>



    </b-container>
    
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'toolkit',
  props: {
  },
  mounted() {
    let v = this;
    let db = firebase.firestore()
    let usersRef = db.collection("users");

    usersRef.get()
    .then(querySnapshot => {
      querySnapshot.docs.forEach(doc =>{
          v.userList.push(doc.data());
          console.log(doc.data())
  
      })
    })
    
    console.log(v.userList)

  },
  computed:{
    users:{
      get: function(){
        
      },

    },
  },
  data() {
    return {
      userList: []

    }
  },
  methods:{
    getAge(DOB) {
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    return age;
}
  }
}
</script>

<style scopped>

</style>
