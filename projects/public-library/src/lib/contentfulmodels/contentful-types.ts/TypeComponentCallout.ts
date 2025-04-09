import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeComponentCalloutFields {
    internalName?: EntryFieldTypes.Symbol;
    type?: EntryFieldTypes.Symbol;
    context?: EntryFieldTypes.RichText;
}

export type TypeComponentCalloutSkeleton = EntrySkeletonType<TypeComponentCalloutFields, "componentCallout">;
export type TypeComponentCallout<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentCalloutSkeleton, Modifiers, Locales>;
export type TypeComponentCalloutWithoutLinkResolutionResponse = TypeComponentCallout<"WITHOUT_LINK_RESOLUTION">;
export type TypeComponentCalloutWithoutUnresolvableLinksResponse = TypeComponentCallout<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeComponentCalloutWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentCallout<"WITH_ALL_LOCALES", Locales>;
export type TypeComponentCalloutWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentCallout<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeComponentCalloutWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentCallout<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
