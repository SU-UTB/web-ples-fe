/* eslint-disable @typescript-eslint/no-explicit-any */
import Multiselect from 'multiselect-react-dropdown';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { api } from '../../../api';
import { Endpoints } from '../../../api/endpoints';
import { Map } from './components';

// ALL SEATS
interface AllSeats {
  availableStands: string;
  freeSeats: string;
  seats: [
    {
      id: string;
      alias: string;
      typ: string;
      rezervace: string;
    },
  ];
  takenSeats: string;
}

const initialAllSeats: AllSeats = {
  availableStands: '',
  freeSeats: '',
  seats: [
    {
      id: '',
      alias: '',
      typ: '',
      rezervace: '',
    },
  ],
  takenSeats: '',
};

// MULTISELECT
interface Seats {
  name: string;
  id: string;
}

export const ReservationsAdministrationPage = () => {
  const [allSeats, setAllSeats] = useState(initialAllSeats);
  const [allFreeSeats, setAllFreeSeats] = useState();

  useEffect(() => {
    getAllReservations();
  }, []);

  const getAllReservations = async () => {
    try {
      const response = await api().get(Endpoints.GetReservations, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });

      setAllSeats(response.data);

      setAllFreeSeats(
        response.data.seats.filter((seat: any) => seat.rezervace === null),
      );

      const takenSeats = response.data.seats
        .filter((item: any) => item.rezervace !== null)
        .map((item: any) => item.alias);

      const tables: { [key: string]: number } = {};
      takenSeats.forEach((takenSeat: any) => {
        const [table] = takenSeat.split('/');
        tables[table] = (tables[table] || 0) + 1;
        const element = document.getElementById(takenSeat);
        if (element) {
          element.setAttribute('fill', 'red');
        }
      });

      // Fill red also full tables
      Object.keys(tables).forEach((table) => {
        if (parseInt(table) <= 115 || parseInt(table) >= 128) {
          if (tables[table] === 4) {
            const tableElement = document.getElementById(`${table}/S`);
            if (tableElement) {
              tableElement.setAttribute('fill', 'red');
            }
          }
        } else {
          if (tables[table] === 2) {
            const tableElement = document.getElementById(`${table}/S`);
            if (tableElement) {
              tableElement.setAttribute('fill', 'red');
            }
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  // NEW RESERVATION
  const [selectedStand, setSelectedStand] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState<Seats[]>();

  const handleSubmitNewReservation = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (selectedStand === 0 && (!selectedSeats || selectedSeats.length === 0)) {
      toast.error('Alespoň 1 místo musí být vybráno', {});
      return;
    }

    const seatsIds = selectedSeats?.map((seat) => seat.id);

    try {
      await api().post(Endpoints.PostReservations, {
        stand: selectedStand,
        seats: seatsIds,
      });

      toast.success('Rezervace byla vytvořena', {});
    } catch (error) {
      console.log(error);
    } finally {
      setSelectedSeats([]);
      setSelectedStand(0);
      await getAllReservations();
    }
  };

  const handleIncrementStands = () => {
    setSelectedStand(selectedStand + 1);
  };

  const handleDecrementStands = () => {
    if (selectedStand > 0) {
      setSelectedStand(selectedStand - 1);
    }
  };

  const handleRemoveAllSeats = () => {
    setSelectedSeats([]);
    setSelectedStand(0);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen py-4 pl-4 bg-white relative pr-[500px]">
        <Map className="h-full" />
        <div className="absolute right-0 text-center w-[500px] bg-slate-800 border-l border-black h-full shadow-xl">
          <section className="px-16 py-16 border-b border-slate-600">
            <h1 className="text-slate-50 tracking-wide font-bold text-4xl mb-4">
              Místa
            </h1>
            <p className="text-xl text-slate-200">
              Místa na stání: {allSeats.availableStands} / 434
            </p>
            <p className="text-xl text-slate-200">
              Místa na sezení: {allSeats.freeSeats} /{allSeats.seats.length}
            </p>
          </section>
          <section className="px-16 py-16">
            <h2 className="text-slate-50 tracking-wide font-bold text-4xl mb-4">
              Nová rezervace
            </h2>
            <form
              className="text-left space-y-6"
              onSubmit={handleSubmitNewReservation}
            >
              <div className="space-y-1">
                <label
                  className="text-slate-100 tracking-wide text-lg"
                  htmlFor="stands"
                >
                  Místa na stání
                </label>
                <div className="flex w-full shadow-lg">
                  <button
                    className="p-3 font-bold text-2xl border bg-slate-100 border-slate-200 rounded-l-md hover:bg-white transition"
                    type="button"
                    onClick={handleDecrementStands}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                  </button>
                  <div className="flex-grow bg-white flex items-center justify-center text-3xl">
                    {selectedStand}
                  </div>
                  <button
                    className="p-3 font-bold text-2xl border bg-slate-100 border-slate-200 rounded-r-md hover:bg-white transition"
                    type="button"
                    onClick={handleIncrementStands}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="space-y-1">
                <label
                  className="text-slate-100 tracking-wide text-lg"
                  htmlFor="seats"
                >
                  Místa na stání
                </label>
                <Multiselect
                  placeholder="Vyber místa k sezení"
                  hidePlaceholder
                  className="shadow-xl"
                  options={allFreeSeats}
                  onSelect={setSelectedSeats}
                  onRemove={setSelectedSeats}
                  selectedValues={selectedSeats}
                  style={{
                    inputField: {
                      color: 'black',
                    },
                    searchBox: {
                      color: 'yellow',
                      padding: '0.75rem',
                      background: '#fff',
                      borderRadius: '0.375rem',
                    },
                    chips: {
                      background: '#f28316',
                      color: 'white',
                      fontSize: '18px',
                      padding: '0.5em',
                    },
                    option: {
                      color: '#000',
                      fontSize: '14px',
                      fontWeight: 'bold',
                    },
                  }}
                  displayValue="alias"
                />
              </div>
              <div className="space-y-3">
                <button
                  className="font-medium w-full flex items-center justify-center gap-4 tracking-wide rounded-lg transition duration-300 py-3 sm:py-4 px-8 sm:px-9 text-lg sm:text-xl bg-orange-600 text-orange-50 shadow-lg shadow-orange-600/20 hover:bg-orange-550 hover:shadow-orange-550/50 hover:text-white"
                  type="submit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-7 h-7 -ml-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>

                  <span>Koupit vstupenky</span>
                </button>
                <button
                  className="text-sm w-full tracking-wide rounded-lg transition duration-300 py-3  bg-slate-700 text-slate-200 hover:bg-slate-600 hover:text-white hover:shadow-lg"
                  type="submit"
                  onClick={handleRemoveAllSeats}
                >
                  <span>Vymazat výběr</span>
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};
