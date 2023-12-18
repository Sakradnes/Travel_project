'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await WebAssembly.bulckCreate([
      {
        name: 'Финляндский вокзал ',
        img: 'https://vecherka.spb.ru/wp-content/uploads/2021/01/1-8.jpg',
        description:
          "В 1862-1870 годах была проложена Финляндская железная дорога. По контракту после сдачи в эксплуатацию она стала принадлежать Финляндии. Это привело к тому, что на железной дороге вплоть до 1917 года работали только финны. В 1870 году по проекту архитектора П. С. Купинского севернее Симбирской улицы (ныне Комсомола) было построено здание Финляндского вокзала. На публичных торгах работы по его постройке поручили выборгскому купцу Павлу Яковлеву. Интерьеры Финляндского вокзала создавали финские архитекторы В. Вестлинг и П. Дегенер. Мебель заказывали в Германии.Главный фасад вытянутой по ширине одноэтажной станции был на углу Симбирской улицы и проложенного при строительстве вокзала Финского переулка. Главный вход находился в западном корпусе, перед которым возникла небольшая привокзальная площадь. Здесь же располагался единственный двухэтажный объём здания с царскими апартаментами. Железнодорожные пути подходили к Неве, где расположилась товарная станция.Официальная церемония открытия Финляндской железной дороги прошла 11 сентября 1870 года, когда началось движение от Санкт-Петербурга до Рихимяки. В 1892 году поезда пошли по ветке Охтинский вокзал - Ириновская ветка, в 1894 году - Приморский вокзал, Сестрорецк, Озерки. К 1896 году узел Финляндского вокзала стал охватывать всю северную часть Петербургской губернии.Новая железная дорога доставляла массу неудобств жителям Выборгского района Санкт-Петербурга. Она проходила в одном уровне с улицами, имела в пределах города десять переездов. В 1910 году её реконструировали, сделав пересечение с улицами в двух уровнях.3 апреля 1917 года в Россию из эмиграции прибыл В. И. Ленин. Поезд довёз его до Финляндского вокзала, у которого на броневике перед встречающими он произнёс одну из своих самых известных речей.Во время блокады Ленинграда Финляндский вокзал являлся единственным действующим в городе. Железнодорожный узел подвергался частым бомбардировкам. Основные мероприятия здесь старались проводить в ночные часы. Загрузку и разгрузку вагонов производили севернее здания вокзала, места постоянно меняли. Тем не менее в результате бомбёжек здание Финляндского вокзала было практически полностью разрушено. 7 февраля 1943 года после прорыва блокады сюда пришёл первый поезд с продовольствием. Реконструкция привокзальной территории началась уже в 1944 году. Впоследствии здесь была сформирована площадь Ленина.В 1957 году на перроне вокзала был установлен паровоз, доставивший Ленина в Петроград в 1917 году. Для него был построен специальный павильон по проекту архитекторов П. А. Ашастина и Е. В. Лоханова. Размеры павильона: 18 Х 5 Х 4,5 метра (длина, ширина и высота соответственно).Старый Финляндский вокзал в послевоенные годы стал слишком тесен. Его скромный облик перестал соответствовать новому архитектурному окружению. Часть здания была разобрана для сооружения вестибюля станции метро 'Площадь Ленина'.Новое здание Финляндского вокзала строилось в 1955-1960 годах. Авторами его проекта стали П. А. Ашастин, Н. В. Баранов и Я. Н. Лукин. Новый центральный корпус открылся в июне 1960 года. Единый комплекс включил в себя вокзал пригородных направлений на 2 000 человек и вокзал для поездов дальнего следования на 200 человек.Центральную часть здания занимает Главный зал площадью около 1 000 кв. м. Его высота составила 10 метров. Зал перекрыт железобетонной конструкцией размером 32,5 на 32,5 метра, опирающейся на четыре колонны. Финляндский вокзал венчает башня высотой 16 метров, увенчанная 30-метровым шпилем из нержавеющей стали. 17 оконных проёмов украшены горельефами, созданными учениками Художественного-промышленного училища им. В. И. Мухиной и отлитыми на заводе 'Монументскульптура'. Центральный горельеф аллегорически изображает Революцию. У её ног расположен поверженный двуглавый орёл и разорванные оковы. Горельефы по правую сторону от центрального посвящены Советской Армии и Военно-Морскому флоту, по левую - Красной гвардии.Последующие строительные работы велись без прекращения движения поездов. После главного был возведён корпус диспетчерской централизации. В западный корпус включена часть фасада старого вокзала. Объём этой части здания составляет 18 600 кубометров. Западный корпус Финляндского вокзала выдвинут в сторону площади на три метра относительно старого строения. Его подвальный этаж занимает распределительный зал, первый этаж - зал ожидания для пассажиров.По объёмам пассажиропотока Финляндский вокзал стал вторым в СССР после Ярославского вокзала в Москве.1970-х годах в связи с большим",
        routId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Паровоз Ленина',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Lenin%27s_Funeral_Train%2C_Moscow_01.jpg/2880px-Lenin%27s_Funeral_Train%2C_Moscow_01.jpg',
        description:
          'У127, У-127 — российский, а позже советский пассажирский паровоз типа 2-3-0 серии У. Имел официальное название Красный паровоз, так как его почётным машинистом являлся сам Владимир Ленин, а в 1924 году привёл траурный поезд вождя пролетариата в Москву. У127 является первым советским паровозом-памятником, а с 1948 года — центральный экспонат музейного павильона у Павелецкого вокзала. До 1992 года числился экспонатом Центрального музея В. И. Ленина, а с 2001 года — музея Московской железной дороги. Единственный сохранившийся представитель серии У. Самый старый сохранившийся русский пассажирский паровоз. Объект культурного наследия федерального значения.',
        routId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Сампсониевский мост',
        img: 'https://files.mostotrest-spb.ru/files/bridges/11_image.png?1497531906',
        description:
          'Первая переправа здесь появилась в 1806 году, когда на это место перенесли Гренадерский наплавной мост, который ранее стоял ниже по течению Большой Невки.В 1847 году на месте плашкоутной переправы был построен новый деревянный ригельно-подкосный 13-пролетный мост, опиравшийся на конструкции из свай. Он стал одним из первых постоянных мостов Петербурга. Его длина составила 242 метра, а ширина — 12,7 метра. Разводной механизм приводился в действие вручную. Впоследствии при капитальном ремонте разводной пролет перенесли на середину моста, а общее число опор увеличили до 17. Длина моста сократилась до 225 метров. Деревянные перила моста украсили чугунными фонарями.Мост был назван сначала Выборгским, а затем Сампсониевским. Это имя он получил по Сампсониевскому собору, который находится неподалеку на Выборгской стороне и, в свою очередь, именуется так в память о Полтавской битве, произошедшей 27 июня 1709 года в день поминовения Преподобного Сампсония Странноприимца.В начале XX века появился план прокладки по Большому Сампсониевскому проспекту трамвайных путей. Поскольку рельсы должны были быть проложены и по Сампсониевскому мосту, возникла необходимость его капитальной перестройки.В 1906 году профессор Инженерной академии Г.Г. Кривошеин представил Городской управе проекты двух вариантов нового моста: железобетонного и металлического. Специальная комиссия выбрала металлический. В 1908 году был построен временный деревянный объездной мост с разводным пролетом посередине. Продольная ось этой переправы была расположена на 65 метров ниже по течению Большой Невки. Старый деревянный мост был разобран, однако постоянный мост построить не удалось в связи с Первой Мировой войной и революцией.В советское время это временное сооружение переименовали в мост Свободы. В 1937 году проводился капитальный ремонт, и переправу практически полностью перестроили. Деревянные пролетные строения были заменены металлическими, ручная разводка заменена на электромеханическую.Из-за плохого технического состояния моста Свободы в 1955 году он был закрыт на реконструкцию, которая продлилась три года. На основной трассе моста по проекту инженеров «Ленгипроинжпроекта» В.В. Демченко и Б.Б. Левина, архитекторов Л.А. Носкова и В.А. Грушке была создана 7-пролетная металлическая переправа. По своей конструкции и системе новый мост был подобен Каменноостровскому и Ушаковскому, отличаясь от них только наличием береговых железобетонных сводов и свайным основанием опор, а также гранитных дугообразных лестничных спусков к воде. Мост открылся в 1958 году.4 октября 1991 года мосту вернули его историческое название — Сампсониевский.В мае–ноябре 2000 года проведена новая реконструкция переправы. В ходе ремонта заменено дорожное полотно с гидроизоляцией по всей площади моста. Трамвайные пути были уложены на новой железобетонной подушке, без шпал, что позволило увеличить скорость и уменьшить шум, производимый при движении вагонов. На мосту установлена художественная подсветка.С 1 мая 2012 года по 27 мая 2013 года, в связи со строительством развязки на правом берегу Невы, произведен еще один ремонт Сампсониевского моста, переправа была закрыта для движения.',
        routId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Крейсер Аврора',
        img: 'https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/6d9b3244-9fc4-4645-a8e0-626da0e9b3ff/-/resize/1400x/-/quality/lighter/',
        description:
          '«Аврора» – военное бронепалубное судно Балтийского флота первого ранга, ставший символом Октябрьской революции. История его началась в 1897 году, с момента начала закладки, первый спуск на воду состоялся в 1900.С самого начала судьба корабля была предрешена: создатели мечтали выпустить судно, которому бы не было равных, поэтому на всех этапах производства к делу подключались лучшие мастера и специалисты, на проект не жалели времени и средств.Изготовлением занималась верфь «Новое Адмиралтейство». Капитальным и основательным было всё: материалы изготовления, бронированный корпус, карапасная палуба. Это делало судно максимально неуязвимым: его корпус был пластичным и не раскалывался от снарядов, а палуба их хорошо рикошетила. Автономная система откачки позволяла в случае чего избавиться от воды из внутреннего отсека всего за час, внутри установили мощную энергетическую систему и электрифицированную систему освещения, собственный беспроводной телеграф и телефонную сеть.Неудивительно, что спуск на воду этого многообещающего крейсера проводился в торжественной обстановке, за процессом наблюдал сам император Николай Второй с семьёй. После спуска ещё три года его достраивали буквально на воде, затем проводили необходимые испытания, и летом 1903, наконец, ввели в состав флота.',
        routId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Домик Петра I',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Domick_Petra_I-2.jpg/1600px-Domick_Petra_I-2.jpg',
        description:
          'Этот домик, стал первой петербургской резиденцией Петра I и первым жилым домом будущей столицы. Согласно легенде, он был построен солдатами за 3 дня. Дом был срублен из сосновых брёвен, обшит снаружи деревом и выкрашен, следуя голландской традиции, под красный кирпич. Отсюда и название, “красные хоромы”.',
        routId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Львы Ши-Цза',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Chinese_guardian_lion_at_Petrovskaya_Embankment.jpg/2880px-Chinese_guardian_lion_at_Petrovskaya_Embankment.jpg',
        description:
          'В Санкт-Петербурге существует традиция украшать мосты, набережные и здания каменными львами. Самыми необычными из них можно по праву считать статуи Ши-Цза. Две скульптуры, изображающие льва со сферой и львицу со львенком, имеют внушительные размеры. Высота каждой составляет 4 метра 50 сантиметров, а вес – 2 тонны 400 килограмм. Расположенные по обе стороны от спуска к Неве, статуи охраняют домик Петра I. Это было первое жилое здание, построенное на набережной. Сегодня в нем находиться музей, где представлены вещи, принадлежавшие царю.Скульптуры изображают чудовищ из восточной мифологии и имеют внешние черты, позаимствованные от льва и жабы. Для китайцев лягушка является символом богатства и благополучия, а царь зверей обладает магической силой, защищающей от врагов и нечистых сил. Также зверь олицетворяет могущество и успех, власть и силу.Скульптуры действительно выглядят грозно и величественно. Глядя на них, создается впечатление, что львы набрали полную грудь воздуха, а их пасти готовы издать громогласный рев.',
        routId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Иоанновский мост',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ioannovskiy_Bridge_in_SPB.jpg/548px-Ioannovskiy_Bridge_in_SPB.jpg',
        description:
          'В 1703 году наплавной деревянный мост соединил крепость на Заячьем острове со строениями на Березовом (ныне Петроградском) острове. В 1706 году наплавной мост был заменен постоянным деревянным на свайных опорах с подъемной частью посередине. Мост получил название Петровского.В 1738 году его перестроили в 16-пролетный, с сохранением подъемного пролета.В 1801-1802 годах деревянная часть моста была заменена восьмипролетным сооружением шпренгельной системы с однокрылой подъемной частью. Разводка моста осуществлялась вручную. На каменных аркадах был установлен гранитный парапет.В 1827 году арочные пролеты правого крыла моста засыпаны в связи с благоустройством въездов на Суворовский наплавной мост через Неву (это название первоначально собирались дать нынешнему Троицкому мосту, построенному на месте наплавного). Вследствие наносов грунта постепенно ликвидировались и арочные пролеты левого крыла моста.В 1887 году Петровский мост был переименован в Иоанновский. Дело в том, что между крепостью и Иоанновским равелином существовал тогда ров, через который в 1752 году был построен деревянный Иоанновский мост, названный в честь брата Петра I. После ликвидации этого моста его название перешло к Петровскому.К 1934 году на правом крыле моста сохранился только один каменный арочный пролет, а на левом – три, вместе с дамбой, примыкающей к Иоанновским воротам крепости. В дальнейшем все арочные каменные пролеты были засыпаны и заложены бутовой плитой.В 1950-1951 годах при очередном ремонте моста по проекту инженера В.В. Блажевича семь пролетов были перекрыты металлическими балками. Были отремонтированы и обшиты досками опоры. Проезжая часть и тротуары покрыты дощатым настилом. Перильные ограждения оставались деревянными.В 1953 году по проекту архитектора А.Л. Ротача деревянные ограждения на мосту были заменены чугунными решетками художественного литья, установлены торшеры с фонарями, которые были при въездах на Суворовский наплавной мост. Тип решеток заимствован с перил на въездах Тучкова моста.В 2001–2003 годах, к 300-летию Санкт-Петербурга, проведен новый капитальный ремонт. Были отремонтированы деревянные опоры, заменены металлическое пролетное строение и деревянный настил проезжей части и тротуаров, выполнена облицовка устоев и аркад. Внутренний полукруглый свод моста был усилен и покрыт химическим защитным составом, предохраняющим от негативного воздействия воды. Отреставрированы фонари, на которых восстановили фигуры двуглавых орлов. Обновлены перильные ограждения.В 2016–2017 гг. был произведен последний по времени ремонт переправы, включающий восстановление бутовой кладки и облицовки аркад, замену поврежденных деревянных элементов русловых опор и окраску металлического пролетного строения, реставрацию чугунного декора (перила и торшеры). Также заменены деревоконструкции моста и булыжное мощение мостовой над аркадами.',
        routId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Памятник Зайцу',
        img: 'https://i.ptmap.ru/1/1/0/8/2/thumbs/600_452_fixw.jpg',
        description:
          'Памятник был открыт 8 мая 2003 года в рамках празднования 300-летия Санкт-Петербурга. Установка памятника была приурочена к окончанию реставрационно-восстановительных работ Иоанновского моста. Авторами проекта стали петербургский скульптор Владимир Алексеевич Петровичев, работающий в жанре анималистики, и архитектор Сергей Яковлевич Петченко. Одним из идеологов установки памятника стал петербургский историк Сергей Борисович Лебедев.По задумке авторов фигура зайца должна была быть установлена на вбитую в дно Кронверкского пролива сваю, верх которой совпадал бы с уровнем пешеходной части моста. Изначально планировалось установить скульптуру с правой стороны от Иоанновского моста (если двигаться по мосту к Петропавловской крепости), на расстоянии в 2 метрах от самого моста и в 8 метрах от береговой линии. Однако от установки сваи было решено отказаться ввиду сложности и дороговизны работ. В связи с реставрацией Иоанновского моста, проводимой в 2003 году, появилась возможность установить фигуру зайчика на один из кустов свай, которые предохраняют опоры моста от ледохода. В дальнейшем фигура зайчика была перемещена на другой свайный куст и расположена с другой стороны моста.Скульптура имеет высоту 58 см, выполнена из сплава силумина, алюминия и дюраля, и покрыта нитридом титана.',
        routId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Петропавловская крепость',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/RUS-2016-Aerial-SPB-Peter_and_Paul_Fortress_02.jpg/548px-RUS-2016-Aerial-SPB-Peter_and_Paul_Fortress_02.jpg',
        description:
          'Петропавловская крепость была построена во времена Великой Северной войны, которую вела Россия со Швецией за выход к Балтийскому морю. Заячий остров, на котором построили крепость, имеет удобное расположение в устье реки Невы, позволяющее контролировать корабли, входящие в реку из Финского залива.',
        routId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Корабль Летучий Голландец',
        img: 'https://335820.selcdn.ru/bp_content/f45eb9d5-7af3-4c91-ba40-91e79abbd9a4_original.png',
        description:
          'Легенда о Летучем Голландце зародилась в одноименном регионе еще в XVII веке. Мореплаватели говорили, что в море вдруг оказывались ярчайшие лучи и затем совсем рядом проплывало судно. Согласно истории, Летучий Голландец никогда не сможет пристать к берегу, а встреча с ним всегда предшествует беде.Вероятно, эти мифы появились неспроста, так как в море и правда плавали неизвестные никому корабли. Так, напрмер, в 1770 году на одном судне вспыхнула эпидемия болезни, но подплыть к суше для того, чтобы помочь морякам, у него так и не получилось. Никакой порт не стал принимать корабль с зараженными моряками, боясь распространения неизвестного вираса. Все на судне умерли, а оно так и осталось в открытом море, наводя страх проходящие мимо корабли.',
        routId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Биржевой мост',
        img: 'https://lh3.googleusercontent.com/p/AF1QipMovDb-a7DPMwDO7fKWBZDk2zRhE0WutN3HoSdF=s1360-w1360-h1020',
        description:
          'Биржево́й мост (с 1918 по 1989 год — мост Строи́телей) — автодорожный металлический разводной мост через Малую Неву в Санкт-Петербурге. Соединяет между собой Васильевский и Петроградский острова. Мост придаёт завершённость и композиционную уравновешенность ансамблю стрелки Васильевского острова, образуя с Дворцовым мостом единый архитектурный ансамбль.На стрелке Васильевского острова с 1720-х годов располагался морской торговый порт. Из-за интенсивного судоходства строительство моста стало возможным только после перевода торгового порта на другое место в 1880-х годах. Первый деревянный разводной мост построен в 1893—1894 годах по проекту инженера Николая Мазурова. Это был один из последних больших деревянных мостов с разводным пролётом, сооружённых в Петербурге до 1917 года. В 1947 году выполнен ремонт моста. В 1957—1960 годах по проекту инженеров института «Ленгипроинжпроект» Владимира Демченко, Бориса Левина и архитекторов Льва Носкова и Петра Арешева построен существующий пятипролётный металлический арочный мост. В октябре 2021 года по проекту АО «Институт Гипростроймост — Санкт-Петербург» начался капитальный ремонт моста. Полное завершение работ планируется к маю 2023 года.',
        routId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Дворцовая набережная',
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Admiralty_1_Island.jpg',
        description:
          'Дворцовую набережную можно назвать одной из самых красивых и известных набережных Санкт-Петербурга. Именно здесь расположены знаменитые на весь мир достопримечательности Северной столицы: Эрмитаж, Зимний дворец, Русский музей, Дом ученых и многие другие. С этой улицы открывается отличный вид на Стрелку Васильевского острова и Петропавловскую крепость. Расположена Дворцовая набережная на левом берегу Невы от набережной Кутузова и до Адмиралтейской набережной. Ее протяженность — 1300 метров.',
        routId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Зимняя Канавка',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Winter_Canal_SPB.jpg/2880px-Winter_Canal_SPB.jpg',
        description:
          'Зимняя канавка - рукотворный канал, соединяющий реки Мойку и Неву. Он был прорыт в 1718-1719 годах рядом с Зимним дворцом Петра I, по которому позже и получил своё название. Благодаря этой водной протоке государь мог садиться на лодку буквально у порога своего дома.',
        routId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Дворцовая площадь',
        img: 'https://lh3.googleusercontent.com/p/AF1QipPmgt6pLGpscbVzqRaxK8Pk0HGv9WWw8ED_KOgc=s1360-w1360-h1020',
        description:
          'Дворцовая площадь возникла как часть гласиса, открытого пространства перед Адмиралтейством, основанном в 1704 году. С той поры здесь существовал луг, где не редко пасли скот. Называли его Адмиралтейским. Рядом с верфью тут же стали селиться высшие морские чины.',
        routId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Зимний дворец',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Winter_Palace_Panorama_3.jpg/274px-Winter_Palace_Panorama_3.jpg',
        description:
          'Зимний дворец строился с 1754 по 1762 год, но Елизавета Петровна умерла, так и не увидев его завершенным. Монументальное здание на набережной Невы было возведено в стиле барокко, с обилием колонн и декоративных лепных деталей. Это было последнее и самое грандиозное творение Растрелли.',
        routId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Александровская колонна',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Alexander_column.jpg/2560px-Alexander_column.jpg',
        description:
          'Александровская колонна, или Александрийский столп, сооружена в честь победы России в Отечественной войне 1812 года. Она сделана из полированного красного гранита и имеет высоту 47,5 м. Вес колонны – более 600 тонн. Уникальна она тем, что держится на постаменте без креплений, только под тяжестью собственной массы.',
        routId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Триумфальная арка Главного штаба',
        img: 'https://kuda-spb.ru/uploads/e273cf6e3e8ebc1105bebe8612266f87.jpg',
        description:
          'Арка Главного штаба – это величественное сооружение, расположенное в Санкт–Петербурге на Дворцовой площади. Ее возвели как главный монумент, посвященный Отечественной войне 1812 года. С помощью нее выдающийся архитектор К. Росси связал два крыла Главного штаба, проектируя центральную площадь молодой столицы.',
        routId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
