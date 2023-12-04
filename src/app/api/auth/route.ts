import { LoginModel } from "@src/models";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const isValidData = await LoginModel.safeParseAsync(reqBody);
    if (!isValidData.success) {
      return NextResponse.json({
        status: 400,
        error: isValidData.error.issues[0].message,
      });
    }
  } catch (error: any) {
    console.error(error);
    return new Response(error.message, { status: 500 });
  }
}
