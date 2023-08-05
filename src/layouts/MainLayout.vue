<template>
    <q-layout view="lHh Lpr lFf" class="text-capitalize" >
        <q-header elevated>
            <q-toolbar>
                <q-btn
                    flat
                    dense
                    round
                    icon="fas fa-grip-horizontal"
                    aria-label="Menu"
                    @click="toggleLeftDrawer"
                />
                <q-toolbar-title v-text="lang.title" />
                <selectLanguage/>
                <q-toggle
                    v-model        = 'DakeMode'
                    size           = "lg"
                    color          = "green"
                    checked-icon = "fas fa-moon"
                    unchecked-icon   = "fas fa-sun"
                />
            </q-toolbar>
        </q-header>
        <q-drawer
            v-model     = "leftDrawerOpen"
            style       = "border-right: 1px solid"
            :persistent = "$q.screen.lt.sm ? false : true "
        >
            <q-scroll-area style="height: 100%; border-right: 1px solid #ddd">
                <div class="w-100 row justify-center">
                    <q-avatar class = "avatar-img" >
                        <q-img class="absolute-top" />
                        <q-img src="~assets/icon.png" />
                    </q-avatar>
                </div>
                <q-list padding>
                    <q-expansion-item :label="lang.contactMe"
                        expand-separator
                        default-opened
                        icon="fas fa-user"
                        expand-icon="fas fa-angle-down"
                    >
                        <q-item clickable v-ripple @click="copy( '01145803442' , 'fas fa-phone' , lang.phoneNumber )">
                            <q-item-section avatar> <q-icon name="fas fa-phone" /> </q-item-section>
                            <q-item-section> <b>+201145803442</b> </q-item-section>
                            <q-item-section avatar> <q-icon color="primary" name="far fa-clipboard" /> </q-item-section>
                            <q-tooltip v-text="lang.clickCopy" />
                        </q-item>
                        <q-item clickable v-ripple @click="copy( '01060636646' , 'fas fa-phone' , lang.phoneNumber )">
                            <q-item-section avatar> <q-icon name="fas fa-phone" /> </q-item-section>
                            <q-item-section> <b>+201060636646</b> </q-item-section>
                            <q-item-section avatar> <q-icon color="primary" name="far fa-clipboard" /> </q-item-section>
                            <q-tooltip v-text="lang.clickCopy" />
                        </q-item>
                        <q-item clickable v-ripple @click="copy( 'mahmuod.sami.99@gmail.com' , 'far fa-envelope' , lang.emailAddress )">
                            <q-item-section avatar> <q-icon name="far fa-envelope" /> </q-item-section>
                            <q-item-section> <b>mahmuod.sami.99</b> </q-item-section>
                            <q-item-section avatar> <q-icon color="primary" name="far fa-clipboard" /> </q-item-section>
                            <q-tooltip v-text="lang.clickCopy" />
                        </q-item>
                    </q-expansion-item>
                    <q-expansion-item :label="lang.connect"
                        expand-separator
                        default-opened
                        icon="fas fa-users"
                        expand-icon="fas fa-angle-down"
                    >
                        <q-item clickable v-ripple @click="copy( 'https://www.linkedin.com/in/mahmoud-harby/' , 'fab fa-linkedin' , lang.linkedinLink )">
                            <q-item-section avatar> <q-icon name="fab fa-linkedin" /> </q-item-section>
                            <q-item-section> <b>linkedin mahmoud harby </b> </q-item-section>
                            <q-item-section avatar> <q-icon color="primary" name="far fa-clipboard" /> </q-item-section>
                            <q-tooltip v-text="lang.clickCopy" />
                        </q-item>
                        <q-item clickable v-ripple @click="copy( 'https://github.com/harby-hub' , 'fab fa-github-square' , lang.githubLink )">
                            <q-item-section avatar> <q-icon name="fab fa-github-square" /> </q-item-section>
                            <q-item-section> <b>github harby hub</b> </q-item-section>
                            <q-item-section avatar> <q-icon color="primary" name="far fa-clipboard" /> </q-item-section>
                            <q-tooltip v-text="lang.clickCopy" />
                        </q-item>
                        <q-item clickable v-ripple @click="copy( 'https://www.youtube.com/channel/UCK1JG22BT9BSYSEnwJdmpYw' , 'fab fa-youtube-square' , lang.youtubeLink )">
                            <q-item-section avatar> <q-icon name="fab fa-youtube-square" /> </q-item-section>
                            <q-item-section> <b>Mahmuod harby </b> </q-item-section>
                            <q-item-section avatar> <q-icon color="primary" name="far fa-clipboard" /> </q-item-section>
                            <q-tooltip v-text="lang.clickCopy" />
                        </q-item>
                    </q-expansion-item>
                </q-list>
            </q-scroll-area>
        </q-drawer>
        <q-page-container> <router-view /> </q-page-container>
    </q-layout>
</template>

<style lang = "scss" scoped >
    $clip-path : polygon( 30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30% ) !default;
	.avatar-img{
        margin       : 20px 0 ;
		font-size    : 200px  ;
		border-radius: 0      ;
		border       : 0      ;
		[role="img"]:first-of-type{
			background : var( --q-primary ) ;
			height     : 100%;
			clip-path  : $clip-path;
		}
		[role="img"]:last-of-type{
			width     : 95%        ;
			height    : 95%        ;
			clip-path : $clip-path ;
		}
	}
</style>

<script>

import   EssentialLink                       from 'components/EssentialLink.vue' ;
import   selectLanguage                      from 'components/selectLanguage'    ;
import { Notify                            } from 'quasar'                       ;
import { defineComponent , ref , onMounted } from 'vue'                          ;

export default defineComponent({
    name: 'MainLayout',
    components: {
        EssentialLink,
        selectLanguage
    } ,
    watch : {
        DakeMode ( val ) {
            this.$q.dark.set( val );
            return this.$q.dark.isActive ;
        }
    },
    computed:{
        lang( ){ return this.$q.lang.MainLayout }
    },
    data ( ) { return {
        leftDrawerOpen : true  ,
        DakeMode       : false ,
    } },
    created( ){
        this.DakeMode = true ;
    },
    methods:{
        toggleLeftDrawer( ) {
            this.leftDrawerOpen = !this.leftDrawerOpen ;
        },
        copy( string , icone , type ){
            navigator.clipboard.writeText( string );
            Notify.create({
                html    : true   ,
                icon    : icone  ,
                message : `${type} ${this.lang.copped}. <i class='far fa-clipboard'/>`,
            })
        }
    },
});
</script>
