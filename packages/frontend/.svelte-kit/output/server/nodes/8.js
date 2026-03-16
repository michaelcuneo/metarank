import * as server from '../entries/pages/dashboard/billing/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/billing/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/billing/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.D-7n-h1A.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DD2wzcMi.js","_app/immutable/chunks/CYmh6bbh.js","_app/immutable/chunks/38A2Dk38.js","_app/immutable/chunks/DiDqhVpH.js","_app/immutable/chunks/DMDtxg-S.js","_app/immutable/chunks/BF_EH1yW.js","_app/immutable/chunks/B4_Qyp8P.js","_app/immutable/chunks/fdJ-TfDM.js","_app/immutable/chunks/Cn5F8aIP.js","_app/immutable/chunks/veUKRnU1.js","_app/immutable/chunks/CuF7MgB5.js","_app/immutable/chunks/B_nFxAC8.js","_app/immutable/chunks/CrpouBmJ.js","_app/immutable/chunks/BH_ME3uD.js","_app/immutable/chunks/B7OsnYkl.js"];
export const stylesheets = ["_app/immutable/assets/DashboardPageHeader.zaRsiiin.css","_app/immutable/assets/8.Ci-_jptl.css"];
export const fonts = [];
