<template>
	<div class="home">
    <v-card outlined class = "" color = "light-grey">
          <v-card-title>All Merchants</v-card-title>
          <v-layout>
            <!-- <span class="ml-4 grey--text" >Sort By</span> -->
            <v-menu offset-y>
              <template v-slot:activator="{on}" >
                <v-btn class="ml-4"  color="#fff" v-on="on">
                  <v-icon left>expand_more</v-icon>
                  <span class="ml-4 grey--text text-lowercase">Sort By</span>
                </v-btn>
              </template>  
              <v-list>
                <v-list-item v-for="field in fields" :key="field.id" @click="sort(field.name)">
                  <v-list-item-title class="text-capitalize">
                    {{field.name}}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
              
              
            </v-menu>
            <v-spacer></v-spacer>
           <!--  <span class="mr-4 grey--text text-lowercase">filter by</span> -->
               <input type="text" class = "filter mr-4 px-3 grey--text" placeholder="filter by name" v-model="filter_data"> 
               <v-btn @click = "filterMerchant" class="text-lowercase mr-4" color="primary">filter</v-btn>
              
                <!-- <v-text-field single-line outlined width="15" class="filter"></v-text-field> -->
          </v-layout>
          
          
          
          <v-container fluid fill-height>
          
            <v-divider></v-divider>
              
            <v-layout row wrap>

              <v-flex xs12 sm6 md4 lg3 v-for = "merchant in merchants" :key="merchant.id">
                <v-card class="ma-3 justify center">
                  <v-img class = "mt-1 mb-1" height = "270px" width ="315px" :src = "merchant.path"></v-img>
                  <v-divider></v-divider>
                  <v-card-title >{{merchant.name}}</v-card-title>
                  <v-card-subtitle>{{merchant.contact}}</v-card-subtitle>
                  <v-card-text>{{merchant.category}}</v-card-text>
                  <v-card-actions>
                    <v-btn text class = "text-capitalize">
                      message
                      <!-- <span>Message</span> -->
                    </v-btn>
                    <v-btn @click = "merchant.show = !merchant.show" color = "purple" text class = "ml-4 text-capitalize">
                      Read More
                      <!-- <span>Message</span> -->
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon @click = "merchant.show = !merchant.show">
                      <v-icon>
                        {{merchant.show ? 'expand_less':'expand_more'}}
                      </v-icon>
                    </v-btn>
                    
                  </v-card-actions>
                  <v-expand-transition>
                    <div v-show = "merchant.show">
                      <v-divider></v-divider>
                      <v-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                  
                </v-card>
              </v-flex>
            </v-layout>

          
          </v-container>
    </v-card>
		
		
	</div>
</template>

<script>

export default {
  name: 'Merchants',
  components: {
   
  },
  data(){
    return{
      merchants:[
          {id:1,name:'The Blush Salon',path:'images/blush.jpg',contact:'12 Oriade street, Agege Lagos',category:'service merchant',show:false},
          {id:2,name:'PZ Cussons Nigeria Limited',path:'images/cussons.jpg',contact:'12 bamiji street',category:'product merchant',show:false},
          {id:3,name:'Access Bank Nigeria',path:'images/Access-bank-New-Logo.png',contact:'13a Adeyemi Street, Victoria island Lagos',category:'service merchant',show:false},
          {id:4,name:'Huawei Nigeria Limited',path:'images/huawei.jpg',contact:'20 - 24b Harold street, Lekki, Lagos',category:'product merchant',show:false},
          {id:5,name:'Suntory Nigeria Limited',path:'images/suntory.jpg',contact:'7 Ahamadu Bello Way, Victoria Island, Lagos',category:'product merchant',show:false},
          {id:6,name:'O\'ride Nigeria Limited',path:'images/opay.jpg',contact:'11 Griffith street, Ikeja, Lagos',category:'service merchant',show:false},
          {id:7,name:'Glaxo SmithKline Limited',path:'images/GSK.jpg',contact:'Plat 33b Agbara Estate, Ogun',category:'product merchant',show:false},
          {id:8,name:'Mtn Nigeria Limited',path:'images/mtn.jpg',contact:'Plot 3b Falomo Ikoyi, Lagos',category:'service merchant',show:false},
          {id:9,name:'Canon International Limited',path:'images/canon.jpg',contact:'4 Luggard Way, Ikoyi, Lagos',category:'product merchant',show:false},
          {id:10,name:'Hilti Automobiles Limited',path:'images/Hilti.jpg',contact:'2nd Floor Dagunro Towers, Asokoro, Abuja',category:'product merchant',show:false},
          {id:11,name:'Ak Taxi Nigeria Limited',path:'images/aktaxi.jpg',contact:'39a Diri Road, Maryland, Lagos',category:'service merchant',show:false},
          {id:12,name:'Abuja Investments Limited',path:'images/abuja_investments.jpg',contact:'12 Azikwe Road, Wuse Zone 2, Abuja',category:'product merchant',show:false},
          {id:13,name:'Leadway Assurance Limited',path:'images/Leadway.png',contact:'69 Yayi Road, Challenge, Ibadan',category:'service merchant',show:false},
          {id:14,name:'Beauty and Boutique Salon',path:'images/beauty-boutique-window.jpg',contact:'39a Diri Road, Maryland, Lagos',category:'service merchant',show:false},
          {id:15,name:'Red Star Logistics',path:'images/red_star_express.jpg',contact:'50 Adedibu way, Ogbomosho, Oyo',category:'service merchant',show:false},
          {id:16,name:'Sifax Group Limited',path:'images/SIFAX_group.jpg',contact:'9a Sheraton Road, Igando, Lagos',category:'product merchant',show:false},
          {id:17,name:'Everyday Securities Limited',path:'images/security.jpg',contact:'5 Eleme Junction, Port-Harcourt, Rivers',category:'service merchant',show:false},
        ],

      fields:[
        {id:1,name:'name'},
       
        {id:2,name:'category'}
      ],
      filter_data:''

      
    }
  },
  methods:{
    sort(fieldName){
      this.merchants.sort((a,b) => a[fieldName] < b[fieldName] ? -1: 1);
      //console.log('name');
    },
    filterMerchant(){
      this.merchants = this.merchants.filter(merchant => merchant.name.toLowerCase().indexOf(this.filter_data.toLowerCase()) != -1 );
      this.filter_data = "";
      //this.merchants.sort((a,b) => a['category'] < b['category'] ? -1: 1);
      //console.log(this.filter_data);
    },
    showMore(){
      this.show = !this.show;
    }
  }
}
</script>

<style type="text/css" scoped>
  .filter{
    height: 35px;
    width: 250px;
    font-size: 14px;
    border:1px solid #b3d4fc;
    border-radius: 3px;
  }
</style>