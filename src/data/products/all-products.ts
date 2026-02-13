import { ProductV2 } from "../../types/product";
import { hairCareProducts } from "./hair-care";
import { skinCareProducts } from "./skin-care";
import { bodyCareProducts } from "./body-care";
import { lipMakeupProducts } from "./lip-makeup";

// Complete Product Database
// This is the SINGLE SOURCE OF TRUTH for product data
// Aggregated from individual category files

export const ALL_PRODUCTS: ProductV2[] = [
    ...hairCareProducts,
    ...skinCareProducts,
    ...bodyCareProducts,
    ...lipMakeupProducts
];

// Re-export specific categories if needed explicitly, though usually accessed via ALL_PRODUCTS filtering
export {
    hairCareProducts,
    skinCareProducts,
    bodyCareProducts,
    lipMakeupProducts
};
