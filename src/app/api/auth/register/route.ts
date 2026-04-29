import { handleRegister } from "@/backend/controllers/auth.controller";

export async function POST(req: Request) {
  return handleRegister(req);
}
