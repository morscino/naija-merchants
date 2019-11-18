<template>
	<div>
		<v-app-bar dense  fixed class = "" color="accent" height="92">
			<v-img src = "images/9-pay-logo.png" max-width="100" max-height="60" router to='/'></v-img>
			<!-- <v-toolbar-title>
				<span class="font-weight-light">9</span><span>Pay</span>	 
			</v-toolbar-title> -->
			<v-spacer></v-spacer>
			<v-toolbar-items class="" align="center">
				<v-btn text class ="hidden-md-and-down" router to='/'>
          <span>Home</span>
          <!-- <v-icon class ="" right>home</v-icon>  -->
        </v-btn>
				<v-btn text class ="hidden-md-and-down" router to= '/service'>Service Merchants</v-btn>
				<v-btn text class ="hidden-md-and-down" router to = '/product'>Product Merchants</v-btn>
				<v-btn text class ="hidden-md-and-down" router to='/about'>
					About Us
				</v-btn>
			</v-toolbar-items>
			<v-spacer></v-spacer>
      <Login/>
      <Register/>
			
		</v-app-bar>
    
      <div class="py-10" ></div>
      <div>
        <v-carousel cycle absolute height="150" hide-delimiter-background show-arrows-on-hover class="mt-1">
          <v-carousel-item v-for="banner in banners" :key="banner.id">
            <v-sheet height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <v-img :src="banner.path"></v-img>
              </v-row>  
            </v-sheet>
          </v-carousel-item>
        </v-carousel> 
      </div>
      
	</div>
</template>

<script type="text/javascript">
import Login from './Login.vue';
import Register from './Register.vue';

	export default {
		name:"Navbar",
    components:{Login,Register},
		data(){
			return{
				banners:[
					{id:1,path:'images/banner-1.jpg'},
					{id:2,path:'images/banner-2.jpg'},
					{id:3,path:'images/banner-3.jpg'},
				]
			}
		}
	}
</script>