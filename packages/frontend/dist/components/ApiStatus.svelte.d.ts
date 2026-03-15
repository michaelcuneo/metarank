import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ApiStatusProps = typeof __propDef.props;
export type ApiStatusEvents = typeof __propDef.events;
export type ApiStatusSlots = typeof __propDef.slots;
export default class ApiStatus extends SvelteComponentTyped<ApiStatusProps, ApiStatusEvents, ApiStatusSlots> {
}
export {};
