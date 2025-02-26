import { SharedClass } from "./shared-class.svelte";


class MyCounter {

    current = $state(0);

    constructor(value: number) {
        this.current = value;
    }

    increment() {
        this.current += 1;
    }

    decrement() {
        this.current -= 1;
    }
}


export const useCustomCounter = new SharedClass('counter', MyCounter);