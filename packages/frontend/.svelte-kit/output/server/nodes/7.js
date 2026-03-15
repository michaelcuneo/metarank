import * as server from '../entries/pages/dashboard/billing/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/billing/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/billing/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.4usFDC10.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/2443tjUT.js","_app/immutable/chunks/9hBVOzVF.js","_app/immutable/chunks/BJv2hIaQ.js","_app/immutable/chunks/BCBSocac.js","_app/immutable/chunks/B4ZM7FXc.js","_app/immutable/chunks/Z2iI7pNx.js","_app/immutable/chunks/LVNYBr06.js","_app/immutable/chunks/DUmB1paV.js","_app/immutable/chunks/DZN_GAO8.js","_app/immutable/chunks/BiY37ZsZ.js","_app/immutable/chunks/CcbDU6N5.js","_app/immutable/chunks/B9rfN3sF.js","_app/immutable/chunks/BHExk8si.js","_app/immutable/chunks/BTqV9S4u.js"];
export const stylesheets = ["_app/immutable/assets/Button.CLM1Xyyt.css","_app/immutable/assets/DashboardPageHeader.zaRsiiin.css","_app/immutable/assets/7.Ci-_jptl.css"];
export const fonts = [];
