import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeComponentGridFields {
    internalName?: EntryFieldTypes.Symbol;
    headline?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    items?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    numberOfColumns?: EntryFieldTypes.Integer;
}

export type TypeComponentGridSkeleton = EntrySkeletonType<TypeComponentGridFields, "componentGrid">;
export type TypeComponentGrid<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentGridSkeleton, Modifiers, Locales>;
export type TypeComponentGridWithoutLinkResolutionResponse = TypeComponentGrid<"WITHOUT_LINK_RESOLUTION">;
export type TypeComponentGridWithoutUnresolvableLinksResponse = TypeComponentGrid<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeComponentGridWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentGrid<"WITH_ALL_LOCALES", Locales>;
export type TypeComponentGridWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentGrid<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeComponentGridWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentGrid<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
