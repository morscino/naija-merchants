<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn text
          color = "white" class="mr-2"
          v-on="on"
        >
        <span class ="hidden-md-and-down text-capitalize">Register</span>
        <v-icon right>group_add</v-icon>
         
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
         Register
        </v-card-title>

        <v-card-text>
         <v-form>
           <v-text-field label = fullname></v-text-field>
           <v-text-field type = "email" label = email></v-text-field>
           <v-text-field label = username></v-text-field>
           <v-text-field type = "password" label = password></v-text-field>
         </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
           
          >
          submit
          </v-btn>
          <v-btn
            color="error"
            text
            @click="dialog = false"
          >
           Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script type="text/javascript">
  export default{
    data(){
      return {
        dialog: false,
      }
    }
  
  }
</script>