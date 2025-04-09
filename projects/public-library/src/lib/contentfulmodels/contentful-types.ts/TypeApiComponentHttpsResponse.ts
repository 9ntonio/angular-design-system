import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeApiComponentHttpsResponseFields {
    internalName?: EntryFieldTypes.Symbol;
    responseType: EntryFieldTypes.Symbol<"200" | "201" | "202" | "203" | "400" | "401" | "501">;
    description?: EntryFieldTypes.Text;
    responses?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
}

export type TypeApiComponentHttpsResponseSkeleton = EntrySkeletonType<TypeApiComponentHttpsResponseFields, "apiComponentHttpsResponse">;
export type TypeApiComponentHttpsResponse<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeApiComponentHttpsResponseSkeleton, Modifiers, Locales>;
export type TypeApiComponentHttpsResponseWithoutLinkResolutionResponse = TypeApiComponentHttpsResponse<"WITHOUT_LINK_RESOLUTION">;
export type TypeApiComponentHttpsResponseWithoutUnresolvableLinksResponse = TypeApiComponentHttpsResponse<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeApiComponentHttpsResponseWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeApiComponentHttpsResponse<"WITH_ALL_LOCALES", Locales>;
export type TypeApiComponentHttpsResponseWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeApiComponentHttpsResponse<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeApiComponentHttpsResponseWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeApiComponentHttpsResponse<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
