import * as server from '../entries/pages/dashboard/_layout.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/+layout.server.ts";
export const imports = ["_app/immutable/nodes/2.CzdJ-B8n.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CYmh6bbh.js","_app/immutable/chunks/DMDtxg-S.js","_app/immutable/chunks/BF_EH1yW.js","_app/immutable/chunks/B4_Qyp8P.js","_app/immutable/chunks/veUKRnU1.js","_app/immutable/chunks/CQmCB9A0.js","_app/immutable/chunks/Bs2AxB93.js","_app/immutable/chunks/CuF7MgB5.js","_app/immutable/chunks/U-R8N3TZ.js","_app/immutable/chunks/DiDqhVpH.js","_app/immutable/chunks/BXoqut8g.js"];
export const stylesheets = ["_app/immutable/assets/ApiStatus.RpHLte5x.css","_app/immutable/assets/2.Cc5-dxqW.css"];
export const fonts = [];
