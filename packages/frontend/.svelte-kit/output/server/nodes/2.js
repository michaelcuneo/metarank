import * as server from '../entries/pages/dashboard/_layout.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/+layout.server.ts";
export const imports = ["_app/immutable/nodes/2.DBx3isvZ.js","_app/immutable/chunks/Bu7Q5KXf.js","_app/immutable/chunks/C0TdTIal.js","_app/immutable/chunks/Dl6eFod9.js","_app/immutable/chunks/B6Lh7vbX.js","_app/immutable/chunks/C5kQKzcA.js","_app/immutable/chunks/Ct8GaGot.js","_app/immutable/chunks/jqP8NPs6.js","_app/immutable/chunks/BF37hQJR.js","_app/immutable/chunks/DxHdWfdc.js","_app/immutable/chunks/BO3ry4d0.js","_app/immutable/chunks/C-DJC-h7.js","_app/immutable/chunks/BfU4V923.js"];
export const stylesheets = ["_app/immutable/assets/2.BCbQioBJ.css"];
export const fonts = [];
