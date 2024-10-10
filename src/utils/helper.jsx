import { BiRadioCircle } from 'react-icons/bi';
import { LuMoreHorizontal } from 'react-icons/lu';
import { TbProgress } from 'react-icons/tb';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { AiFillCloseCircle, AiFillWarning } from 'react-icons/ai';
import { BiSignal2, BiSignal3, BiSignal4 } from 'react-icons/bi';
import urgentCol from './assets/urgentCol.svg';
import high from './assets/high.svg';
import med from './assets/med.svg';
import low from './assets/low.svg';
import noPriority from './assets/nopri.svg';
import Todo from './assets/Todo.svg';
import InProgress from './assets/inprog.svg';
import Done from './assets/Done.svg';
import Canceled from './assets/Cancelled.svg';
import Backlog from './assets/Backlog.svg';
export const getPriorityIcon = (priority) => {
    switch (priority) {
        case "No priority": return <img src={noPriority} style={{ width: '1.25vw' }} alt="" />;
        case "Low": return <img src={low} style={{ width: '1.15vw' }} alt="" />;
        case "Medium": return <img src={med} style={{ width: '1.15vw' }} alt="" />;
        case "High": return <img src={high} style={{ width: '1.15vw' }} alt="" />;
        case "Urgent": return <img src={urgentCol} style={{ width: '1.15vw' }} alt="" />;
        default: return <AiFillWarning color='#fc7840' size={14} />;
    }
};

export const getStatusIcon = (status) => { // Changed parameter name to "status" for clarity
    switch (status) {
        case "Backlog":
            return <img src={Backlog} style={{ width: '1vw' }} alt="" />;
        case "Todo":
            return <img src={Todo} style={{ width: '1vw' }} alt="" />;
        case "In progress":
            return <img src={InProgress} style={{ width: '1vw' }} alt="" />; // Added return statement
        case "Done":
            return <img src={Done} style={{ width: '1vw' }} alt="" />;
        case "Canceled":
            return <img src={Canceled} style={{ width: '1vw' }} alt="" />; // Added return statement
        default:
            return <AiFillCloseCircle color='#94a2b3' size={16} />;
    }
};

