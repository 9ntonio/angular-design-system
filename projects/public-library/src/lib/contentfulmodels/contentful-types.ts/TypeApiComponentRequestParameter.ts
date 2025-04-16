import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeApiComponentRequestParameterFields {
    internalName?: EntryFieldTypes.Symbol;
    parameterName?: EntryFieldTypes.Symbol;
    annotation?: EntryFieldTypes.Text;
}

export type TypeApiComponentRequestParameterSkeleton = EntrySkeletonType<TypeApiComponentRequestParameterFields, "apiComponentRequestParameter">;
export type TypeApiComponentRequestParameter<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeApiComponentRequestParameterSkeleton, Modifiers, Locales>;
export type TypeApiComponentRequestParameterWithoutLinkResolutionResponse = TypeApiComponentRequestParameter<"WITHOUT_LINK_RESOLUTION">;
export type TypeApiComponentRequestParameterWithoutUnresolvableLinksResponse = TypeApiComponentRequestParameter<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeApiComponentRequestParameterWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeApiComponentRequestParameter<"WITH_ALL_LOCALES", Locales>;
export type TypeApiComponentRequestParameterWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeApiComponentRequestParameter<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeApiComponentRequestParameterWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeApiComponentRequestParameter<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
