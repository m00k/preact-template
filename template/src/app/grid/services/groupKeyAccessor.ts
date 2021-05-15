import { GroupKeyAccessor } from "./useGridObserver";

export const keyAccessor: GroupKeyAccessor<number> = e => +((e.target as HTMLElement)?.dataset?.id || 0)