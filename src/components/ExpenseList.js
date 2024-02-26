import React from 'react';
import ExpenseItem from './ExpenseItem';
import { MdDelete } from "react-icons/md";

const ExpenseList = ({ expenses, handleDelete, handleEdit, clearItems }) => {
  return (
    <>
      <ul className='list'>
        {/* Expense Item */}
        {expenses.map(expense => {
          return (
            <ExpenseItem
              expense={expense}
              key={expense.id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          )
        })}
      </ul>
      {expenses.length > 0 && (
        <button className='btn' onClick={clearItems}>
          목록 지우기
        <MdDelete className='btn-icon' />
      </button>
      )}
    </>
  )
}

export default ExpenseList;