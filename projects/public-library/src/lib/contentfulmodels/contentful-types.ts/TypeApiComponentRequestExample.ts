import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeApiComponentRequestExampleFields {
    internalName?: EntryFieldTypes.Symbol;
    codeExample?: EntryFieldTypes.RichText;
}

export type TypeApiComponentRequestExampleSkeleton = EntrySkeletonType<TypeApiComponentRequestExampleFields, "apiComponentRequestExample">;
export type TypeApiComponentRequestExample<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeApiComponentRequestExampleSkeleton, Modifiers, Locales>;
export type TypeApiComponentRequestExampleWithoutLinkResolutionResponse = TypeApiComponentRequestExample<"WITHOUT_LINK_RESOLUTION">;
export type TypeApiComponentRequestExampleWithoutUnresolvableLinksResponse = TypeApiComponentRequestExample<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeApiComponentRequestExampleWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeApiComponentRequestExample<"WITH_ALL_LOCALES", Locales>;
export type TypeApiComponentRequestExampleWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeApiComponentRequestExample<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeApiComponentRequestExampleWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeApiComponentRequestExample<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
