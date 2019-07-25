<template>
    <b-container v-show:="isAdmin">
        <b-row>
            <b-col>
                <b-card>



                </b-card>


            </b-col>

        </b-row>



    </b-container>
    
</template>

<script>
export default {
  name: 'toolkit',
  props: {
  },
  mounted() {

  },
  computed:{
    users:{
      get: function(){
        
      }
    },
    isAdmin:{
        get: function(){
            if (v.$store.state.account.accountType == 'Admin') {
                return true
            }
        }
    }

  },
  components: {
    
  },
  data() {
    return {

    }
  },
  methods:{
    checkAdmin() {

    },

  }
}
</script>

<style scopped>

</style>
