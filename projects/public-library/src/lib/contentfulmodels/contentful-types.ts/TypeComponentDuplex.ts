import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeComponentDuplexFields {
    internalName?: EntryFieldTypes.Symbol;
    headline?: EntryFieldTypes.Symbol;
    callToActions?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
    media?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
    mediaSide?: EntryFieldTypes.Boolean;
}

export type TypeComponentDuplexSkeleton = EntrySkeletonType<TypeComponentDuplexFields, "componentDuplex">;
export type TypeComponentDuplex<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentDuplexSkeleton, Modifiers, Locales>;
export type TypeComponentDuplexWithoutLinkResolutionResponse = TypeComponentDuplex<"WITHOUT_LINK_RESOLUTION">;
export type TypeComponentDuplexWithoutUnresolvableLinksResponse = TypeComponentDuplex<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeComponentDuplexWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentDuplex<"WITH_ALL_LOCALES", Locales>;
export type TypeComponentDuplexWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentDuplex<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeComponentDuplexWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentDuplex<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
