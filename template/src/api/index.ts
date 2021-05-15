import * as VM from './model';

type Factory<T> = (_: unknown, index: number) => T;
const rangeFn = <T>(l: number) => 
    (fn: Factory<T>): Array<T> => 
        (new Array(l))
            .fill(0)
            .map(fn);

export const CATEGORIES_TOTAL = 16;
const MULTIPLIER = 3;
const groupFn: Factory<VM.Group> = (_, id) => ({ id, name: `Group_${id}` });
export const categories: Array<VM.Group> = rangeFn<VM.Group>(CATEGORIES_TOTAL)(groupFn);

const categoriesMedian = Math.ceil(CATEGORIES_TOTAL / 2);
export const itemsTotalByGroupIndex: number[] = categories
    .map((_, i) => categoriesMedian - Math.abs((categoriesMedian - i - 1)))
    .map(x => Math.max(MULTIPLIER, x * MULTIPLIER));

const build = (): Array<Array<VM.Item>> => {
    const categoriesWithItems: Array<Array<VM.Item>> = [];
    let itemId = -1
    categories.forEach(cat => {
        const itemsTotal = itemsTotalByGroupIndex[cat.id]
        const groupWithItems = (new Array(itemsTotal)).fill(0).map(() => (itemId++, { id: itemId, name: `Item_${itemId}`}))
        categoriesWithItems.push(groupWithItems)
    })
    return categoriesWithItems
}

export const categoriesWithItems = build()