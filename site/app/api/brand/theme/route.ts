import { NextResponse } from "next/server";
import { pool } from "../../../lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const result = await pool.query(
      "SELECT theme_payload FROM federation.v_gsrs_brand_api_theme LIMIT 1"
    );

    if (!result.rows.length) {
      return NextResponse.json(
        { error: "GSRS brand theme not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(result.rows[0].theme_payload);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Unable to load GSRS brand theme",
        detail: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
