import { renderHook, act } from '@testing-library/react-hooks';
import { useBusyIndicator } from './use-busy-indicator';

it('should increment counter', () => {
  const { result } = renderHook(() => useBusyIndicator());
  act(() => {
    result.current.imBusy();
  });
  expect(result.current.busy).toBe(true);
  act(() => {
    result.current.imNotBusy();
  });
  expect(result.current.busy).toBe(false);
});
