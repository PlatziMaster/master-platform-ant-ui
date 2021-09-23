import { useQuery } from 'react-query';

const mockData = [
  {
    title: 'La creatividad como un proceso cognitivo',
    date: 'Monday august 23',
    startTime: new Date().toString(),
    endTime: new Date().toString(),
    avatarImg:
      'https://static.platzi.com/media/avatars/avatars/dfloresdev_dd883f31-b0d6-44fb-80a7-7a5664c4e176.png',
    joinLink: '',
    addLink: '',
    timeZone: 'GTM-5',
  },
  {
    title: 'La creatividad como un proceso cognitivo',
    date: 'Monday august 23',
    startTime: new Date().toString(),
    endTime: new Date().toString(),
    avatarImg:
      'https://static.platzi.com/media/avatars/avatars/dfloresdev_dd883f31-b0d6-44fb-80a7-7a5664c4e176.png',
    joinLink: '',
    addLink: '',
    timeZone: 'GTM-5',
  },
];

export const stateEvents = 'events';

export function GetEvents() {
  return useQuery([stateEvents], async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData);
      }, 600);
    });
  });
}
