import 'dayjs/locale/de';

const Calendar = {
  formatYear: 'YYYY',
  formatMonth: 'MMM YYYY',
  monthBeforeYear: true,
  today: 'Heute',
  view: {
    month: 'Monat',
    year: 'Jahr',
    week: 'Woche',
    day: 'Tag',
  },
  month: {
    long: {
      January: 'Januar',
      February: 'Februar',
      March: 'März',
      April: 'April',
      May: 'Mai',
      June: 'Juni',
      July: 'Juli',
      August: 'August',
      September: 'September',
      October: 'Oktober',
      November: 'November',
      December: 'Dezember',
    },
    short: {
      January: 'Jan',
      February: 'Feb',
      March: 'Mär',
      April: 'Apr',
      May: 'Mai',
      June: 'Jun',
      July: 'Jul',
      August: 'Aug',
      September: 'Sep',
      October: 'Okt',
      November: 'Nov',
      December: 'Dez',
    },
  },
  week: {
    long: {
      self: 'Woche',
      monday: 'Montag',
      tuesday: 'Dienstag',
      wednesday: 'Mittwoch',
      thursday: 'Donnerstag',
      friday: 'Freitag',
      saturday: 'Samstag',
      sunday: 'Sonntag',
    },
    short: {
      self: 'Woche',
      monday: 'Mo.',
      tuesday: 'Di.',
      wednesday: 'Mi.',
      thursday: 'Do.',
      friday: 'Fr.',
      saturday: 'Sa.',
      sunday: 'So.',
    },
  },
};

export default {
  locale: 'de-DE',
  dayjsLocale: 'de',
  Calendar,
  DatePicker: {
    Calendar,
    placeholder: {
      date: 'Bitte wählen Sie ein Datum',
      week: 'Bitte wählen Sie eine Woche',
      month: 'Bitte wählen Sie einen Monat',
      year: 'Bitte wählen Sie ein Jahr aus',
      quarter: 'Bitte wählen Sie ein Quartal',
    },
    placeholders: {
      date: ['Startdatum', 'Endtermin'],
      week: ['Woche starten', 'Ende der Woche'],
      month: ['Startmonat', 'Ende Monat'],
      year: ['Startjahr', 'Ende Jahr'],
      quarter: ['Anfangsquartal', 'Ende des Quartals'],
    },
    selectTime: 'Zeit auswählen',
    selectDate: 'Datum auswählen',
    today: 'Heute',
    now: 'Jetzt',
    ok: 'OK',
  },
  Drawer: {
    okText: 'OK',
    cancelText: 'Abbrechen',
  },
  Empty: {
    noData: 'Keine Daten',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Abbrechen',
  },
  Pagination: {
    goto: 'Gehe zu',
    page: '',
    countPerPage: '/ Seite',
    total: 'Gesamt {0}',
    prev: 'Zurück zur letzten Seite',
    next: 'Gehen Sie zur nächsten Seite',
    currentPage: 'Seite {0}',
    prevSomePages: 'vorherigen {0} Seiten',
    nextSomePages: 'Die nächsten {0} Seiten',
    pageSize: 'Seitengröße',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Abbrechen',
  },
  Table: {
    okText: 'OK',
    resetText: 'Zurücksetzen',
    sortAscend: 'Klicken zur aufsteigenden Sortierung',
    sortDescend: 'Klicken zur absteigenden  Sortierung',
    cancelSort: 'Klicken zum Abbrechen der Sortierung',
  },
  TimePicker: {
    ok: 'OK',
    placeholder: 'Bitte wählen Sie eine Uhrzeit',
    placeholders: ['Startzeit', 'Endzeit'],
    now: 'Jetzt',
  },
  Progress: {
    success: 'Erfolg',
    error: 'Scheitern',
  },
  Upload: {
    start: 'Anfang',
    cancel: 'Abbrechen',
    delete: 'löschen',
    reupload: 'Klicken Sie hier, um es erneut zu versuchen',
    upload: 'Zum Hochladen klicken',
    preview: 'Vorschau',
    drag: 'Klicken oder ziehen Sie Dateien, um sie hier hochzuladen',
    dragHover: 'Geben Sie die Datei frei und starten Sie den Upload',
    error: 'Upload fehlgeschlagen',
  },
  Typography: {
    copy: 'Kopieren',
    copied: 'Kopiert',
    edit: 'Bearbeiten',
    fold: 'Falten',
    unfold: 'Erweitern',
  },
  Transfer: {
    resetText: 'Zurücksetzen',
  },
  ImagePreview: {
    fullScreen: 'Vollbild',
    rotateRight: 'Nach rechts drehen',
    rotateLeft: 'Nach links drehen',
    zoomIn: 'Vergrößern',
    zoomOut: 'Rauszoomen',
    originalSize: 'Originalgröße',
  },
};
