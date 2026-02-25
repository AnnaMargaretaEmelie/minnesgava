export const FOCUSABLE_SELECTOR = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

export function getFirstFocusable(root: ParentNode): HTMLElement | null {
    return root.querySelector<HTMLElement>(FOCUSABLE_SELECTOR)
}