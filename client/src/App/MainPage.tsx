import React, { useEffect, useState } from 'react';
import { differenceInCalendarDays } from 'date-fns';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import ModalEvent from './ModalEvent';
import { loadEvents } from '../features/event/eventSlice';
import ModalAdd from './ModalAdd';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function MainPage(): JSX.Element {
  const [value, onChange] = useState<Value>(new Date());
  const [event, setEvent] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [viewForm, setViewForm] = useState<'ADD' | 'Change' | 'Delete'>();

  const dispatch = useAppDispatch();

  const locantion = useSelector((store: RootState) => store.location.isLocation);
  const events = useSelector((store: RootState) => store.event.events);
  const user = useSelector((store: RootState) => store.auth.user);

  useEffect(() => {
    dispatch(loadEvents());
  }, []);

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
      {user?.isAdmin ? (
        <>
          {viewForm === 'ADD' ? <ModalAdd /> : ''}
          {viewForm ? (
            <>
              <button onClick={() => setViewForm(undefined)}>Закрыть</button>
            </>
          ) : (
            <>
              <div>
                <button onClick={() => setViewForm('ADD')}>Добавить</button>
              </div>
              <div>
                <button>Изменить</button>
              </div>
              <div>
                <button>Удалить</button>
              </div>
            </>
          )}
        </>
      ) : (
        ''
      )}
    </div>
  );
}
