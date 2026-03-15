import * as server from '../entries/pages/dashboard/_layout.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/+layout.server.ts";
export const imports = ["_app/immutable/nodes/2.CNYmrbYR.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BqWGpqco.js","_app/immutable/chunks/D4AjjwMh.js","_app/immutable/chunks/XWLQnX6V.js","_app/immutable/chunks/NoYQaQhg.js","_app/immutable/chunks/R0_DnTEU.js","_app/immutable/chunks/DthANRhZ.js","_app/immutable/chunks/0x5NZaKt.js","_app/immutable/chunks/C8eSMhJG.js"];
export const stylesheets = ["_app/immutable/assets/ApiStatus.RpHLte5x.css","_app/immutable/assets/2.Cc5-dxqW.css"];
export const fonts = [];
