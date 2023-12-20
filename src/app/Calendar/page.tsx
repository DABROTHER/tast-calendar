import React, { useState } from 'react';
import dayjs from 'dayjs';

interface Event {
  title: string;
  date: string;
}

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([
    { title: 'Event 1', date: '2023-12-15' },
    { title: 'Event 2', date: '2023-12-20' },
  ]);

  const getDaysInMonth = (year: number, month: number): string[] => {
    const startOfMonth = dayjs(`${year}-${month}-01`);
    const endOfMonth = startOfMonth.endOf('month');
    const daysInMonth: string[] = [];
    let currentDay = startOfMonth;

    while (currentDay.isBefore(endOfMonth, 'day')) {
      daysInMonth.push(currentDay.format('YYYY-MM-DD'));
      currentDay = currentDay.add(1, 'day');
    }

    return daysInMonth;
  };

  const renderCalendar = (): JSX.Element => {
    const today = dayjs();
    const daysInMonth = getDaysInMonth(today.year(), today.month() + 1);

    return (
      <div className="grid grid-cols-7 gap-2">
        {daysInMonth.map((day) => (
          <div key={day} className="p-2 border">
            <div className="font-semibold">{dayjs(day).date()}</div>
            {renderEvents(day)}
          </div>
        ))}
      </div>
    );
  };

  const renderEvents = (day: string): JSX.Element => {
    const dayEvents = events.filter((event) => event.date === day);

    return (
      <div className="mt-2 space-y-2">
        {dayEvents.map((event) => (
          <div key={event.title} className="bg-blue-200 p-1 rounded">
            {event.title}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Calendar with Events</h2>
      {renderCalendar()}
    </div>
  );
};

export default Calendar;
