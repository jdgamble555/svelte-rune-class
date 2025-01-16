<script lang="ts">
	import { counter } from '$lib/counter.svelte';

	const count = counter.get();

	let value = $state(8);

    counter.update(() => value);
</script>

<h1>Hello from Child2: {value}</h1>


<button type="button" onclick={() => value++}> Update From Another State</button>