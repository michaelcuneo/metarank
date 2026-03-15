import * as server from '../entries/pages/dashboard/billing/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/billing/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/billing/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.DLpymggY.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CwXMp61K.js","_app/immutable/chunks/BqWGpqco.js","_app/immutable/chunks/AugeZjEq.js","_app/immutable/chunks/0x5NZaKt.js","_app/immutable/chunks/D4AjjwMh.js","_app/immutable/chunks/XWLQnX6V.js","_app/immutable/chunks/Mh1E_Pax.js","_app/immutable/chunks/Bl4hTET8.js","_app/immutable/chunks/DvH68Syj.js","_app/immutable/chunks/bNAuYahI.js","_app/immutable/chunks/DthANRhZ.js","_app/immutable/chunks/CRys3E7r.js"];
export const stylesheets = ["_app/immutable/assets/DashboardPageHeader.zaRsiiin.css","_app/immutable/assets/7.Ci-_jptl.css"];
export const fonts = [];
