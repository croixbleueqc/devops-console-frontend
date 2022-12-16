import { renderHook, act } from '@testing-library/react-hooks';
import { useBackendClient } from './use-backend-client';

it('should increment counter', () => {
  const { result } = renderHook(() => useBackendClient())
  act(() => {
    result.current.increment()
  })
  expect(result.current.count).toBe(1)
})
