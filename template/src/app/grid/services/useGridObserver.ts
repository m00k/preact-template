import { RefCallback, RefObject } from 'preact';
import { useCallback, useEffect, useMemo, useRef, useState } from 'preact/hooks';

const THRESHOLD = [0, 0.2, 0.4, 0.6, 0.8, 1]
export type GroupKeyAccessor<T> = (entry: IntersectionObserverEntry) => T

const calcKeyWithMaxIntersectionRatio = <T>(intersectionEntries: Map<T, IntersectionObserverEntry>): T => {
    let resultValue: IntersectionObserverEntry | undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let resultKey = undefined as any as T
    intersectionEntries.forEach((entry, key) => {
        if (!resultValue) {
            resultValue = resultValue || entry
            resultKey = resultKey || key
        }
        if (entry.intersectionRatio === resultValue.intersectionRatio) {
            // highlight first item with ratio 1 in case there's multiple
            if (key < resultKey) {
                resultValue = entry
                resultKey = key
            }
        } else if (entry.intersectionRatio > resultValue.intersectionRatio) {
            resultValue = entry
            resultKey = key
        }
    })
    return resultKey as T;
}

export const useGridObserver = <T>(
    initialKey: T,
    keyAccessor: GroupKeyAccessor<T>,
    containerRef?: RefObject<HTMLElement>,
): readonly [
    T,
    RefCallback<HTMLElement>,
] => {
    const [activeKey, setActiveKey] = useState<T>(initialKey)
    const bodyIntersectionsRef = useRef<Map<T, IntersectionObserverEntry>>(new Map())

    const handleBodyIntersection: IntersectionObserverCallback = useCallback((entries: IntersectionObserverEntry[]) => {
        entries.forEach(e => bodyIntersectionsRef.current.set(keyAccessor(e), e))
        const nextActiveKey = calcKeyWithMaxIntersectionRatio(bodyIntersectionsRef.current)
        setActiveKey(nextActiveKey)
    }, [keyAccessor])

    const observer = useMemo(() => {
        const observerOptions = {
            threshold: THRESHOLD,
            root: containerRef?.current
        }
        return new IntersectionObserver(handleBodyIntersection, observerOptions)
    }, [containerRef, handleBodyIntersection])
    const bodySectionRefCallback: RefCallback<HTMLElement> = useCallback(r => (r && observer.observe(r)), [observer])

    useEffect(() => {
        setActiveKey(initialKey)
        const activeBodySectionEl = bodyIntersectionsRef.current.get(initialKey)?.target
        activeBodySectionEl?.scrollIntoView()
    }, [initialKey])

    return [activeKey, bodySectionRefCallback] as const
}

export default useGridObserver
