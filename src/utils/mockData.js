export const stats = [
  { label: 'Patients Today', value: 28, color: 'neon' },
  { label: 'Active LINAC', value: 6, color: 'success' },
  { label: 'AI Accuracy', value: '98.7%', color: 'purple' },
  { label: 'Treatment Queue', value: 14, color: 'danger' },
];

export const timeline = [
  { t: '07:30', step: 'Patient Intake & Vitals', done: true },
  { t: '08:10', step: 'AI Tumor Delineation', done: true },
  { t: '08:35', step: 'Beam Geometry Optimization', done: true },
  { t: '09:05', step: 'Physician Sign-off', done: false },
  { t: '09:30', step: 'LINAC Session #1', done: false },
];
