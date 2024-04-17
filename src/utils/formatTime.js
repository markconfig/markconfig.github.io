import { format, getTime, formatDistanceToNow } from 'date-fns';
import esLocale from 'date-fns/locale/es';

// ----------------------------------------------------------------------

export function fDate(date) {
  return format(new Date(date), 'dd MMMM yyyy', { locale: esLocale });
}

export function fDateExtend(date) {
  return format(new Date(date), `EEEE${','} dd MMMM yyyy`, { locale: esLocale });
}

export function fDateTime(date) {
  return format(new Date(date), 'dd MMM yyyy p', { locale: esLocale });
}

export function fTimestamp(date) {
  return getTime(new Date(date));
}

export function fDateTimeSuffix(date) {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p');
}

export function fToNow(date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });
}
