export function validatePoster(files: FileList) {
  return (
    ['image/jpeg', 'image/png', 'image/gif'].includes(files[0]?.type) || 'Only PNG, JPEG e GIF'
  );
}
