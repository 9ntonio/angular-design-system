import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeApiComponentUrlFields {
    internalName?: EntryFieldTypes.Symbol;
    url: EntryFieldTypes.Symbol;
}

export type TypeApiComponentUrlSkeleton = EntrySkeletonType<TypeApiComponentUrlFields, "apiComponentUrl">;
export type TypeApiComponentUrl<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeApiComponentUrlSkeleton, Modifiers, Locales>;
export type TypeApiComponentUrlWithoutLinkResolutionResponse = TypeApiComponentUrl<"WITHOUT_LINK_RESOLUTION">;
export type TypeApiComponentUrlWithoutUnresolvableLinksResponse = TypeApiComponentUrl<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeApiComponentUrlWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeApiComponentUrl<"WITH_ALL_LOCALES", Locales>;
export type TypeApiComponentUrlWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeApiComponentUrl<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeApiComponentUrlWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeApiComponentUrl<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
