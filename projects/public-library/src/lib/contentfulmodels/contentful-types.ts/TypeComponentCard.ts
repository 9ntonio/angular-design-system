import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeComponentCardFields {
    internalName?: EntryFieldTypes.Symbol;
    headline?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    callToActions?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
    media?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
}

export type TypeComponentCardSkeleton = EntrySkeletonType<TypeComponentCardFields, "componentCard">;
export type TypeComponentCard<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentCardSkeleton, Modifiers, Locales>;
export type TypeComponentCardWithoutLinkResolutionResponse = TypeComponentCard<"WITHOUT_LINK_RESOLUTION">;
export type TypeComponentCardWithoutUnresolvableLinksResponse = TypeComponentCard<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeComponentCardWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentCard<"WITH_ALL_LOCALES", Locales>;
export type TypeComponentCardWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentCard<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeComponentCardWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentCard<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
