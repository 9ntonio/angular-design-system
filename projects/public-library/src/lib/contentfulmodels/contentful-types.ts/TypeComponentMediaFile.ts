import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeComponentMediaFileFields {
    internalName?: EntryFieldTypes.Symbol;
    altText?: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
}

export type TypeComponentMediaFileSkeleton = EntrySkeletonType<TypeComponentMediaFileFields, "componentMediaFile">;
export type TypeComponentMediaFile<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentMediaFileSkeleton, Modifiers, Locales>;
export type TypeComponentMediaFileWithoutLinkResolutionResponse = TypeComponentMediaFile<"WITHOUT_LINK_RESOLUTION">;
export type TypeComponentMediaFileWithoutUnresolvableLinksResponse = TypeComponentMediaFile<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeComponentMediaFileWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentMediaFile<"WITH_ALL_LOCALES", Locales>;
export type TypeComponentMediaFileWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentMediaFile<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeComponentMediaFileWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentMediaFile<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
