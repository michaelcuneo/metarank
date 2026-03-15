import * as server from '../entries/pages/dashboard/api-keys/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/api-keys/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/api-keys/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.RADtKQfj.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BqWGpqco.js","_app/immutable/chunks/XWLQnX6V.js","_app/immutable/chunks/NoYQaQhg.js","_app/immutable/chunks/m_hUu798.js","_app/immutable/chunks/Cp2t_Tt-.js","_app/immutable/chunks/DthANRhZ.js","_app/immutable/chunks/0x5NZaKt.js","_app/immutable/chunks/R0_DnTEU.js","_app/immutable/chunks/D4AjjwMh.js","_app/immutable/chunks/B2Twr0hD.js","_app/immutable/chunks/CltVdOzP.js","_app/immutable/chunks/Bl4hTET8.js","_app/immutable/chunks/CRys3E7r.js"];
export const stylesheets = ["_app/immutable/assets/Button.CLM1Xyyt.css","_app/immutable/assets/Card.CA5pE5O8.css","_app/immutable/assets/DashboardPageHeader.zaRsiiin.css","_app/immutable/assets/6.Dnv1GkCk.css"];
export const fonts = [];
