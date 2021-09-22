import { useQuery } from 'react-query';
const mockData = {
  id: '1',
  idNumber: '235345644',
  address: 'Av Sur 123',
  name: 'José Barrios Pulido',
  avatarImg: 'https://avatars.githubusercontent.com/u/43865749?v=4',
  country: 'Colombia',
  phone: '124234567',
  platziUser: 'jbarriospd',
  isActive: true,
  gitHub: 'jbarriospd',
  linkedin: 'jbarriospd',
  status: 'Aplicando',
  cohort: 'C1',
  slack: 'Jose Barrios [C1]#7994',
  phase: 'Professional',
  website: 'https://jbarriospd.tech/',
  coaches: [
    {
      type: 'TP Coach',
      avatarImg:
        'https://static.platzi.com/media/avatars/avatars/helenac_438a2a07-3853-4687-b755-cf6fed1bb298.jpg',
      name: 'Helena Corona Hernández',
    },
    {
      type: 'Academic Coach',
      avatarImg:
        'https://static.platzi.com/media/avatars/avatars/leomaris-reyes_e589bf00-722b-483e-a3a0-a279ce97239b',
      name: 'Leomaris Reyes',
    },
  ],
  cv: 'https://platzi-master.s3.us-west-2.amazonaws.com/C1/675426/1630258376049-cv.pdf?AWSAccessKeyId=AKIARVXCY5KGBHDJWOMI&Expires=1630259276&Signature=Op8jzKLRm8wNlTp5N26gkIjvP34%3D',
};

export const stateInfoUser = 'infoUser';
export function GetInfoUser() {
  return useQuery([stateInfoUser], async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData);
      }, 600);
    });
  });
}
