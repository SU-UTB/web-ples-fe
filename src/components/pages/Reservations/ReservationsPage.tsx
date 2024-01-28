/* eslint-disable @typescript-eslint/no-explicit-any */
import Multiselect from 'multiselect-react-dropdown';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { api } from '../../../api';
import { Endpoints } from '../../../api/endpoints';
import {
  ButtonClearSelection,
  ButtonReservation,
  ButtonSubmit,
  ButtonWrapper,
  FormInput,
  FormWrapper,
  ReservationHeadline,
  WhiteText,
  WrapperReservation,
} from './Reservations.styled';
import { Map } from './components';

interface LoginData {
  email: string;
  password: string;
}

const initialLoginData: LoginData = {
  email: '',
  password: '',
};

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

export const ReservationsPage = () => {
  const [loginData, setLoginData] = useState(initialLoginData);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [allSeats, setAllSeats] = useState(initialAllSeats);
  const [allFreeSeats, setAllFreeSeats] = useState();

  useEffect(() => {
    setLoggedIn(true);
    getAllReservations();
  }, []);

  const handleSubmitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login();
  };

  const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const login = async () => {
    try {
      const response = await api().post(Endpoints.Login, {
        email: loginData.email,
        password: loginData.password,
      });
      localStorage.setItem('token', response.data.token);
      setLoggedIn(true);
      await getAllReservations();
      setLoginData(initialLoginData);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

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
      toast('Alespoň 1 místo musí být vybráno', {});
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
      <WrapperReservation>
        <div className="flex w-full h-screen">
          <Map className="flex-grow py-16 px-8 " />
          <div className="text-center py-16 pl-8 pr-36">
            <WhiteText>
              Místa na stání: {allSeats.availableStands} / 434
            </WhiteText>
            <WhiteText>
              Místa na sezení: {allSeats.freeSeats} /{allSeats.seats.length}
            </WhiteText>
            <br />
            <br />
            <ReservationHeadline>Nová registrace</ReservationHeadline>
            <FormWrapper onSubmit={handleSubmitNewReservation}>
              <label>
                <WhiteText>Místa na stání:</WhiteText>
                <FormInput type="text" value={selectedStand} readOnly />
              </label>
              <ButtonWrapper>
                <ButtonReservation
                  type="button"
                  onClick={handleIncrementStands}
                >
                  +
                </ButtonReservation>
                <ButtonReservation
                  type="button"
                  onClick={handleDecrementStands}
                >
                  -
                </ButtonReservation>
              </ButtonWrapper>
              <br />
              <br />
              <WhiteText>Místa na sezení</WhiteText>
              <Multiselect
                placeholder="Vyber místa k sezení"
                hidePlaceholder
                options={allFreeSeats}
                onSelect={setSelectedSeats}
                onRemove={setSelectedSeats}
                selectedValues={selectedSeats}
                style={{
                  inputField: {
                    color: 'white',
                    borderRadius: '20px !important',
                  },
                  searchBox: {
                    color: 'yellow',
                    maxWidth: '360px',
                  },
                  chips: {
                    background: '#171547',
                    color: 'white',
                    fontSize: '18px',
                    padding: '0.5em',
                  },
                  option: {
                    color: '#171547',
                    fontSize: '14px',
                    fontWeight: 'bold',
                  },
                }}
                displayValue="alias"
              />
              <ButtonClearSelection
                type="button"
                onClick={handleRemoveAllSeats}
              >
                Smazat výběr
              </ButtonClearSelection>
              <br />
              <br />
              <ButtonSubmit type="submit">Koupit vstupenky</ButtonSubmit>
            </FormWrapper>
          </div>
        </div>
      </WrapperReservation>
    </>
  );
};
