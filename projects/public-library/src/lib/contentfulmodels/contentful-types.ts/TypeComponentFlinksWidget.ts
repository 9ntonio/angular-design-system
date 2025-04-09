import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeComponentFlinksWidgetFields {
    internalName?: EntryFieldTypes.Symbol;
    type?: EntryFieldTypes.Symbol;
}

export type TypeComponentFlinksWidgetSkeleton = EntrySkeletonType<TypeComponentFlinksWidgetFields, "componentFlinksWidget">;
export type TypeComponentFlinksWidget<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentFlinksWidgetSkeleton, Modifiers, Locales>;
export type TypeComponentFlinksWidgetWithoutLinkResolutionResponse = TypeComponentFlinksWidget<"WITHOUT_LINK_RESOLUTION">;
export type TypeComponentFlinksWidgetWithoutUnresolvableLinksResponse = TypeComponentFlinksWidget<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeComponentFlinksWidgetWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentFlinksWidget<"WITH_ALL_LOCALES", Locales>;
export type TypeComponentFlinksWidgetWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentFlinksWidget<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeComponentFlinksWidgetWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentFlinksWidget<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
