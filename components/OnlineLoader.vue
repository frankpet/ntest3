<template>      
    <div class="loading-outerbox" >


       <div style="width:100%">

           <!--  <transition enter-active-class="animate__animated animate__fadeIn animate__slower " leave-active-class="animate__animated animate__fadeOut animate__slower">
                <div class="p-b-50 p-l-20 text-center" v-if="online.online_logo_url && show">
                    <img :src="getImageUrl(online.online_logo_url)" style="max-width:150px;" alt="">
                </div>
            </transition> -->

           <transition enter-active-class="animate__animated animate__fadeInLeft " leave-active-class="animate__animated animate__fadeOutRight animate__slow" >
    
            <div v-if="show" class="loading-box">
                <div class="shell ">
                    <div class="bar" :style="{ width: progress + '%' }">
                        <!-- <span>{{ progress }}%</span> -->
                    </div>
                 </div>
            </div>
           </transition>
       </div>

    </div>
    
</template>

<script>
    export default {
        props: ['time'],
        data() {
            return {
                show : false,
                end_timeout : null,
                progress : 0,
                progress_timeout : null
            }
        },
        computed: {
           
            getProgress() {
                return this.progress
            }
        },
        mounted() {
        setTimeout(()=> {
            this.setProgress()
        },250)
        
          this.show = true; 
          this.end_timeout = setTimeout(()=> {
            this.show = false
          }, this.time +200) 
          console.log('time', this.time)  
          //console.log('online', this.online) 
        },
        beforeUnmount(){
            clearTimeout(this.end_timeout);
           
        },
        methods: { 
            setProgress() {
                let timeout = (this.time - 400)/100
                
                    setTimeout(()=> {
                       if (this.progress < 99)
                        this.progress+= 1
                        this.setProgress()
                    },timeout)
                
            },
            // getImageUrl(image) {  
            
            //     if (!image){ 
            //         image = null
                    
            //     };
            //     let url = window.image_base_url + image; 
                
            //     if(image) {
            //         return url
            //     }

            //     return '/images/online_logo_round.png';         
            // },
        }
    }
</script>

<style lang="scss" scoped>

.loading-outerbox {
    width: 100vw;
    height:100vh;
    background: #fafafa;
    display: flex;
    align-items:center;
    padding-bottom: 80px;
    justify-content: center;

    .loading-box {
        display:flex;
        justify-content:center;
        width: 100%;
    }

    .shell {
        height: 28px;
        width: 250px;
        border: 1px solid #aaa;
        border-radius: 13px;
        padding: 3px;
        box-shadow: 4px 7px 12px -7px rgba(0,0,0,0.44);
    }

.bar {
   // background: linear-gradient(to right, #B993D6, #8CA6DB);
    background: #bcd234;
    height: 20px;
    width: 15px;
    border-radius: 9px;
        span {
            float: right;
            padding: 4px 5px;
            color: #fff;
            font-size: 0.7em
        }
    }

}

    @media (max-width: 767px) { 
       
    }

    @media (min-width: 768px) { 

    }


</style>