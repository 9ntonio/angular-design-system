import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeComponentImageFields {
    internalName?: EntryFieldTypes.Symbol;
    altText?: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
}

export type TypeComponentImageSkeleton = EntrySkeletonType<TypeComponentImageFields, "componentImage">;
export type TypeComponentImage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentImageSkeleton, Modifiers, Locales>;
export type TypeComponentImageWithoutLinkResolutionResponse = TypeComponentImage<"WITHOUT_LINK_RESOLUTION">;
export type TypeComponentImageWithoutUnresolvableLinksResponse = TypeComponentImage<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeComponentImageWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentImage<"WITH_ALL_LOCALES", Locales>;
export type TypeComponentImageWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentImage<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeComponentImageWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentImage<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
