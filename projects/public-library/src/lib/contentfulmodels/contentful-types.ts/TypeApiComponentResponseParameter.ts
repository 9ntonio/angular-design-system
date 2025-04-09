import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeApiComponentResponseParameterFields {
    internalName?: EntryFieldTypes.Symbol;
    parameterName?: EntryFieldTypes.Symbol;
    annotation?: EntryFieldTypes.Text;
}

export type TypeApiComponentResponseParameterSkeleton = EntrySkeletonType<TypeApiComponentResponseParameterFields, "apiComponentResponseParameter">;
export type TypeApiComponentResponseParameter<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeApiComponentResponseParameterSkeleton, Modifiers, Locales>;
export type TypeApiComponentResponseParameterWithoutLinkResolutionResponse = TypeApiComponentResponseParameter<"WITHOUT_LINK_RESOLUTION">;
export type TypeApiComponentResponseParameterWithoutUnresolvableLinksResponse = TypeApiComponentResponseParameter<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeApiComponentResponseParameterWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeApiComponentResponseParameter<"WITH_ALL_LOCALES", Locales>;
export type TypeApiComponentResponseParameterWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeApiComponentResponseParameter<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeApiComponentResponseParameterWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeApiComponentResponseParameter<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
