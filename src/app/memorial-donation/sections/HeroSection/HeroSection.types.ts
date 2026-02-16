import type { COPY_QUERYResult } from "../../../../../sanity/types"

export type HeroSectionCopy = NonNullable<NonNullable<COPY_QUERYResult>['heroIntro']>

export type HeroSectionProps = {
    copy: HeroSectionCopy;
};
