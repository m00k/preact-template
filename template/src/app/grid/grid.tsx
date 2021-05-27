import { Fragment, h, VNode } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import * as VM from '../../api/model';
import Grid from './components';
import { keyAccessor, useGridObserver } from './services';

const GridBlock = ({
  initialIndex,
  groups,
  groupsWithItems,
}: {
  initialIndex: number;
  groups: VM.Group[];
  groupsWithItems: Array<Array<VM.Item>>;
}): VNode => {
    const containerRef = useRef<HTMLElement>()
    const [activeIndex, groupRefCallback] = useGridObserver<number>(initialIndex, keyAccessor, containerRef)
    useEffect(() => { window.location.hash = `Group_${activeIndex}` }, [activeIndex])

    return (
        <Fragment>
            <Grid.Container ref={containerRef}>
                {groups.map(group => (
                    <Grid.Group
                        key={group.id}
                        ref={groupRefCallback}
                        {...{
                            group,
                            containerRef,
                        }}>
                        <Grid.ItemList>
                            {groupsWithItems[group.id].map(item => (
                                <Grid.ItemDetail key={item.id} {...{ item }} />)
                            )}
                        </Grid.ItemList>
                    </Grid.Group>
                ))}
            </Grid.Container>
        </Fragment>
    );
};

export default GridBlock;
