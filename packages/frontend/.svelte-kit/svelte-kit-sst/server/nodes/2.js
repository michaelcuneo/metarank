import * as server from '../entries/pages/dashboard/_layout.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/+layout.server.ts";
export const imports = ["_app/immutable/nodes/2.BdclETdV.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/9hBVOzVF.js","_app/immutable/chunks/B4ZM7FXc.js","_app/immutable/chunks/Z2iI7pNx.js","_app/immutable/chunks/LVNYBr06.js","_app/immutable/chunks/BtX-h4aZ.js","_app/immutable/chunks/B9rfN3sF.js","_app/immutable/chunks/BCBSocac.js","_app/immutable/chunks/IdsWf3HG.js"];
export const stylesheets = ["_app/immutable/assets/ApiStatus.RpHLte5x.css","_app/immutable/assets/2.Cc5-dxqW.css"];
export const fonts = [];
