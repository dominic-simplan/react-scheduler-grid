import { DataGrid } from "devextreme-react";
import {
  Column,
  Editing,
  ValidationRule,
} from "devextreme-react/cjs/data-grid";
import { SimpleItemTemplateData } from "devextreme/ui/form";
import React, { useEffect, useState } from "react";

export const ShiftCalendarGridEditorTemplateName =
  "ShiftCalendarGridEditorTemplate";

export const ShiftCalendarGridEditorTemplate: React.FC<{
  data: SimpleItemTemplateData;
}> = ({ data }) => {
  const [pauses, setPauses] = useState<any[]>([]);

  useEffect(() => {
    const formData = data.component.option("formData");
    setPauses(formData.pauses);
  }, [data.component]);

  return (
    <DataGrid dataSource={pauses} width={"300px"} height={"400px"}>
      <Editing
        mode="cell"
        allowUpdating={true}
        allowAdding={true}
        allowDeleting={true}
      />
      <Column dataField={"startDate"} caption={"Start"} dataType={"number"}>
        <ValidationRule type={"required"}></ValidationRule>
      </Column>
      <Column dataField={"endDate"} caption={"End"} dataType={"number"}>
        <ValidationRule type={"required"}></ValidationRule>
      </Column>
    </DataGrid>
  );
};
