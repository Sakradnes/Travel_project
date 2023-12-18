import React, { useState } from 'react';
import { differenceInCalendarDays } from 'date-fns';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ModalEvent from './ModalEvent';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function MainPage(): JSX.Element {
  const [value, onChange] = useState<Value>(new Date());
  const [event, setEvent] = useState({});
  const [showModal, setShowModal] = useState(false);

  const locantion = useSelector((store: RootState) => store.location.isLocation);

  const events = [
    {
      name: 'Выставка «Горел асфальт» в Эрарте 6+',
      date: '2023-12-16',
      img: 'https://media.kudago.com/images/rich_editor/7d/ec/7dec99a9a24a5fb3b3daf08c6a30b857.jpg',
      discription:
        'https://media.kudago.com/images/rich_editor/7d/ec/7dec99a9a24a5fb3b3daf08c6a30b857.jpg',
      locationId: 1,
    },
    {
      name: 'Выставка пуп',
      date: '2023-12-19',
      img: 'https://media.kudago.com/images/rich_editor/7d/ec/7dec99a9a24a5fb3b3daf08c6a30b857.jpg',
      discription:
        'https://media.kudago.com/images/rich_editor/7d/ec/7dec99a9a24a5fb3b3daf08c6a30b857.jpg',
      locationId: 2,
    },
    {
      name: 'Выставка 3',
      date: '2023-12-25',
      img: 'https://media.kudago.com/images/rich_editor/7d/ec/7dec99a9a24a5fb3b3daf08c6a30b857.jpg',
      discription:
        'https://media.kudago.com/images/rich_editor/7d/ec/7dec99a9a24a5fb3b3daf08c6a30b857.jpg',
      locationId: 2,
    },
    {
      name: 'Выставка 4',
      date: '2023-12-28',
      img: 'https://media.kudago.com/images/rich_editor/7d/ec/7dec99a9a24a5fb3b3daf08c6a30b857.jpg',
      discription:
        'https://media.kudago.com/images/rich_editor/7d/ec/7dec99a9a24a5fb3b3daf08c6a30b857.jpg',
      locationId: 1,
    },
    {
      name: 'Выставка 5',
      date: '2023-12-20',
      img: 'https://media.kudago.com/images/rich_editor/7d/ec/7dec99a9a24a5fb3b3daf08c6a30b857.jpg',
      discription:
        'https://media.kudago.com/images/rich_editor/7d/ec/7dec99a9a24a5fb3b3daf08c6a30b857.jpg',
      locationId: 1,
    },
  ];
  function isSameDay(a: Date, b: Date): boolean {
    return differenceInCalendarDays(a, b) === 0;
  }
  const tileClassName = ({ date, view }: any): any => {
    const eventLocation = events.filter((event) => event.locationId === locantion);
    if (
      view === 'month' &&
      eventLocation.find((event) =>
        isSameDay(new Date(event.date.replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1')), date),
      )
    ) {
      return ['highlight', 'background'];
    }
  };

  const onClickDay = (date: Date): void => {
    const eventLocation = events.filter((event) => event.locationId === locantion);
    eventLocation.forEach((el) => {
      if (new Date(el.date.replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1')).getTime() === date.getTime()) {
        setEvent(el);
        setShowModal(true);
      }
    });
  };

  return (
    <div className="container">
      <div></div>
      <div>
        <h1>Ger</h1>
      </div>
      <div>
        <Calendar
          onChange={onChange}
          value={value}
          tileClassName={tileClassName}
          onClickDay={onClickDay}
        />
      </div>
      <div>
        {showModal ? (
          <>
            {' '}
            <ModalEvent setShowModal={setShowModal} event={event} />
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
