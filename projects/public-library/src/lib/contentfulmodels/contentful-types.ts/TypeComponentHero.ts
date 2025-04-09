import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeComponentHeroFields {
    internalName: EntryFieldTypes.Symbol;
    headline: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    callToActions?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
    media?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
}

export type TypeComponentHeroSkeleton = EntrySkeletonType<TypeComponentHeroFields, "componentHero">;
export type TypeComponentHero<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentHeroSkeleton, Modifiers, Locales>;
export type TypeComponentHeroWithoutLinkResolutionResponse = TypeComponentHero<"WITHOUT_LINK_RESOLUTION">;
export type TypeComponentHeroWithoutUnresolvableLinksResponse = TypeComponentHero<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeComponentHeroWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentHero<"WITH_ALL_LOCALES", Locales>;
export type TypeComponentHeroWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentHero<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeComponentHeroWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentHero<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
