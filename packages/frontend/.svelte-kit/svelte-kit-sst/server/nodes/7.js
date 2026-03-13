import * as server from '../entries/pages/dashboard/billing/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/billing/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/billing/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.BkCVyt63.js","_app/immutable/chunks/Bu7Q5KXf.js","_app/immutable/chunks/C0TdTIal.js","_app/immutable/chunks/Dl6eFod9.js","_app/immutable/chunks/Dx_vHjA-.js","_app/immutable/chunks/8ILFD9ba.js","_app/immutable/chunks/Ct8GaGot.js","_app/immutable/chunks/CwJQ-ncM.js","_app/immutable/chunks/BF37hQJR.js","_app/immutable/chunks/DxHdWfdc.js","_app/immutable/chunks/CZg0sGa3.js","_app/immutable/chunks/CKqLENDv.js","_app/immutable/chunks/B6Lh7vbX.js","_app/immutable/chunks/C5kQKzcA.js"];
export const stylesheets = ["_app/immutable/assets/Button.CLM1Xyyt.css","_app/immutable/assets/Card.CA5pE5O8.css","_app/immutable/assets/DashboardPageHeader.zaRsiiin.css","_app/immutable/assets/7.DXON0-LY.css"];
export const fonts = [];
