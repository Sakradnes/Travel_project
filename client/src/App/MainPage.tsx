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
        <h2 style={{ fontWeight: 'bold' }}>Отзывы:</h2>

        <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
          <img
            style={{ width: '100px', borderRadius: '50%' }}
            src="https://i.pinimg.com/736x/5f/61/a0/5f61a0e798a7291ec37bcb79b4f44cad.jpg"
            alt=""
          />
          <h3 style={{ fontWeight: 'bold' }}>Елена</h3>
          <p>Отличный сайт который помогает выбрать удивительные места для отдыха</p>
        </div>
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
          <img
            style={{ width: '100px', borderRadius: '50%' }}
            src="https://masterpiecer-images.s3.yandex.net/6003b226e821c71:upscaled"
            alt="User Avatar"
          />
          <h3 style={{ fontWeight: 'bold' }}>Анна</h3>
          <p>Замечательный опыт путешествия! Сайт помог мне найти удивительные места для отдыха.</p>
        </div>
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
          <img
            style={{ width: '100px', borderRadius: '50%' }}
            src="https://masterpiecer-images.s3.yandex.net/be4ff1797e3611ee87de363fac71b015:upscaled"
            alt="User Avatar"
          />
          <h3 style={{ fontWeight: 'bold' }}>Максим</h3>
          <p>
            Благодаря этому сайту я открыл для себя уникальные культурные маршруты. Очень
            рекомендую!
          </p>
        </div>
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
          <img
            style={{ width: '100px', borderRadius: '50%' }}
            src="https://media.istockphoto.com/id/897384822/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%B8%D0%BA%D0%BE%D0%BD%D0%B0-%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D0%B0%D1%8F-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0-%D0%BB%D0%B8%D1%86%D0%BE.jpg?s=612x612&w=0&k=20&c=d8oTmE5olf5u389HYgEJpXMaPvI2mwE94Yyntg56kx4="
            alt="User Avatar"
          />
          <h3 style={{ fontWeight: 'bold' }}>Дарина</h3>
          <p>Отличные подсказки и рекомендации по маршрутам. Планирование поездки стало проще!</p>
        </div>
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
          <img
            style={{ width: '100px', borderRadius: '50%' }}
            src="https://img.freepik.com/premium-vector/portrait-of-beautiful-women-at-round-frame-avatar-of-female-character-isolated-on-white-background_559729-212.jpg"
            alt="User Avatar"
          />
          <h3 style={{ fontWeight: 'bold' }}>Иван</h3>
          <p>
            Этот сайт стал моим надежным путеводителем по интересным местам. Спасибо за отличные
            рекомендации!
          </p>
        </div>
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
          <img
            style={{ width: '100px', borderRadius: '50%' }}
            src="https://i.pinimg.com/474x/dc/81/03/dc81034f22aa20d6b1672a88a7b24d64.jpg"
            alt="User Avatar"
          />
          <h3 style={{ fontWeight: 'bold' }}>Мария</h3>
          <p>
            Всегда мечтала о путешествии, и благодаря этому сайту мои мечты стали реальностью.
            Незабываемые впечатления!
          </p>
        </div>
      </div>

      <div className="mainText lg:w-1/2 text-center lg:text-left relative">
        <div className="vertical-line left-line"></div>
        <div className="vertical-line right-line"></div>
        <div className="imageMainPage flex flex-col lg:flex-row items-center justify-center bg-gray-500 bg-opacity-20 p-8">
          <div className="lg:w-full mb-8 lg:mb-0 lg:mr-4 flex flex-col space-y-4">
            <div className="block1">
              <h2 className="mb-4">Откройте для себя увлекательный мир приключений и отдыха!</h2>
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
              <h6>
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
