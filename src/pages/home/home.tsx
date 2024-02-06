import { Scheduler, Template } from "devextreme-react";
import { SimpleItem } from "devextreme/ui/form";
import {
  Appointment,
  AppointmentAddingEvent,
  AppointmentFormOpeningEvent,
} from "devextreme/ui/scheduler";
import React, { useState } from "react";
import {
  ShiftCalendarGridEditorTemplate,
  ShiftCalendarGridEditorTemplateName,
} from "./ShiftCalendarGridEditorTemplate";
import "./home.scss";

export default function Home() {
  const [viewEntries, setViewEntries] = useState<Appointment[]>([]);

  const customizeAppointmentForm = (data: AppointmentFormOpeningEvent) => {
    const gridItem: SimpleItem = {
      dataField: "gridData",
      template: ShiftCalendarGridEditorTemplateName,
    };

    data.form.option(`formData.pauses`, []);
    data.form.option("items", [gridItem]);
  };

  const onAppointmentAdding = (e: AppointmentAddingEvent) => {
    // pauses is empty here as the grid data is not saved yet
    // Here, I would like to validate the grid data and keep the appointment form open if the data is invalid
    console.log(
      "onAppointmentAdding",
      JSON.stringify(e.appointmentData.pauses)
    );
  };

  return (
    <React.Fragment>
      <Scheduler
        dataSource={viewEntries}
        views={["day", "week", "month"]}
        currentView="week"
        onAppointmentFormOpening={customizeAppointmentForm}
        onAppointmentAdding={onAppointmentAdding}
      >
        <Template
          name={ShiftCalendarGridEditorTemplateName}
          component={ShiftCalendarGridEditorTemplate}
        />
      </Scheduler>
    </React.Fragment>
  );
}
