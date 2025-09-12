import { prettifyError } from "zod/v4";
export function validateBodySchema(schema) {
    return async function (req, res, next) {
        const parsed = schema.safeParse(req.body);
        if (parsed.success) {
            next();
        } else {
            res.status(400).json({
                success: false,
                message: "Validation failed",
                error: prettifyError(parsed.error),
            });
        }
    };
}
