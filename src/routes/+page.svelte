<script lang="ts">
	import { counter } from '$lib/counter.svelte';
	import Child from './child.svelte';
	import Child2 from './child2.svelte';

	const count = counter.init(0);
</script>

<h1>Hello from Parent: {count.current}</h1>
<button type="button" onclick={() => count.current++}> Increment From Parent </button>

<Child />

<Child2 />
