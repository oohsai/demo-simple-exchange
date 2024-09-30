import { z } from "zod";


export const OrderInputSchema = z.object({
    baseAsses: z.string(),
    quoteAsset: z.string(),
    price: z.number(),
    quantity: z.number(),
    side: z.enum(["bid", "sell"]),
    type: z.enum(["limit", "market"]),
    kind:z.enum(['ioc']).optional(),
})