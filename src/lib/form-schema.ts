import * as z from "zod";

export interface ActionResponse<T = unknown> {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof T]?: string[];
  };
  inputs?: T;
}
export const formSchema = z.object({
  name: z.string({ message: "Kolom ini wajib diisi" }),
  email: z.string({ message: "Kolom ini wajib diisi" }),
  company: z.string({ message: "Kolom ini wajib diisi" }).optional(),
  employees: z.string().min(1, "Silakan pilih salah satu").optional(),
  message: z.string({ message: "Kolom ini wajib diisi" }),
  agree: z.literal(true, { message: "Kolom ini wajib diisi" }),
});
