import { json } from "@sveltejs/kit";
import { Resource } from "sst";
async function GET({ fetch }) {
  try {
    const res = await fetch(`${Resource.MetarankAPI.url}/health`, {
      method: "GET",
      signal: AbortSignal.timeout(5e3)
    });
    if (!res.ok) {
      return json(
        {
          ok: false,
          status: "degraded"
        },
        { status: 200 }
      );
    }
    const body = await res.json().catch(() => null);
    return json({
      ok: true,
      status: "operational",
      timestamp: body?.timestamp ?? null
    });
  } catch {
    return json({
      ok: false,
      status: "offline"
    });
  }
}
export {
  GET
};
