<template>
<br>
	<div class='text'>
		<h1>not found</h1>
	</div>
	<div class='back'>
		<router-link to='/' text='back to home'>back to home</router-link>
	</div>
	<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</template>

<script lang="ts">
import '../styles/NotFound.css';
import { Vue } from 'vue-class-component';
export default class NotFoundView extends Vue { }
</script>
