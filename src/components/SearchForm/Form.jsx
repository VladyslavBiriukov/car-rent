import React from "react";

export const Form = () => {
  return (
    <div>
      <form>
        <label>
          Car brand
          <select name="select">
            <option value="value1">Значение 1</option>
            <option value="value2">Значение 2</option>
            <option value="value3">Значение 3</option>
          </select>
        </label>
        <label>
          Price/ 1 hour
          <select name="select">
            <option value="value1">Значение 1</option>
            <option value="value2">Значение 2</option>
            <option value="value3">Значение 3</option>
          </select>
        </label>
      </form>
    </div>
  );
};