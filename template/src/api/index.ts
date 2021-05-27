import * as VM from './model';

type Factory<T> = (_: unknown, index: number) => T;
const rangeFn = <T>(l: number) =>
    (fn: Factory<T>): Array<T> =>
        (new Array(l))
            .fill(0)
            .map(fn);

export const GROUPS_TOTAL = 16;
const MULTIPLIER = 3;
const groupFn: Factory<VM.Group> = (_, id) => ({ id, name: `Group_${id}` });
export const groups: Array<VM.Group> = rangeFn<VM.Group>(GROUPS_TOTAL)(groupFn);

const groupsMedian = Math.ceil(GROUPS_TOTAL / 2);
export const itemsTotalByGroupIndex: number[] = groups
    .map((_, i) => groupsMedian - Math.abs((groupsMedian - i - 1)))
    .map(x => Math.max(MULTIPLIER, x * MULTIPLIER));

const build = (): Array<Array<VM.Item>> => {
    const groupsWithItems: Array<Array<VM.Item>> = [];
    let itemId = -1
    groups.forEach(cat => {
        const itemsTotal = itemsTotalByGroupIndex[cat.id]
        const groupWithItems = (new Array(itemsTotal)).fill(0).map(() => (itemId++, { id: itemId, name: `Item_${itemId}`}))
        groupsWithItems.push(groupWithItems)
    })
    return groupsWithItems
}

export const groupsWithItems = build()
