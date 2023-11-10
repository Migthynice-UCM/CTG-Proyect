import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const ReservationsForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(dayjs());
  const [selectedCourt, setSelectedCourt] = useState('');
  const [errors, setErrors] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleCourtChange = (event) => {
    setSelectedCourt(event.target.value);
    setErrors({ ...errors, court: '' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let formIsValid = true;
    let newErrors = {};

    if (!selectedDate) {
      newErrors.date = 'Por favor, selecciona una fecha.';
      formIsValid = false;
    }
    if (!selectedTime || selectedTime.hour() === 0 && selectedTime.minute() === 0) {
      newErrors.time = 'Por favor, selecciona una hora.';
      formIsValid = false;
    }
    if (!selectedCourt) {
      newErrors.court = 'Por favor, selecciona una cancha.';
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      console.log('Reserva enviada:', { selectedDate, selectedTime, selectedCourt });
      setSubmissionMessage('Tu reserva ha sido enviada con éxito.');
      setSelectedDate(new Date());
      setSelectedTime(dayjs());
      setSelectedCourt('');
    } else {
      setSubmissionMessage('Por favor, corrige los errores antes de enviar.');
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className='max-w-2xl mx-auto p-4 shadow-xl rounded-lg bg-white mt-10'>
        <h2 className='text-3xl font-bold text-center text-gray-800 py-4'>Reserva tu Cancha</h2>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label htmlFor='date' className='block text-sm font-medium text-gray-700'>Fecha</label>
            <DayPicker 
              selectedDays={selectedDate}
              onDayClick={setSelectedDate}
              className="border rounded p-4"
            />
            {errors.date && <div className="text-red-500 text-sm">{errors.date}</div>}
          </div>
          <div>
            <label htmlFor='time' className='block text-sm font-medium text-gray-700'>Hora</label>
            <TimePicker
              label="Hora"
              value={selectedTime}
              onChange={(newValue) => setSelectedTime(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
            {errors.time && <div className="text-red-500 text-sm">{errors.time}</div>}
          </div>
          <div>
            <label htmlFor='court' className='block text-sm font-medium text-gray-700'>Cancha</label>
            <select
              id='court'
              name='court'
              className={`mt-1 block w-full p-3 border ${errors.court ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}
              value={selectedCourt}
              onChange={handleCourtChange}
            >
              <option value=''>Selecciona una cancha</option>
              <option value='court1'>Cancha 1</option>
              <option value='court2'>Cancha 2</option>
              {/* Agrega más opciones según sea necesario */}
            </select>
            {errors.court && <div className="text-red-500 text-sm">{errors.court}</div>}
          </div>
          <button type='submit' className='w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300'>
            Reservar
          </button>
          {submissionMessage && (
            <div className={`text-center mt-4 ${Object.keys(errors).length === 0 ? 'text-green-500' : 'text-red-500'}`}>
              {submissionMessage}
            </div>
          )}
        </form>
      </div>
    </LocalizationProvider>
  );
};

export default ReservationsForm;

  