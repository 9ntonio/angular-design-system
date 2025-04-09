import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeApiPageFields {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    metaData?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
    updatedDate?: EntryFieldTypes.Date;
    abstract?: EntryFieldTypes.Text;
    content?: EntryFieldTypes.RichText;
}

export type TypeApiPageSkeleton = EntrySkeletonType<TypeApiPageFields, "apiPage">;
export type TypeApiPage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeApiPageSkeleton, Modifiers, Locales>;
export type TypeApiPageWithoutLinkResolutionResponse = TypeApiPage<"WITHOUT_LINK_RESOLUTION">;
export type TypeApiPageWithoutUnresolvableLinksResponse = TypeApiPage<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeApiPageWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeApiPage<"WITH_ALL_LOCALES", Locales>;
export type TypeApiPageWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeApiPage<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeApiPageWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeApiPage<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
