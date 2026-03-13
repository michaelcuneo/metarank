import * as server from '../entries/pages/dashboard/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.BkChEDP5.js","_app/immutable/chunks/Bu7Q5KXf.js","_app/immutable/chunks/C0TdTIal.js","_app/immutable/chunks/Dl6eFod9.js","_app/immutable/chunks/B6Lh7vbX.js","_app/immutable/chunks/jqP8NPs6.js","_app/immutable/chunks/B-kqyK0F.js","_app/immutable/chunks/BF37hQJR.js","_app/immutable/chunks/DxHdWfdc.js","_app/immutable/chunks/BO3ry4d0.js","_app/immutable/chunks/Dx_vHjA-.js","_app/immutable/chunks/8ILFD9ba.js","_app/immutable/chunks/Ct8GaGot.js","_app/immutable/chunks/CwJQ-ncM.js","_app/immutable/chunks/CZg0sGa3.js","_app/immutable/chunks/CKqLENDv.js","_app/immutable/chunks/C5kQKzcA.js"];
export const stylesheets = ["_app/immutable/assets/Button.CLM1Xyyt.css","_app/immutable/assets/Card.CA5pE5O8.css","_app/immutable/assets/DashboardPageHeader.zaRsiiin.css","_app/immutable/assets/5.DVjkbf3-.css"];
export const fonts = [];
