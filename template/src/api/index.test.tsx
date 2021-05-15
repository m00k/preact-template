import { categories, CATEGORIES_TOTAL, categoriesWithItems, itemsTotalByGroupIndex } from './index';

describe('api', () => {
    test('should generate sample data', () => {
        // console.log(categories);
        // console.log(itemsTotalByGroupIndex);
        // console.log(categoriesWithItems[0]);

        expect(categories.length).toEqual(CATEGORIES_TOTAL);
        const itemsTotalInCategoriesWithItems = categoriesWithItems.flatMap(x => x).length
        const itemsTotalAsSumOverCategoriesLength = itemsTotalByGroupIndex.reduce((acc, curr) => acc + curr)
        expect(itemsTotalInCategoriesWithItems).toEqual(itemsTotalAsSumOverCategoriesLength);
    });
});
