import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeLinkFields {
    internalName?: EntryFieldTypes.Symbol;
    text?: EntryFieldTypes.Symbol;
    url?: EntryFieldTypes.Symbol;
    internalTarget?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
}

export type TypeLinkSkeleton = EntrySkeletonType<TypeLinkFields, "link">;
export type TypeLink<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeLinkSkeleton, Modifiers, Locales>;
export type TypeLinkWithoutLinkResolutionResponse = TypeLink<"WITHOUT_LINK_RESOLUTION">;
export type TypeLinkWithoutUnresolvableLinksResponse = TypeLink<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeLinkWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeLink<"WITH_ALL_LOCALES", Locales>;
export type TypeLinkWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeLink<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeLinkWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeLink<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
