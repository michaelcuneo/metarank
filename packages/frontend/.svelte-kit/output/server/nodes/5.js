import * as server from '../entries/pages/dashboard/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.DyffEnqj.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BqWGpqco.js","_app/immutable/chunks/XWLQnX6V.js","_app/immutable/chunks/NoYQaQhg.js","_app/immutable/chunks/m_hUu798.js","_app/immutable/chunks/R0_DnTEU.js","_app/immutable/chunks/D4AjjwMh.js","_app/immutable/chunks/B2Twr0hD.js","_app/immutable/chunks/CltVdOzP.js","_app/immutable/chunks/Bl4hTET8.js","_app/immutable/chunks/CRys3E7r.js"];
export const stylesheets = ["_app/immutable/assets/Button.CLM1Xyyt.css","_app/immutable/assets/Card.CA5pE5O8.css","_app/immutable/assets/DashboardPageHeader.zaRsiiin.css","_app/immutable/assets/5.DN-FAwhv.css"];
export const fonts = [];
