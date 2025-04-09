import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeMetaDataFields {
    title?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Symbol;
    noindex?: EntryFieldTypes.Boolean;
    nofollow?: EntryFieldTypes.Boolean;
}

export type TypeMetaDataSkeleton = EntrySkeletonType<TypeMetaDataFields, "metaData">;
export type TypeMetaData<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeMetaDataSkeleton, Modifiers, Locales>;
export type TypeMetaDataWithoutLinkResolutionResponse = TypeMetaData<"WITHOUT_LINK_RESOLUTION">;
export type TypeMetaDataWithoutUnresolvableLinksResponse = TypeMetaData<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeMetaDataWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeMetaData<"WITH_ALL_LOCALES", Locales>;
export type TypeMetaDataWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeMetaData<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeMetaDataWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeMetaData<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
