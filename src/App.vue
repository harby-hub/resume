<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue'    ;
import { createMetaMixin } from 'quasar' ;

export default defineComponent({
    name: 'App',
    mixins: [
        createMetaMixin({
            title: 'Mahmoud Sami',
            titleTemplate: title => `${title} - Resume`,
            meta: {
                keywords    : { name         : 'keywords'     , content: 'arch fedora centos docker jenkins php python ruby go javascript dart kotlin laravel gin django rails adonis mysql sqlite neo4j firebase mongodb postgressql git composer npm yarn pip pacman dnf yum gem ffmpeg' },
                equiv       : { 'http-equiv' : 'Content-Type' , content: 'text/html; charset=UTF-8'        },
                description : { name         : 'description'  , content: 'Mahmoud Sami Resume'             },
                ogTitle     : { property     : 'og:title'     , content: `Mahmoud Sami Resume`             },
                ogImage     : { property     : 'og:image'     , content: 'https://harbii.github.io/resume/' + require( `src/statics/icon.png` ) },
            },
        })
    ],
});
</script>
