import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SeoLandingPageProps = typeof __propDef.props;
export type SeoLandingPageEvents = typeof __propDef.events;
export type SeoLandingPageSlots = typeof __propDef.slots;
export default class SeoLandingPage extends SvelteComponentTyped<SeoLandingPageProps, SeoLandingPageEvents, SeoLandingPageSlots> {
}
export {};
