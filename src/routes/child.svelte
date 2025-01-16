<script lang="ts">
	import { counter } from '$lib/counter.svelte';

	const count = counter.get();
</script>

<h1>Hello from Child: {count.current}</h1>

<button type="button" onclick={() => count.current++}> Increment From Child </button>
