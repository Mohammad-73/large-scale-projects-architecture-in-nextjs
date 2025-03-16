import { z } from "zod";
import { signInSchema } from "./signin.schema";

export type SignIn = z.infer<typeof signInSchema>;
