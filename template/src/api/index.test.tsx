import { groups, GROUPS_TOTAL, groupsWithItems, itemsTotalByGroupIndex } from './index';

describe('api', () => {
    test('should generate sample data', () => {
        // console.log(groups);
        // console.log(itemsTotalByGroupIndex);
        // console.log(groupsWithItems[0]);

        expect(groups.length).toEqual(GROUPS_TOTAL);
        const itemsTotalInGroupsWithItems = groupsWithItems.flatMap(x => x).length
        const itemsTotalAsSumOverGroupsLength = itemsTotalByGroupIndex.reduce((acc, curr) => acc + curr)
        expect(itemsTotalInGroupsWithItems).toEqual(itemsTotalAsSumOverGroupsLength);
    });
});
