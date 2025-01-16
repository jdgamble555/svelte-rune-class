import { getContext, hasContext, setContext } from "svelte";


type RCurrent<TValue> = { current: TValue };

export class Rune<TRune> {

    readonly #key: symbol;

    constructor(name: string) {
        this.#key = Symbol(name);
    }

    get key(): symbol {
        return this.#key;
    }

    exists(): boolean {
        return hasContext(this.#key);
    }

    get(): RCurrent<TRune> {
        return getContext(this.#key);
    }

    getOr<TFallback>(fallback: TFallback): RCurrent<TRune> | TFallback {
        return this.exists()
            ? this.get()
            : fallback;
    }

    set(value: TRune): RCurrent<TRune> {
        const _value = $state({ current: value });
        return setContext(this.#key, _value);
    }

    update(getter: () => TRune): void {
        const context = this.get();
        $effect(() => {
            context.current = getter();
        });
    }
}