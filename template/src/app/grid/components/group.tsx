import { ComponentChildren, FunctionComponent, h } from 'preact';
import { forwardRef } from 'preact/compat';
import * as VM from '../../../api/model';
import style from '../styles/index.css';

export interface GroupProps {
    group: VM.Group;
    children: ComponentChildren;
}

const Group: FunctionComponent<GroupProps> = ({
    group,
    children,
}, ref) => {
    const { name, id } = group

    return (
        <section ref={ref} class={style.group} data-id={id}>
            <h3>{name}</h3>
            {children}
        </section>
    );
}

export default forwardRef(Group)
