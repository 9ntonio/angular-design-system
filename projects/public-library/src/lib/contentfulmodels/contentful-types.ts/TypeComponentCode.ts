import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeComponentCodeFields {
    internalName?: EntryFieldTypes.Symbol;
    language?: EntryFieldTypes.Symbol;
    code?: EntryFieldTypes.Text;
}

export type TypeComponentCodeSkeleton = EntrySkeletonType<TypeComponentCodeFields, "componentCode">;
export type TypeComponentCode<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentCodeSkeleton, Modifiers, Locales>;
export type TypeComponentCodeWithoutLinkResolutionResponse = TypeComponentCode<"WITHOUT_LINK_RESOLUTION">;
export type TypeComponentCodeWithoutUnresolvableLinksResponse = TypeComponentCode<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeComponentCodeWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentCode<"WITH_ALL_LOCALES", Locales>;
export type TypeComponentCodeWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentCode<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeComponentCodeWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentCode<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
