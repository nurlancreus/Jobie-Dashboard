import { useEffect, useState } from "react";
export function useCheckRows<T extends { id: number }>(data: Array<T>) {
  const [headerChecked, setHeaderChecked] = useState(false);
  const [rowCheckboxes, setRowCheckboxes] = useState<Record<number, boolean>>(
    {},
  );

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      const initialState: Record<number, boolean> = {};
      data.forEach((item) => {
        initialState[item.id] = false;
      });
      setRowCheckboxes(initialState);
      setHeaderChecked(false);
    }
  }, [data]);

  // Effect to update header checkbox when data changes
  useEffect(() => {
    setHeaderChecked(
      Object.values(rowCheckboxes).every((isChecked) => isChecked),
    );
  }, [rowCheckboxes, data]);

  // Function to handle header checkbox change
  const handleHeaderCheckboxChange = () => {
    setHeaderChecked(!headerChecked);
    setRowCheckboxes((prevRowCheckboxes) => {
      const updatedState: Record<string, boolean> = {};
      Object.keys(prevRowCheckboxes).forEach((id) => {
        updatedState[id] = !headerChecked;
      });
      return updatedState;
    });
  };

  // Function to handle row checkbox change
  const handleRowCheckboxChange = (id: number) => {
    setRowCheckboxes((prevRowCheckboxes) => {
      const updatedState = {
        ...prevRowCheckboxes,
        [id]: !prevRowCheckboxes[id],
      };

      // Update header checkbox based on the state of row checkboxes
      setHeaderChecked(
        Object.values(updatedState).every((isChecked) => isChecked),
      );

      return updatedState;
    });
  };

  return {
    headerChecked,
    handleHeaderCheckboxChange,
    rowCheckboxes,
    handleRowCheckboxChange,
  };
}
