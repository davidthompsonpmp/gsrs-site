import PageRuntime from "./components/runtime/PageRuntime";
import { pool } from "./lib/db";

export const dynamic = "force-dynamic";

async function getHomeRuntime() {
  try {
    const result = await pool.query(
      "SELECT runtime_payload FROM federation.v_gsrs_website_runtime_page LIMIT 1"
    );

    return result.rows[0]?.runtime_payload;
  } catch {
    return null;
  }
}

export default async function Home() {
  const runtime = await getHomeRuntime();

  return (
    <main className="min-h-screen bg-[#050505] text-stone-100">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
      {runtime ? <PageRuntime runtime={runtime} /> : null}
    </main>
  );
}
