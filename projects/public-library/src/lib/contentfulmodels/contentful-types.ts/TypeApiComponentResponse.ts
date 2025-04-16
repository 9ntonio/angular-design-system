import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeApiComponentResponseFields {
    internalName?: EntryFieldTypes.Symbol;
    codeExample?: EntryFieldTypes.RichText;
}

export type TypeApiComponentResponseSkeleton = EntrySkeletonType<TypeApiComponentResponseFields, "apiComponentResponse">;
export type TypeApiComponentResponse<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeApiComponentResponseSkeleton, Modifiers, Locales>;
export type TypeApiComponentResponseWithoutLinkResolutionResponse = TypeApiComponentResponse<"WITHOUT_LINK_RESOLUTION">;
export type TypeApiComponentResponseWithoutUnresolvableLinksResponse = TypeApiComponentResponse<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeApiComponentResponseWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeApiComponentResponse<"WITH_ALL_LOCALES", Locales>;
export type TypeApiComponentResponseWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeApiComponentResponse<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeApiComponentResponseWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeApiComponentResponse<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
