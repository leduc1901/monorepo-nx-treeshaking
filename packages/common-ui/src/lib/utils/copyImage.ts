// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { toBlob } from 'dom-to-image';
import { toast } from 'react-toastify';
export const copyImage = (element: HTMLElement | null): string => {
  if (!element) {
    return 'Element not found';
  }

  toBlob(element).then(function (blob: any) {
    if (blob) {
      navigator.clipboard.write([
        new ClipboardItem(
          Object.defineProperty({}, blob.type, {
            value: blob,
            enumerable: true,
          })
        ),
      ]);
      toast('Copied to clipboard !');
    }
  });

  return 'Success';
};
