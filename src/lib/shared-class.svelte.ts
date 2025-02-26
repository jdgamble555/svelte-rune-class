import { getContext, hasContext, setContext } from "svelte";

type Constructor<T, Args extends unknown[]> = new (...args: Args) => T;


export class SharedClass<T, Args extends unknown[]> {

    readonly #key: symbol;
    #class: Constructor<T, Args>;

    constructor(name: string, className: Constructor<T, Args>) {
        this.#key = Symbol(name);
        this.#class = className;
    }

    exists(): boolean {
        return hasContext(this.#key);
    }

    get(): T {
        return getContext(this.#key);
    }

    init(...args: Args): T {
        const _value = new this.#class(...args);
        return setContext(this.#key, _value);
    }
}


