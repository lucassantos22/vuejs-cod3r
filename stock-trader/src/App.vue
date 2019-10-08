<template>
	<div>
		<Header/>
		<router-view></router-view>
		<Footer/>
	</div>
</template>

<script>

import Header from './components/Header';
import Footer from './components/utils/Footer';

export default {
	components:{
		Header,
		Footer
	},
	created () {
		this.$vuetify.theme.dark = true
	}
}
</script>

<style>

</style>

