import React, { useState } from 'react';

function AddTask({ onAdd }) {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [reminder, setReminder] = useState(false);

    const handleOnFormSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert('Please enter a task name');
            return;
        }

        onAdd({ text, date, reminder });

        setText('');
        setDate('');
        setReminder(false);

    }

    return (
        <form className='add-form' onSubmit={(e) => handleOnFormSubmit(e)}>
            <div className='form-control'>
                <label>Task</label>
                <input
                    type='text'
                    placeholder='Add a task'
                    value={text}
                    onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input
                    type='text'
                    placeholder='Add Day and Time'
                    value={date}
                    onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <div className='from control'>
                <input type='submit'
                    value='Save Task'
                    className='btn btn-block' />
            </div>
        </form>
    )
};

export default AddTask;
