import { db } from "@/app/lib/db";
import { hash } from "bcrypt";

export async function GET(req: Request) {
  const getUser = await db.user.findMany();

  return Response.json({ getUser, success: true });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = body;

    //check email if existing
    const existingByUserEmail = await db.user.findUnique({
      where: { email: email },
    });
    if (existingByUserEmail) {
      return Response.json(
        {
          user: null,
          message: "User with this email is already exists",
        },
        { status: 400 }
      );
    }

    const hashPassword = await hash(password, 10);

    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashPassword,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return Response.json(
      { user: rest, message: "user created successfully" },
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ message: "something went wrong" }, { status: 500 });
  }
}
