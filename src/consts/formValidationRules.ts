export const eventFormValidation = {
  name: {
    required: 'Event Name cannot be empty',
    minLength: {
      value: 3,
      message: 'Event Name should contain at least 3 symbols',
    },
  },
  date: {
    required: 'Event Date cannot be empty',
    valueAsDate: true,
  },
  theme: {
    required: 'At least one theme should be selected',
  },
  lang: {
    validate: (value: string) => {
      if (value === 'Language') return 'Language should be selected';
    },
  },
  type: {
    required: 'Type should be selected',
  },
  place: {
    required: 'Event Place cannot be empty',
    minLength: {
      value: 3,
      message: 'Event Place should contain at least 3 symbols',
    },
  },
  poster: {
    required: 'Event Poster should be uploaded',
    validate: {
      acceptedFormats: (files: FileList) =>
        ['image/jpeg', 'image/png', 'image/gif'].includes(files[0]?.type) ||
        'Event Poster should be of PNG, JPEG or GIF format',
    },
  },
};
