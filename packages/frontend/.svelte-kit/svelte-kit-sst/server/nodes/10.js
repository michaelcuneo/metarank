import * as server from '../entries/pages/dashboard/usage/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/usage/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/usage/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.sDCTv_MV.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CYmh6bbh.js","_app/immutable/chunks/CQmCB9A0.js","_app/immutable/chunks/CuF7MgB5.js","_app/immutable/chunks/dARqgW6P.js","_app/immutable/chunks/DMDtxg-S.js","_app/immutable/chunks/BF_EH1yW.js","_app/immutable/chunks/B4_Qyp8P.js","_app/immutable/chunks/BJM_R-I9.js","_app/immutable/chunks/Bs2AxB93.js","_app/immutable/chunks/Cn5F8aIP.js","_app/immutable/chunks/B7OsnYkl.js","_app/immutable/chunks/veUKRnU1.js"];
export const stylesheets = ["_app/immutable/assets/Button.CLM1Xyyt.css","_app/immutable/assets/Card.CA5pE5O8.css","_app/immutable/assets/DashboardPageHeader.zaRsiiin.css","_app/immutable/assets/10.DteAaKJs.css"];
export const fonts = [];
