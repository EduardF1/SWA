import {useState} from "react";

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('');
    const [dayTime, setDayTime] = useState('');
    const [reminder,setReminder] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        // validation
        if(!text){
            alert('Please add a task name.');
            return;
        }
        if(!dayTime){
            alert('Please add a day and time.')
            return;
        }

        onAdd({text, day: dayTime, reminder});

        // clear after form submission
        setText('');
        setDayTime('');
        setReminder(false);
    }

    return (
        <form className={'add-form'} onSubmit={onSubmit}>
            <div className={'form-control'}>
                <label>Task</label>
                <input type={'text'}
                       placeholder={'Add Task'}
                       value={text}
                       onChange={(event) => setText(event.target.value)}
                />
            </div>
            <div className={'form-control'}>
                <label>Day & Time</label>
                <input type={'text'}
                       placeholder={'Add Day & Time'}
                       value={dayTime}
                       onChange={(event) => setDayTime(event.target.value)}
                />
            </div>
            <div className={'form-control form-control-check'}>
                <label>Set Reminder</label>
                <input type={'checkbox'}
                       checked={reminder}
                       value={reminder}
                       onChange={(event) => setReminder(event.currentTarget.checked)}
                />
            </div>
            <input type={'submit'} value={'Save Task'} className={'btn btn-block'}/>
        </form>
    );
};

export default AddTask;