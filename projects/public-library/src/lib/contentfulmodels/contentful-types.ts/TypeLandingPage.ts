import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeLandingPageFields {
    internalName: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    metaData?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    herotopper?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    content?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
}

export type TypeLandingPageSkeleton = EntrySkeletonType<TypeLandingPageFields, "landingPage">;
export type TypeLandingPage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeLandingPageSkeleton, Modifiers, Locales>;
export type TypeLandingPageWithoutLinkResolutionResponse = TypeLandingPage<"WITHOUT_LINK_RESOLUTION">;
export type TypeLandingPageWithoutUnresolvableLinksResponse = TypeLandingPage<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeLandingPageWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeLandingPage<"WITH_ALL_LOCALES", Locales>;
export type TypeLandingPageWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeLandingPage<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeLandingPageWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeLandingPage<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
