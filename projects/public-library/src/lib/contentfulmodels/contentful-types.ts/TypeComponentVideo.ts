import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeComponentVideoFields {
    internalName?: EntryFieldTypes.Symbol;
    videoProvider?: EntryFieldTypes.Symbol;
    videoId?: EntryFieldTypes.Symbol;
}

export type TypeComponentVideoSkeleton = EntrySkeletonType<TypeComponentVideoFields, "componentVideo">;
export type TypeComponentVideo<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentVideoSkeleton, Modifiers, Locales>;
export type TypeComponentVideoWithoutLinkResolutionResponse = TypeComponentVideo<"WITHOUT_LINK_RESOLUTION">;
export type TypeComponentVideoWithoutUnresolvableLinksResponse = TypeComponentVideo<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeComponentVideoWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentVideo<"WITH_ALL_LOCALES", Locales>;
export type TypeComponentVideoWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentVideo<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeComponentVideoWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentVideo<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
