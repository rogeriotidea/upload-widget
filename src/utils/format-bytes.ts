
export function formatBytes(bytes: number): string {
  if (bytes < 0) return '0 B';

  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let index = 0;

    while (bytes >= 1024) {
        bytes /= 1024;
        index++;
    }

    return `${bytes.toFixed(2)} ${units[index]}`;
}   