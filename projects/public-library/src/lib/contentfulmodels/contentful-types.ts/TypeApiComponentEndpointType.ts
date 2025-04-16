import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeApiComponentEndpointTypeFields {
    internalName?: EntryFieldTypes.Symbol;
    type: EntryFieldTypes.Symbol<"DELETE" | "GET" | "PATCH" | "POST" | "PUT">;
}

export type TypeApiComponentEndpointTypeSkeleton = EntrySkeletonType<TypeApiComponentEndpointTypeFields, "apiComponentEndpointType">;
export type TypeApiComponentEndpointType<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeApiComponentEndpointTypeSkeleton, Modifiers, Locales>;
export type TypeApiComponentEndpointTypeWithoutLinkResolutionResponse = TypeApiComponentEndpointType<"WITHOUT_LINK_RESOLUTION">;
export type TypeApiComponentEndpointTypeWithoutUnresolvableLinksResponse = TypeApiComponentEndpointType<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeApiComponentEndpointTypeWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeApiComponentEndpointType<"WITH_ALL_LOCALES", Locales>;
export type TypeApiComponentEndpointTypeWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeApiComponentEndpointType<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeApiComponentEndpointTypeWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeApiComponentEndpointType<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
