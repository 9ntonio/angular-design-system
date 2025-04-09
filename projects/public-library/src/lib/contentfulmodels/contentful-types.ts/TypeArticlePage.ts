import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeArticlePageFields {
    title?: EntryFieldTypes.Symbol;
    slug?: EntryFieldTypes.Symbol;
    metaData?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    updatedDate?: EntryFieldTypes.Date;
    abstract?: EntryFieldTypes.Text;
    content?: EntryFieldTypes.RichText;
}

export type TypeArticlePageSkeleton = EntrySkeletonType<TypeArticlePageFields, "articlePage">;
export type TypeArticlePage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeArticlePageSkeleton, Modifiers, Locales>;
export type TypeArticlePageWithoutLinkResolutionResponse = TypeArticlePage<"WITHOUT_LINK_RESOLUTION">;
export type TypeArticlePageWithoutUnresolvableLinksResponse = TypeArticlePage<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeArticlePageWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeArticlePage<"WITH_ALL_LOCALES", Locales>;
export type TypeArticlePageWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeArticlePage<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeArticlePageWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeArticlePage<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
