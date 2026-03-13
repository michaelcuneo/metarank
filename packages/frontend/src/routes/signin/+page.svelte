<script lang="ts">
	import { SignIn } from 'svelte-clerk';
</script>

<svelte:head>
	<title>Sign in — MetaRank</title>
	<meta name="description" content="Sign in to your MetaRank account." />
</svelte:head>

<div class="auth-page">
	<div class="auth-card">
		<SignIn	/>
	</div>
</div>

<style>
.auth-page {
	display: flex;
	justify-content: center;
	align-items: flex-start;
	padding: 4rem 1rem 5rem;
}

.auth-card {
	width: 100%;
	max-width: 420px;
}
</style>