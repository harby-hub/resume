<template>
	<q-select
		borderless
		emit-value
		map-options
		standout
		v-model		  = 'lang'
		:label        = '$q.lang.label.language'
		:options	  = 'langOptions'
		dropdown-icon = "fas fa-angle-down"
	>
		<template v-slot:prepend> <q-icon name='fas fa-language' /> </template>
	</q-select>
</template>

<script>
	import languages from 'src/lang/index.json' ;

	const langOptions = languages.map( lang => ( {
		label : lang.nativeName ,
		value : lang.isoName
	} ) );

	export default {
		name : 'selectLanguage' ,
		data ( ) {
			return {
				lang        : this.$q.lang.isoName ,
				langOptions : langOptions          ,
			}
		},

		watch : {
			lang ( lang ) {
				import( 'src/lang/' + lang ).then( lang => {
					this.$q.lang.set( lang.default );
				} );
			}
		},

	}
</script>