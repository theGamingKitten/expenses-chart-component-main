export default function Bar({ id, day, amount }) {
    const today = new Date().getDay();
    return (
        <>
            <div className="flex flex-col self-end bar">
                <div className="w-9 bg-dark-brown text-cream mb-2 p-1 text-xs invisible amount">{amount}</div>
                <div className={`${today === id ? "bg-cyan": "bg-soft-red"} w-9 rounded-sm hover:opacity-50 hover:cursor-pointer ${day}`}></div>
                <div className="w-9 text-sm text-medium-brown">{day}</div>
            </div>
        </>
    )
}