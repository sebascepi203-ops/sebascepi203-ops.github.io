import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Asistente de soporte de red",
    company: "Isonet Perú",
    region: "Huancayo",
    description:
      "Trabajé en una empresa de telecomunicaciones en la cual apoye en el soporte de la red, configuracion de modems GPON e IPTV.",
    technologies: [
      "Redes",
      "Fibra Optica",
      "IPTV",
      "MikroTik",
    ],
  },
];

export type WorkItem = (typeof work)[number];

