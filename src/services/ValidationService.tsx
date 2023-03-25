export function validateName(eventName: React.RefObject<HTMLInputElement>) {
  if (!eventName.current) return 'Invalid format';
  if (eventName.current.value === '') return 'Event Name cannot be empty';
  if (eventName.current.value.length <= 3) return 'Event Name should contain at least 3 symbols';
  return '';
}

export function validateDate(eventDate: React.RefObject<HTMLInputElement>) {
  if (!eventDate.current) return 'Invalid format';
  if (eventDate.current.value === '') return 'Event Date cannot be empty';
  if (Date.parse(eventDate.current.value) < Date.parse(Date.now().toString()))
    return 'Event Date cannot be in the past';
  return '';
}

export function validateTheme(eventTheme: React.RefObject<HTMLInputElement>[]) {
  let error = 'At least one theme should be selected';
  eventTheme.forEach((theme) => {
    if (theme.current?.checked) {
      error = '';
    }
  });
  return error;
}

export function validateLang(eventLang: React.RefObject<HTMLSelectElement>, options: string[]) {
  if (!eventLang.current) return 'Invalid format';
  if (!options.includes(eventLang.current.value)) {
    return 'Language should be selected';
  }
  return '';
}

export function validateType(eventType: React.RefObject<HTMLInputElement>[]) {
  let error = 'Type should be selected';
  eventType.forEach((type) => {
    if (type.current?.checked) {
      error = '';
    }
  });
  return error;
}

export function validatePlace(eventPlace: React.RefObject<HTMLInputElement>) {
  if (!eventPlace.current) return 'Invalid format';
  if (eventPlace.current.value === '') return 'Event Place cannot be empty';
  if (eventPlace.current.value.length <= 3) return 'Event Place should contain at least 3 symbols';
  return '';
}

export function validatePoster(eventPoster: React.RefObject<HTMLInputElement>) {
  if (!eventPoster.current || !eventPoster.current.files) return 'Invalid format';
  if (!eventPoster.current.files[0]) return 'Event Poster should be uploaded';
  if (!eventPoster.current.files[0].type.includes('image')) return 'Image should be uploaded';
  return '';
}
