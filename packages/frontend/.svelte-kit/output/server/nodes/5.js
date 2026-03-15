import * as server from '../entries/pages/dashboard/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.DsQG6y4I.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/9hBVOzVF.js","_app/immutable/chunks/B4ZM7FXc.js","_app/immutable/chunks/LVNYBr06.js","_app/immutable/chunks/BtX-h4aZ.js","_app/immutable/chunks/BCUtegbs.js","_app/immutable/chunks/Z2iI7pNx.js","_app/immutable/chunks/B1PveZMo.js","_app/immutable/chunks/BHExk8si.js","_app/immutable/chunks/DZN_GAO8.js","_app/immutable/chunks/BTqV9S4u.js"];
export const stylesheets = ["_app/immutable/assets/Button.CLM1Xyyt.css","_app/immutable/assets/Card.CA5pE5O8.css","_app/immutable/assets/DashboardPageHeader.zaRsiiin.css","_app/immutable/assets/5.DN-FAwhv.css"];
export const fonts = [];
