import Bar from "./Bar"

export default function Diagram({ data }) {
    return (
        <>
            <div className="flex flex-row justify-between align-bottom text-center">
            {data.map((item, key) => {
                return (
                    <Bar 
                        key={key}
                        id={key+1}
                        day={item.day}                      
                        amount={item.amount}
                    />
                )
            })}
            </div>
        </>
    )
}