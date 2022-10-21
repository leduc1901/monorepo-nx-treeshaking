import { useCallback, useEffect } from 'react';
import {
  RESIZE_OFFSET,
  MIN_WRAPPER_WIDTH,
  MAX_WRAPPER_WIDTH,
} from '../utils/constant';

export const useMouseMove = (setWidth: (newWidth: number) => void) => {
  const onMouseMoveEvent = useCallback((e: MouseEvent) => {
    e.preventDefault();
    const clientX = e.screenX;
    const documentWidth = document.documentElement.clientWidth;
    const newWidth = documentWidth - clientX * 2 - RESIZE_OFFSET;
    if (newWidth > MIN_WRAPPER_WIDTH && newWidth < MAX_WRAPPER_WIDTH) {
      setWidth(newWidth);
    }
  }, []);

  const onMouseMoveRightEvent = useCallback((e: MouseEvent) => {
    e.preventDefault();
    const clientX = e.screenX;
    const documentWidth = document.documentElement.clientWidth;
    const newWidth = Math.abs(documentWidth - clientX * 2 + RESIZE_OFFSET);
    if (newWidth > MIN_WRAPPER_WIDTH && newWidth < MAX_WRAPPER_WIDTH) {
      setWidth(newWidth);
    }
  }, []);

  useEffect(() => {
    const onMouseDownEvent = (e: MouseEvent) => {
      e.stopPropagation();
      document.addEventListener('mousemove', onMouseMoveEvent, true);
    };

    const onMouseDownRightEvent = (e: MouseEvent) => {
      e.stopPropagation();
      document.addEventListener('mousemove', onMouseMoveRightEvent, true);
    };

    const onMouseUpEvent = () => {
      document.removeEventListener('mousemove', onMouseMoveEvent, true);
      document.removeEventListener('mousemove', onMouseMoveRightEvent, true);
    };

    document
      .getElementById('left-handler')
      ?.addEventListener('mousedown', onMouseDownEvent);

    document
      .getElementById('right-handler')
      ?.addEventListener('mousedown', onMouseDownRightEvent);

    document.addEventListener('mouseup', onMouseUpEvent);

    return () => {
      document
        .getElementById('left-handler')
        ?.removeEventListener('mousedown', onMouseDownEvent);

      document
        .getElementById('right-handler')
        ?.removeEventListener('mousedown', onMouseDownEvent);

      document.removeEventListener('mouseup', onMouseUpEvent);
    };
  }, []);

  return {
    onMouseMoveEvent: onMouseMoveEvent,
    onMouseMoveRightEvent: onMouseMoveRightEvent,
  };
};
