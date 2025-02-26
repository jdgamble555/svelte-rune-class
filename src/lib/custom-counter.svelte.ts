import { getContext, hasContext, setContext } from "svelte";


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


// add SSR protection with Context
export class _Counter {

    readonly #key: symbol;

    constructor(name: string) {
        this.#key = Symbol(name);
    }

    exists(): boolean {
        return hasContext(this.#key);
    }

    get(): MyCounter {
        return getContext(this.#key);
    }

    init(initialNumber: number): MyCounter {
        // initialize any class here
        const _value = new MyCounter(initialNumber);
        return setContext(this.#key, _value);
    }
}

export const useCustomCounter = new _Counter('counter');