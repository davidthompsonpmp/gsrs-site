import { NextResponse } from "next/server";
import { pool } from "../../../lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const result = await pool.query(
      "SELECT runtime_payload FROM federation.v_gsrs_website_runtime_page LIMIT 1"
    );

    if (!result.rows.length) {
      return NextResponse.json(
        { error: "GSRS website runtime not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(result.rows[0].runtime_payload);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Unable to load GSRS website runtime",
        detail: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
