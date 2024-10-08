import Diagram from "./Diagram";
import data from "../data.json";

export default function Chart() {
    return (
        <>
            <div className='bg-very-pale-orange flex flex-col p-5'>
                <span className='text-3xl font-bold mb-10'>Spending - Last 7 days</span>
                <Diagram data={data}/>
                <hr className='my-5 ' />
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col'>
                        <span className='text-medium-brown'>Total this month</span>
                        <span className='font-bold text-3xl'>$478.33</span>
                    </div>
                    <div className='flex flex-col self-end text-right'>
                        <span className='font-bold'>+2.4%</span>
                        <span className='text-medium-brown'>from last month</span>
                    </div>
                </div>
            </div>
        </>
    )
}