import { FunctionComponent, h } from 'preact';
import { groups, groupsWithItems } from '../../../api';

interface WithDataProps {
  groups: typeof groups;
  groupsWithItems: typeof groupsWithItems;
}

function withData<T extends WithDataProps = WithDataProps>(
  WrappedComponent: FunctionComponent<T>
): FunctionComponent<Omit<T, keyof WithDataProps>> {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || "Component";
  const ComponentWithData: FunctionComponent<Omit<T, keyof WithDataProps>> = (props: Omit<T, keyof WithDataProps>) => {
      const dataProps = { groups, groupsWithItems }
      return <WrappedComponent {...dataProps} {...(props as T)} />;
  };
  ComponentWithData.displayName = `withData(${displayName})`;
  return ComponentWithData;
}

export default withData

// TODO
// inject static values to a component so that they're always provided
// export function inject<TProps, TInjectedKeys extends keyof TProps>(
//     Component: ComponentConstructor<TProps>,
//     injector: Pick<TProps, TInjectedKeys>
// ) {
//     return function Injected(props: Omit<TProps, TInjectedKeys>) {
//         return <Component {...(props as TProps)} {...injector} />;
//     };
// }
