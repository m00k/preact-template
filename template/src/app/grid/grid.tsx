import { Fragment, h, VNode } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import { categories, categoriesWithItems } from '../../api';
import Grid from './components';
import { keyAccessor, useGridObserver } from './services';

const GridBlock = ({
    initialIndex
}: {
    initialIndex: number;
}): VNode => {
    const containerRef = useRef<HTMLElement>()
    const [activeIndex, groupRefCallback] = useGridObserver<number>(initialIndex, keyAccessor, containerRef)
    useEffect(() => { window.location.hash = `Group_${activeIndex}` }, [activeIndex])

    return (
        <Fragment>
            <Grid.Container ref={containerRef}>
                {categories.map(group => (
                    <Grid.Group
                        key={group.id}
                        ref={groupRefCallback}
                        {...{
                            group,
                            containerRef,
                        }}>
                        <Grid.ItemList>
                            {categoriesWithItems[group.id].map(item => (
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
