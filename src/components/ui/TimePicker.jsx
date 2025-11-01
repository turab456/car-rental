"use client";


 const TimeSelector = ({ selectedTime, onChange }) => {
  const handleAMPM = (ampm) => {
    const hours = selectedTime.getHours();
    let newHours = hours;
    if (ampm === "AM" && hours >= 12) newHours -= 12;
    if (ampm === "PM" && hours < 12) newHours += 12;
    const updated = new Date(selectedTime);
    updated.setHours(newHours);
    onChange(updated);
  };

  return (
    <div className="time-selector">
      <div className="ampm-toggle">
        <button
          className={selectedTime.getHours() < 12 ? "active" : ""}
          onClick={() => handleAMPM("AM")}
        >
          AM
        </button>
        <button
          className={selectedTime.getHours() >= 12 ? "active" : ""}
          onClick={() => handleAMPM("PM")}
        >
          PM
        </button>
      </div>
      <div className="time-slots">
        {Array.from({ length: 24 }, (_, i) => i).map(hour => (
          [0, 30].map(min => {
            const date = new Date(selectedTime);
            date.setHours(hour, min, 0, 0);
            const isSelected =
              selectedTime.getHours() === hour && selectedTime.getMinutes() === min;
            return (
              <button
                key={`${hour}-${min}`}
                className={isSelected ? "selected" : ""}
                onClick={() => onChange(date)}
              >
                {`${hour.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`}
              </button>
            );
          })
        ))}
      </div>
    </div>
  );
};