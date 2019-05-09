<template>
	<v-app>
		<app-toolbar/>
		<app-content/>
		<app-footer/>
	</v-app>
</template>

<script>

import Toolbar from "./components/Toolbar.vue";
import MainContent from "./components/MainContent.vue";
import Footer from "./components/Footer.vue";

export default {
	components:{
		appToolbar:Toolbar,
		appContent:MainContent,
		appFooter:Footer
	}
}
</script>
