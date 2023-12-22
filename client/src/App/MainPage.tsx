import React, { useEffect, useState } from 'react';
import { differenceInCalendarDays } from 'date-fns';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useSelector } from 'react-redux';
import { type RootState, useAppDispatch } from '../store/store';
import ModalEvent from './ModalEvent';
import { loadEvents } from '../features/event/eventSlice';
import ModalAdd from './ModalAdd';
import ModalChange from './ModalChange';
import { type Event } from '../features/event/type/eventType';
import ModalDelete from './ModalDelete';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function MainPage(): JSX.Element {
  const [value, onChange] = useState<Value>(new Date());
  const [event, setEvent] = useState<Event>();
  const [showModal, setShowModal] = useState(false);
  const [viewForm, setViewForm] = useState<'ADD' | 'Change' | 'Delete'>();
  const [dateEvent, setDateEvent] = useState<Date>();

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
    setDateEvent(date);
  };

  return (
    <div className="containerBlock">
      <div className="recklama">
        <p>Реклама</p>
      </div>

      <div className="mainText lg:w-1/2 text-center lg:text-left relative">
        <div className="vertical-line left-line"></div>
        <div className="vertical-line right-line"></div>
        <div className="imageMainPage flex flex-col lg:flex-row items-center justify-center bg-gray-500 bg-opacity-20 p-8">
          <div className="lg:w-full mb-8 lg:mb-0 lg:mr-4 flex flex-col space-y-4">
            <div className="block1">
              <h2 className="mb-4">
                Откройте для себя увлекательный мир приключений и отдыха!
              </h2>
              <div className="img4">
                <img
                  src="https://www.worldtrips.com/-/media/Project/TMHCC-MIS/HCCMISdotcom/Demand-Pages/best-travel-websites-person-sitting-on-a-couch-looking-at-phone.jpg?h=350&iar=0&w=675&hash=45AB979F6F3502C858189CDCE15EDD63"
                  alt="..."
                  className="img4-4"
                />
              <p>«Ничто так не развивает ум, как путешествие» – Эмиль Золя.</p>
              </div>
            </div>
            <div className="img1">
              <img src="https://cdn.krym.news/img/0/781/1200.webp" alt="..." className="img1-1" />
              <h3>
                Невероятные маршруты, захватывающие истории и советы для вашего следующего
                приключения.
              </h3>
            </div>
            <div className="img2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcu-tkIua_U58tr4ryyVGglxCDId1xxo_bA_R0lwYcVQ&s"
                alt="..."
                className="img2-2"
              />
              <h3>
                Погрузитесь в удивительные природные красоты и наслаждайтесь аутентичными встречами
                с местными жителями.
              </h3>
            </div>
            <div className="img3">
              <img
                src="https://kartinki.pics/uploads/posts/2022-02/thumbs/1645916768_7-kartinkin-net-p-kartinki-schastlivii-chelovek-7.jpg"
                alt="..."
                className="img3-3"
              />
              <h6 >
                Мы создаем возможность для вас путешествовать в стиле, который подходит именно вам.
              </h6>
             
            </div>
          </div>
        </div>
      </div>
      <div className="calendar">
        <Calendar
          onChange={onChange}
          value={value}
          tileClassName={tileClassName}
          onClickDay={onClickDay}
        />
      </div>
      <div className="admin">
        <div>{showModal && <ModalEvent setShowModal={setShowModal} event={event} />}</div>
        {user?.isAdmin && (
          <>
            {viewForm === 'ADD' && <ModalAdd dateEvent={dateEvent} setViewForm={setViewForm} />}
            {event && viewForm === 'Change' && (
              <ModalChange
                event={event}
                setEvent={setEvent}
                dateEvent={dateEvent}
                setViewForm={setViewForm}
              />
            )}
            {event && viewForm === 'Delete' && (
              <ModalDelete event={event} setViewForm={setViewForm} setShowModal={setShowModal} />
            )}
            {viewForm ? (
              <button onClick={() => setViewForm(undefined)}>Закрыть</button>
            ) : (
              <>
                <div className="inputAdmin">
                  <div>
                    <button onClick={() => setViewForm('ADD')}>Добавить</button>
                  </div>
                  <div>
                    <button onClick={() => setViewForm('Change')}>Изменить</button>
                  </div>
                  <div>
                    <button onClick={() => setViewForm('Delete')}>Удалить</button>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
