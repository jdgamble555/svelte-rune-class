<script lang="ts">
	import { counter } from '$lib/counter.svelte';
	import { useCustomCounter } from '$lib/custom-counter.svelte';

	const count = counter.get();

	const customCounter = useCustomCounter.get();
</script>

<h1>Hello from Child: {count.current}</h1>

<button type="button" onclick={() => count.current++}> Increment From Child </button>

<button type="button" onclick={() => customCounter.increment()}> Increment Custom From Child </button>
