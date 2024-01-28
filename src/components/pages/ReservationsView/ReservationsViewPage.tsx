/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
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

export const ReservationsViewPage = () => {
  const [allSeats, setAllSeats] = useState(initialAllSeats);

  useEffect(() => {
    getAllReservations();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      getAllReservations();
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const getAllReservations = async () => {
    try {
      const response = await api().get(Endpoints.GetReservations, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });

      setAllSeats(response.data);

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

  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen p-4 bg-white relative">
        <div className="absolute left-6 top-4 rounded-lg bg-white border border-slate-300 shadow-2xl px-8 py-4">
          <h1 className="font-bold text-3xl mb-4">Rezervace</h1>
          <p className="text-xl mb-2">
            Místa na stání:{' '}
            <span className="font-semibold">
              {allSeats.availableStands} / 434
            </span>
          </p>
          <p className="text-xl">
            Místa na sezení:{' '}
            <span className="font-semibold">
              {allSeats.freeSeats} / {allSeats.seats.length}
            </span>
          </p>
        </div>
        <Map className="w-full h-full" />
      </div>
    </>
  );
};
